import React from 'react';

const manufacturers = [
  {
    id: 1,
    name: "NeuralForge Systems",
    category: "AI Hardware & Edge Compute",
    country: "United States",
    rating: 4.9,
    isVerified: true,
  },
  {
    id: 2,
    name: "OptimaData Labs",
    category: "Data Annotation & Pipelines",
    country: "India",
    rating: 4.8,
    isVerified: true,
  },
  {
    id: 3,
    name: "CyberSync Robotics",
    category: "Autonomous Systems & Robotics",
    country: "Germany",
    rating: 4.7,
    isVerified: true,
  },
  {
    id: 4,
    name: "VisionaryIO",
    category: "Computer Vision Models",
    country: "Canada",
    rating: 4.9,
    isVerified: true,
  },
  {
    id: 5,
    name: "LanguageLogic",
    category: "NLP & Custom LLM Development",
    country: "United Kingdom",
    rating: 4.6,
    isVerified: false,
  },
  {
    id: 6,
    name: "SynthoCore AI",
    category: "Synthetic Data Generation",
    country: "Israel",
    rating: 4.8,
    isVerified: true,
  },
];

export default function FeaturedManufacturers() {
  return (
    <section className="bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 pb-4 border-b border-slate-200">
          <div>
            <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase">Axora B2B Marketplace</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-1">Featured AI Manufacturers</h2>
          </div>
          <p className="text-slate-500 mt-2 md:mt-0 max-w-md text-sm md:text-right">
            Pre-vetted enterprise partners delivering production-ready AI components, hardware, and integration services.
          </p>
        </div>

        {/* Manufacturers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {manufacturers.map((company) => (
            <div 
              key={company.id} 
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Header Row: Category & Verification */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md line-clamp-1">
                    {company.category}
                  </span>
                  {company.isVerified && (
                    <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium border border-blue-100 shrink-0">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                        <path d="M6.267 3.455a.75.75 0 00-.708-.523.75.75 0 00-.55.238l-2.5 2.5a.75.75 0 001.06 1.06l1.97-1.97 4.97 4.97a.75.75 0 101.06-1.06l-5.5-5.5z" transform="translate(4 4)"/>
                      </svg>
                      Verified
                    </div>
                  )}
                </div>

                {/* Company Name */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-1">
                  {company.name}
                </h3>

                {/* Meta Row: Country & Rating */}
                <div className="flex items-center gap-4 text-sm text-slate-600 mb-6">
                  {/* Country */}
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="truncate">{company.country}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 shrink-0">
                    <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-semibold text-slate-800">{company.rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-2.5 px-4 rounded-lg transition-colors duration-150 flex items-center justify-center gap-2 group-hover:shadow-sm">
                View Profile
                <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}