import type { NextApiRequest, NextApiResponse } from 'next';
import { irsSchema } from '../../lib/irsSchema';
import rateLimit from 'next-rate-limit'; // <-- NEW

const WEBHOOK_URL = process.env.WEBHOOK_URL!;
const TIMEOUT_MS = 4000;

// 1. Set up the limiter
const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500, // Max 500 distinct IPs per interval
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // 2. Enforce rate limit
  try {
    await limiter.check(res, 10, 'CACHE_TOKEN'); // max 10 requests per minute per IP
  } catch {
    return res.status(429).json({ error: 'Rate limit exceeded. Try again in a minute.' });
  }

  if (req.method !== 'POST') return res.status(405).end();

  const parsed = irsSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.format());

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

    const up = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(parsed.data),
      signal: controller.signal,
    });
    clearTimeout(timer);

    if (!up.ok) {
      const msg = await up.text();
      return res.status(502).json({ error: msg || 'Upstream error' });
    }
    res.status(204).end();
  } catch (err) {
    console.error('IRS Waitlist API error:', err);
    res.status(500).json({ error: 'Submission failed' });
  }
}