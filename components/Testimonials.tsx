import React from 'react';

const reviews = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "VP of Infrastructure",
    company: "Nexus Autonomous Systems",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120&h=120",
    rating: 5,
    text: "Sourcing custom AI hardware through Axora saved us months of engineering overhead. We safely bypassed middlemen and connected directly with top-tier edge computer manufacturers within days."
  },
  {
    id: 2,
    name: "Marcus Vance",
    role: "Head of AI & LLM Pipelines",
    company: "CognitiveFlow Labs",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120",
    rating: 5,
    text: "Finding high-quality, pre-vetted data annotation partners at scale was our primary bottleneck. Axora's escrow payment terms and verified rating systems completely mitigated our transaction risks."
  },
  {
    id: 3,
    name: "Elena Rostova",
    role: "Principal Architecture Lead",
    company: "VividVision Systems",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120&h=120",
    rating: 5,
    text: "The operational transparency on this platform is unmatched. We smoothly negotiated custom fine-tuning timelines and finalized compliance-ready legal contracts all inside Axora's secure terminal."
  }
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase">Enterprise Success Stories</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Trusted by Leaders in AI Production
          </h2>
          <p className="text-base sm:text-lg text-slate-500 mt-4">
            See how forward-thinking operations accelerate deployment and reduce procurement friction with Axora.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between relative group"
            >
              {/* Blue accent top bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-t-2xl transition-colors duration-200" />
              
              <div>
                {/* Star Ratings */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>
              </div>

              {/* Profile Meta Section */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100 mt-auto">
                <img 
                  className="w-12 h-12 rounded-full object-cover border-2 border-slate-100 bg-slate-100 shrink-0"
                  src={review.image} 
                  alt={review.name}
                />
                <div className="min-w-0">
                  <h4 className="text-base font-bold text-slate-900 truncate">
                    {review.name}
                  </h4>
                  <p className="text-xs text-slate-500 truncate mt-0.5">
                    {review.role}, <span className="text-blue-600 font-medium">{review.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}