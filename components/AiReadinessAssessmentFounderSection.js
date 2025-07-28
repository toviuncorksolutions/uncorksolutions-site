import Image from 'next/image';

export default function AiReadinessAssessmentFounderSection() {
  return (
    <section
      id='ai-founder'
      aria-label='Founder Highlight'
      className='bg-[#f1f2f4] py-12 px-6 md:px-16'
    >
      <div className='max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8'>
        <div className='flex-shrink-0 w-44'>
          <div className='rounded-xl overflow-hidden border-b-4' style={{ borderColor: '#2364e0' }}>
            <Image
              src='/tovi-headshot.png'
              alt='Tovi Heilbronn, Founder, Uncork Solutions'
              width={305}
              height={305}
              className='w-full h-auto object-cover'
            />
          </div>
        </div>
        <div>
          <h3 className='text-lg font-semibold mb-2'>Tovi Heilbronn</h3>
          <div className='text-sm text-gray-600 mb-1'>Founder, Uncork Solutions</div>
          <p className='text-gray-700 leading-relaxed'>
            17+ years driving digital transformation and technology strategy for enterprise clients—turning complexity into measurable business outcomes across digital, product, and platform modernization.<br />
            <span className='block mt-2 text-gray-500 italic'>
              "I believe every client deserves clear answers and practical direction—without the drag of drawn-out consulting engagements."
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}