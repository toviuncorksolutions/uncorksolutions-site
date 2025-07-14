import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import CryptoJS from 'crypto-js';
import { irsSchema, IRSFormData } from '../lib/irsSchema';

export function useIRSWaitlistForm() {
  const form = useForm<IRSFormData>({
    resolver: zodResolver(irsSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      challenge: '',
      outcome: '',
      obstacle: '',
      alternatives: '',
      lowPrice: '',
      highPrice: '',
      decisionAuthority: '',
      timeline: '',
    },
  });

  const submit = async (data: IRSFormData) => {
    const res = await fetch('/api/irs-waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Submit failed');

    // anonymised GTM push
    const hash = CryptoJS.SHA256(data.email).toString();
    (window as any).dataLayer = (window as any).dataLayer || [];
    window.dataLayer.push({
      event: 'initiativeReadinessScanWaitlistFormSubmitted',
      emailHash: hash,
    });
  };

  return { form, submit };
}
