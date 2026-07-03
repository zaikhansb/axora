import React from 'react';

const steps = [
  {
    number: "01",
    title: "Search Manufacturers",
    description: "Browse thousands of pre-vetted AI hardware vendors and specialized model developers. Filter by category, global region, and quality benchmark metrics.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    number: "02",
    title: "Connect Directly",
    description: "Bypass middlemen and initiate end-to-end encrypted technical discussions directly with engineering labs. Share specifications, APIs, and customization needs.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Place Orders Securely",
    description: "Finalize compliance-ready corporate contracts. Manage milestones, escrow payouts, and hardware delivery logistics directly inside Axora's secure terminal.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase">Simplified B2B Procurement</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            How Axora Streamlines Your AI Sourcing
          </h2>
          <p className="text-base sm:text-lg text-slate-500 mt-4">
            An enterprise-ready pipeline optimized for discovering, negotiating, and executing contracts with global AI component manufacturers.
          </p>
        </div>

        {/* Timeline/Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Subtle connecting line for desktop view */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-slate-100 -translate-y-12 z-0" />

          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 relative z-10 flex flex-col justify-between group"
            >
              <div>
                {/* Upper Badge Layout */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-sm">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-black text-slate-200 group-hover:text-blue-200/70 transition-colors selection:bg-transparent">
                    {step.number}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Decorative Accent Bar */}
              <div className="w-12 h-1 bg-slate-200 group-hover:bg-blue-600 transition-colors mt-8 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}