import { useEffect } from 'react';

export default function AraModal({
  show,
  onClose,
  onSubmit,
  formData,
  onChange,
  error,
  setError,
  submitting,
  emailRef,
  modalRef
}) {
  // Focus management, escape key, and trap tab
  useEffect(() => {
    if (!show) return;
    modalRef.current?.focus();
    setTimeout(() => emailRef.current?.focus(), 100);

    const handleFocusTrap = (e) => {
      if (e.key === 'Tab') {
        const focusable = modalRef.current.querySelectorAll(
          'input, textarea, select, button, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };

    const modal = modalRef.current;
    modal?.addEventListener('keydown', handleFocusTrap);

    return () => {
      modal?.removeEventListener('keydown', handleFocusTrap);
    };
  }, [show, modalRef, emailRef]);

  // Clear error every time modal is opened
  useEffect(() => {
    if (show && typeof setError === 'function') setError('');
  }, [show, setError]);

  if (!show) return null;

  return (
    <div
      id="waitlist-modal"
      data-gtm="waitlist-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="waitlist-modal-title"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      tabIndex={-1}
      ref={modalRef}
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === 'Escape') onClose();
      }}
    >
      <div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl overflow-y-auto max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        <h2
          id="waitlist-modal-title"
          className="text-xl font-semibold mb-4 text-center"
        >
          Reserve Your Spot&mdash;Serious Leaders Only
        </h2>
        <h3 className="text-base font-normal text-gray-600 mb-6 text-center">
          Early access is prioritized for organizations ready to move. Your responses remain 100% confidential and help us deliver an assessment that’s sharply focused on <em>your</em> goals&mdash;so you get a clear action plan, not just generic advice.
        </h3>
        <form
          id="waitlist-form"
          aria-label="AI Readiness Assessment Waitlist"
          autoComplete="on"
          onSubmit={onSubmit}
          className="space-y-4"
        >
          <div>
            <label htmlFor="email" className="sr-only">Work Email</label>
            <input
              ref={emailRef}
              id="email"
              type="email"
              name="email"
              placeholder="Work Email *"
              className="w-full p-2 border rounded"
              value={formData.email}
              onChange={onChange}
              required
              autoComplete="email"
              aria-label="Work Email"
              data-gtm="input-email"
            />
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