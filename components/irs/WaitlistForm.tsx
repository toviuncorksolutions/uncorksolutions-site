import React, { useRef, useState, useEffect } from 'react';

const FREE_EMAIL_DOMAINS = [
  'gmail.com','yahoo.com','hotmail.com','aol.com','outlook.com','icloud.com','mail.com','msn.com',
];

const REQUIRED_FIELDS = [
  'firstName','lastName','email','challenge','outcome','obstacle','alternatives','lowPrice','highPrice','decisionAuthority','timeline',
];

const WEBHOOK_URL = process.env.NEXT_PUBLIC_WEBHOOK_URL;

export default function WaitlistForm({ onSuccess }: { onSuccess: () => void }) {
  const [formData, setFormData] = useState({
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
  });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const firstNameRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => { firstNameRef.current?.focus(); }, []);

  function getDomain(email: string) {
    return email.trim().split('@')[1]?.toLowerCase() || '';
  }

  function isFreeEmail(domain: string) {
    return FREE_EMAIL_DOMAINS.some((d) => domain.endsWith(d));
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setError('');
    if (!WEBHOOK_URL) {
      setError('Internal configuration error: missing webhook endpoint.');
      return;
    }
    const normalizedEmail = formData.email.trim().toLowerCase();

    for (const key of REQUIRED_FIELDS) {
      if (!String(formData[key as keyof typeof formData]).trim()) {
        setError('Please complete all required fields.');
        return;
      }
    }
    if (!normalizedEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (isFreeEmail(getDomain(normalizedEmail))) {
      setError('Please use your work email address (not a free email provider).');
      return;
    }
    const low = Number(formData.lowPrice);
    const high = Number(formData.highPrice);
    if (
      !Number.isFinite(low) ||
      !Number.isFinite(high) ||
      !Number.isInteger(low) ||
      !Number.isInteger(high) ||
      low < 0 ||
      high < 0
    ) {
      setError('Please enter positive whole numbers for price fields.');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, email: normalizedEmail }),
      });
      if (!res.ok) {
        const message = await res.text();
        throw new Error(message || 'Submission failed');
      }
      if (typeof window !== 'undefined') {
        if (!Array.isArray(window.dataLayer)) window.dataLayer = [];
        window.dataLayer.push({
          event: 'initiativeReadinessScanWaitlistFormSubmitted',
          category: 'Initiative Readiness Scan Waitlist Form',
          action: 'Submit',
          label: normalizedEmail,
          formData: { ...formData, email: normalizedEmail },
        });
      }
      setFormData({
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
      });
      onSuccess();
    } catch {
      setError('There was a problem submitting the form. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <h2 className="text-xl font-semibold mb-4 text-center">
        You&apos;re Almost There&mdash;Help Us Tailor Your Experience
      </h2>
      <h3 className="text-base font-normal text-gray-600 mb-6 text-center">
        We keep this confidential and use it only to deliver the best possible scan for your unique situation.
      </h3>
      <form
        id="waitlist-form"
        aria-label="Initiative Readiness Scan Waitlist"
        autoComplete="on"
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="firstName" className="sr-only">First Name</label>
            <input
              ref={firstNameRef}
              id="firstName"
              type="text"
              name="firstName"
              placeholder="First name *"
              className="p-2 border rounded w-full"
              value={formData.firstName}
              onChange={handleChange}
              required
              autoComplete="given-name"
              aria-label="First Name"
              data-gtm="input-firstname"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="lastName" className="sr-only">Last Name</label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Last name *"
              className="p-2 border rounded w-full"
              value={formData.lastName}
              onChange={handleChange}
              required
              autoComplete="family-name"
              aria-label="Last Name"
              data-gtm="input-lastname"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email *"
            className="w-full p-2 border rounded"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            aria-label="Work Email"
            data-gtm="input-email"
          />
        </div>
        <div>
          <label htmlFor="challenge" className="sr-only">Main Challenge</label>
          <textarea
            id="challenge"
            name="challenge"
            placeholder="What’s the main pain point you're solving for right now?"
            className="w-full p-2 border rounded"
            rows={1}
            value={formData.challenge}
            onChange={handleChange}
            required
            aria-label="Main Challenge"
            data-gtm="input-challenge"
          />
        </div>
        <div>
          <label htmlFor="outcome" className="sr-only">Desired Outcome</label>
          <textarea
            id="outcome"
            name="outcome"
            placeholder="What outcome are you trying to achieve?"
            className="w-full p-2 border rounded"
            rows={1}
            value={formData.outcome}
            onChange={handleChange}
            required
            aria-label="Desired Outcome"
            data-gtm="input-outcome"
          />
        </div>
        <div>
          <label htmlFor="obstacle" className="sr-only">Obstacles</label>
          <textarea
            id="obstacle"
            name="obstacle"
            placeholder="What obstacles are in the way?"
            className="w-full p-2 border rounded"
            rows={1}
            value={formData.obstacle}
            onChange={handleChange}
            required
            aria-label="Obstacles"
            data-gtm="input-obstacle"
          />
        </div>
        <div>
          <label htmlFor="alternatives" className="sr-only">Alternatives</label>
          <textarea
            id="alternatives"
            name="alternatives"
            placeholder="What other solutions or options are you considering?"
            className="w-full p-2 border rounded"
            rows={1}
            value={formData.alternatives}
            onChange={handleChange}
            required
            aria-label="Alternatives"
            data-gtm="input-alternatives"
          />
        </div>
        <div>
          <label htmlFor="lowPrice" className="sr-only">Lowest Price</label>
          <input
            id="lowPrice"
            type="number"
            inputMode="numeric"
            pattern="\d*"
            name="lowPrice"
            placeholder="What price would make this a great deal? *"
            className="w-full p-2 border rounded"
            value={formData.lowPrice}
            onChange={handleChange}
            required
            min="0"
            step="1"
            aria-label="Lowest Price"
            data-gtm="input-lowprice"
          />
        </div>
        <div>
          <label htmlFor="highPrice" className="sr-only">Highest Price</label>
          <input
            id="highPrice"
            type="number"
            inputMode="numeric"
            pattern="\d*"
            name="highPrice"
            placeholder="What's the max you'd pay for high value? *"
            className="w-full p-2 border rounded"
            value={formData.highPrice}
            onChange={handleChange}
            required
            min="0"
            step="1"
            aria-label="Highest Price"
            data-gtm="input-highprice"
          />
        </div>
        <div>
          <label htmlFor="decisionAuthority" className="sr-only">Who will lead the decision for this?</label>
          <select
            id="decisionAuthority"
            name="decisionAuthority"
            className="w-full p-2 border rounded"
            value={formData.decisionAuthority}
            onChange={handleChange}
            required
            aria-label="Decision Authority"
            data-gtm="input-decisionauthority"
          >
            <option value="" disabled>
              Who will lead the decision for this? *
            </option>
            <option value="Myself">Myself</option>
            <option value="Part of a team">I'm part of a team</option>
            <option value="Someone else">Someone else</option>
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className="sr-only">How soon will you move forward with a solution? *</label>
          <select
            id="timeline"
            name="timeline"
            className="w-full p-2 border rounded"
            value={formData.timeline}
            onChange={handleChange}
            required
            aria-label="Decision Timeline"
            data-gtm="input-timeline"
          >
            <option value="" disabled>
              How soon will you move forward with a solution? *
            </option>
            <option value="ASAP">ASAP</option>
            <option value="1-3 months">1–3 months</option>
            <option value="3-6 months">3–6 months</option>
            <option value="Just exploring">Just exploring</option>
          </select>
        </div>
        {error && (
          <div className="text-red-600 text-sm" role="alert" id="waitlist-form-error">
            {error}
          </div>
        )}
        <div className="flex justify-between gap-4">
          <button
            id="waitlist-submit"
            type="submit"
            className="w-full cta-btn bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-800 transition"
            disabled={submitting}
            aria-label="Register"
            data-gtm="register-submit"
          >
            {submitting ? 'Registering...' : 'Register'}
          </button>
          <button
            id="waitlist-cancel"
            type="button"
            onClick={onSuccess}
            disabled={submitting}
            className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
            aria-label="Cancel"
            data-gtm="modal-cancel"
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}