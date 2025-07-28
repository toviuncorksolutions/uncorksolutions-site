// lib/rateLimit.ts
import rateLimit from 'next-rate-limit';

// Limit: 10 requests per 60 seconds (per IP)
export default rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 unique IPs per interval
});
