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
    answer:
      '100%. There’s no pitch—just the truth about your real readiness. This will give you speed and independence from vendors.',
  },
];

export default function AiReadinessAssessmentFaq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="bg-white w-full max-w-2xl mx-auto py-16 md:px-16 px-4"
    >
      <h2 id="faq-title" className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-0 divide-y divide-gray-200">
        {faqs.map((faq) => (
          <Disclosure key={faq.question}>
            {({ open }) => (
              <div className="py-4">
                <DisclosureButton className="flex justify-between items-center w-full text-left text-lg font-semibold text-gray-900 focus:outline-none hover:bg-gray-50 px-1 py-3 transition rounded-md">
                  <span>{faq.question}</span>
                  <ChevronUpIcon
                    className={`h-5 w-5 text-blue-700 transform transition-transform duration-200 ${
                      open ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </DisclosureButton>
                <DisclosurePanel className="pt-2 pl-1 pr-4 text-gray-800 text-base">
                  {faq.answer}
                </DisclosurePanel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
}
