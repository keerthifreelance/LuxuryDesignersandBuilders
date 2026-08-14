import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'What interior design services do you provide in Aruppukkottai?',
      answer: 'We provide comprehensive interior design services in Aruppukkottai, Tamil Nadu, including modular kitchen planning, luxury living room decoration, custom bedroom wardrobe layouts, false ceiling design, lighting schemes, and premium furniture fabrication.'
    },
    {
      question: 'Do you provide 2D and 3D interior design?',
      answer: 'Yes, we provide Vastu-compliant 2D space planning and photorealistic 3D interior/exterior walkthrough visualizations. This allows you to experience and refine your future home or commercial space in realistic detail before construction begins.'
    },
    {
      question: 'Do you design residential homes?',
      answer: 'Yes! We specialize in residential design including luxury bungalows, modern duplex villas, courtyard homes, and apartments designed for Tamil Nadu weather conditions.'
    },
    {
      question: 'Do you provide architectural design services?',
      answer: 'Yes, we provide full structural and architectural planning, building elevations, Vastu consultations, and sanction drawings for approval in Aruppukkottai and surrounding areas.'
    },
    {
      question: 'Can you create 3D visualizations before construction?',
      answer: 'Absolutely. We generate 3D rendering visualizations for both interior and exterior elevation designs so you can finalize structural details, paint color palettes, and material selections in advance.'
    },
    {
      question: 'Do you provide turnkey interior solutions?',
      answer: 'Yes, we offer turnkey "design and build" solutions. We manage the entire project lifecycle—from interior concepts and material sourcing to construction engineering, plumbing, and final key handover.'
    },
    {
      question: 'How can I contact your interior design team in Aruppukkottai?',
      answer: 'You can contact us via phone at +91 96004 70328, via email, or by filling out our site consultation form on this website. Our office is located in 5/377, Lakshmi Nagar, West St, Kalloorani, Aruppukattai, Virudhunagar (dt), Tamil Nadu 626105.'
    }
  ];

  // Generate JSON-LD FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-28 md:py-36 bg-[#0A0A0A] text-[#F5F5F5] border-t border-white/10">
      {/* Inject Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-[1000px] mx-auto px-6 sm:px-12 md:px-16">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-[#C5A059] uppercase block">
            QUESTIONS & CLARIFICATIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-sm sm:text-base text-white/60 font-light max-w-2xl mx-auto">
            Everything you need to know about our interior architecture, modular kitchen installation, 3D visualization, and turnkey build workflow.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-white/10 pb-4 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center text-left py-4 focus:outline-none group interactive-el"
                >
                  <span className="font-serif text-base sm:text-lg text-white group-hover:text-[#C5A059] transition-colors">
                    {faq.question}
                  </span>
                  <span className="material-symbols-outlined text-[#C5A059] transform transition-transform duration-300">
                    {isOpen ? 'remove' : 'add'}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light pb-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
