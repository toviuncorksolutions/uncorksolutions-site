import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const faqs = [
  {
    question: 'What is the AI Readiness Assessment?',
    answer:
      'It’s an operator-built, boardroom-ready assessment to diagnose, de-risk, and accelerate your organization’s AI adoption.',
  },
  {
    question: 'Who is this for?',
    answer:
      'Executives and technology leaders in mid-market or enterprise businesses who want a strategic, enterprise-holistic AI adoption plan.',
  },
  {
    question: 'What do I get at the end?',
    answer:
      'A 16-page actionable report outlining your risks, gaps, and next steps—built for boardroom credibility, not just a checkbox.',
  },
  {
    question: 'Is this confidential?',
    answer: 'Absolutely. Your answers and your report are never shared—no exceptions.',
  },
  {
    question: 'How long does it take?',
    answer: '20 minutes to complete.',
  },
  {
    question: 'How and when do I get results?',
    answer: 'Playbook is delivered to your inbox—often same day.',
  },
  {
    question: 'Who participates?',
    answer:
      'Executives and their direct reports with responsibility for AI, product, tech, data, compliance.',
  },
  {
    question: 'Is this vendor-neutral?',
    answer: '100%. There’s no pitch—just the truth about your real readiness.',
  },
];

export default function AiReadinessAssessmentFaq() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 id="faq-title" className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-0">
        {faqs.map((faq, idx) => (
          <div
            key={faq.question}
            className={idx !== faqs.length - 1 ? 'border-b border-dotted border-gray-300' : ''}
          >
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex justify-between items-center w-full py-5 text-left text-lg font-semibold text-gray-900 focus:outline-none hover:bg-gray-50 transition">
                    <span>{faq.question}</span>
                    <ChevronUpIcon
                      className={`h-5 w-5 ml-2 text-blue-700 transition-transform duration-200 ${
                        open ? 'rotate-180' : ''
                      }`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="pb-5 pr-8 pl-1 text-gray-900 text-lg">
                    {faq.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
}
