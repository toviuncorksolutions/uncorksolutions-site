import { z } from 'zod';
import { FREE_EMAIL_DOMAINS } from './constants';
import { getDomain, isFreeEmail } from './email';

export const irsSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z
    .string()
    .email('Invalid email')
    .refine((e) => !isFreeEmail(getDomain(e), FREE_EMAIL_DOMAINS), 'Please use your work email'),
  challenge: z.string().min(1),
  outcome: z.string().min(1),
  obstacle: z.string().min(1),
  alternatives: z.string().min(1),
  lowPrice: z.coerce.number().int().positive(),
  highPrice: z.coerce.number().int().positive(),
  decisionAuthority: z.string().min(1),
  timeline: z.string().min(1),
});

export type IRSFormData = z.infer<typeof irsSchema>;
