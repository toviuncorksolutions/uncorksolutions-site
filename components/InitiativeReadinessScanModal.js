import { useEffect } from 'react';

export default function InitiativeReadinessScanModal({
  show,
  onClose,
  onSubmit,
  formData,
  onChange,
  error,
  setError,
  submitting,
  firstNameRef,
  modalRef,
}) {
  // Focus on first field once when opening; trap Tab; close on Escape
  useEffect(() => {
    if (!show) return;

    const raf = requestAnimationFrame(() => {
      // Focus the first name input once the modal is in the DOM
      firstNameRef?.current?.focus?.();
    });

    const handleKeyDown = (e) => {
      if (!modalRef?.current) return;

      if (e.key === 'Tab') {
        const focusables = modalRef.current.querySelectorAll(
          'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (!focusables || focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
      }
    };

    const modalEl = modalRef.current;
    modalEl?.addEventListener('keydown', handleKeyDown);

    // Optional: prevent background scroll while open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      cancelAnimationFrame(raf);
      modalEl?.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [show]); // ⬅️ run only when open/close toggles

  // Clear any prior error on open
  useEffect(() => {
    if (show && typeof setError === 'function') setError('');
  }, [show, setError]);

  if (!show) return null;

  return (
    <div
      id="irs-modal"
      data-gtm="waitlist-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="waitlist-modal-title"
      aria-describedby="waitlist-modal-desc"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      tabIndex={-1}
      ref={modalRef}
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="waitlist-modal-title" className="text-xl font-semibold mb-4 text-center">
          Reserve Your Spot&mdash;Serious Leaders Only
        </h2>
        <div className="text-sm text-gray-400 italic mb-2 text-center">
          (Takes less than 2 minutes to complete)
        </div>
        <h3
          id="waitlist-modal-desc"
          className="text-base font-normal text-gray-600 mb-6 text-center"
        >
          Early access is prioritized for organizations ready to move. Your responses remain 100%
          confidential and help us deliver a scan that’s sharply focused on <em>your</em>{' '}
          goals&mdash;so you get a clear action plan, not just generic advice.
        </h3>

        <form
          id="waitlist-form"
          aria-label="Initiative Readiness Scan Waitlist"
          autoComplete="on"
          onSubmit={onSubmit}
          className="space-y-4"
        >
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="firstName" className="sr-only">
                First Name
              </label>
              <input
                ref={firstNameRef}
                id="firstName"
                type="text"
                name="firstName"
                placeholder="First name *"
                className="p-2 border rounded w-full"
                value={formData.firstName}
                onChange={onChange}
                required
                autoComplete="given-name"
                data-gtm="input-firstname"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="lastName" className="sr-only">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Last name *"
                className="p-2 border rounded w-full"
                value={formData.lastName}
                onChange={onChange}
                required
                autoComplete="family-name"
                data-gtm="input-lastname"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Work Email *"
              className="w-full p-2 border rounded"
              value={formData.email}
              onChange={onChange}
              required
              autoComplete="email"
              aria-required="true"
              aria-invalid={!!error}
              aria-describedby={error ? 'email-error' : undefined}
              data-gtm="input-email"
            />
          </div>

          <div>
            <label htmlFor="challenge" className="sr-only">
              Main Challenge
            </label>
            <textarea
              id="challenge"
              name="challenge"
              placeholder="What’s the main pain point you’re solving for right now?"
              className="w-full p-2 border rounded"
              rows={1}
              value={formData.challenge}
              onChange={onChange}
              required
              data-gtm="input-challenge"
            />
          </div>

          <div>
            <label htmlFor="outcome" className="sr-only">
              Desired Outcome
            </label>
            <textarea
              id="outcome"
              name="outcome"
              placeholder="What outcome are you trying to achieve?"
              className="w-full p-2 border rounded"
              rows={1}
              value={formData.outcome}
              onChange={onChange}
              required
              data-gtm="input-outcome"
            />
          </div>

          <div>
            <label htmlFor="obstacle" className="sr-only">
              Obstacles
            </label>
            <textarea
              id="obstacle"
              name="obstacle"
              placeholder="What obstacles are in the way?"
              className="w-full p-2 border rounded"
              rows={1}
              value={formData.obstacle}
              onChange={onChange}
              required
              data-gtm="input-obstacle"
            />
          </div>

          <div>
            <label htmlFor="decisionAuthority" className="sr-only">
              Who will lead the decision for this?
            </label>
            <select
              id="decisionAuthority"
              name="decisionAuthority"
              className="w-full p-2 border rounded"
              value={formData.decisionAuthority}
              onChange={onChange}
              required
              data-gtm="input-decisionauthority"
            >
              <option value="" disabled>
                Who will lead the decision for this? *
              </option>
              <option value="Myself">Myself</option>
              <option value="Part of a team">I&apos;m part of a team</option>
              <option value="Someone else">Someone else</option>
            </select>
          </div>

          <div>
            <label htmlFor="timeline" className="sr-only">
              How soon will you move forward with a solution? *
            </label>
            <select
              id="timeline"
              name="timeline"
              className="w-full p-2 border rounded"
              value={formData.timeline}
              onChange={onChange}
              required
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
            <div className="text-red-600 text-sm" role="alert" id="email-error">
              {error}
            </div>
          )}

          <div className="flex justify-between gap-4" role="group" aria-label="Modal actions">
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
              onClick={onClose}
              disabled={submitting}
              className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
              aria-label="Cancel"
              data-gtm="modal-cancel"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
