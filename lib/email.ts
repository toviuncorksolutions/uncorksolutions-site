export const getDomain = (email: string) => email.toLowerCase().split('@')[1] ?? '';

export const isFreeEmail = (domain: string, freeDomains: readonly string[]) =>
  freeDomains.some((d) => domain.endsWith(d));
