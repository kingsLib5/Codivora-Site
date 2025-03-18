import React from 'react';

function Price1() {
  const pricingPlans = [
    {
      title: 'Starter',
      subTitle: 'Best option for personal use & your next project',
      price: '$29',
      interval: '/month',
      features: [
        'Individual configuration',
        'No setup, or hidden fees',
        'Team size: 1 developer',
        'Premium support: 6 months',
        'Free updates: 6 months',
      ],
    },
    {
      title: 'Company',
      subTitle: 'Relevant for multiple users, extended & premium support',
      price: '$99',
      interval: '/month',
      features: [
        'Individual configuration',
        'No setup, or hidden fees',
        'Team size: 10 developers',
        'Premium support: 12 months',
        'Free updates: 24 months',
      ],
    },
    {
      title: 'Enterprise',
      subTitle: 'Best for large scale uses and extended redistribution rights',
      price: '$499',
      interval: '/month',
      features: [
        'Individual configuration',
        'No setup, or hidden fees',
        'Team size: 100+ developers',
        'Premium support: 24 months',
        'Free updates: 36 months',
      ],
    },
  ];

  return (
    <div className="bg-white max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      {/* Heading Section */}
      <div className="text-center py-8">
        <div className="text-black text-[35px] font-serif font-bold">
          Designed for business teams like yours
        </div>
        <p className="text-[20px] font-medium mt-2">
          Here at Codivora we focus on markets where technology, innovation, and <br />
          capital can unlock long-term value and drive economic growth.
        </p>
      </div>

      {/* Pricing Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="border-[2px] border-black rounded-[35px] grid grid-rows-5 h-[500px]"
          >
            {/* Title & Subtitle */}
            <div className="row-span-1 grid justify-center items-center text-center font-bold text-black text-[25px] p-4">
              {plan.title}
              <p className="text-[18px] font-light mt-1">{plan.subTitle}</p>
            </div>

            {/* Price */}
            <div className="row-span-1 flex justify-center items-center text-[black] text-xl font-bold">
              <span className="text-5xl font-bold mr-1">{plan.price}</span>
              <span className="text-base">{plan.interval}</span>
            </div>

            {/* Features */}
            <div className="row-span-2 p-4 text-[black] flex flex-col gap-2">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[black] font-bold mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    {feature.split(':').map((part, i) => (
                      <span
                        key={i}
                        className={
                          part.includes('months') ||
                          part.includes('month') ||
                          (part.includes('developer') && !part.includes('Team size'))
                            ? 'font-bold'
                            : ''
                        }
                      >
                        {i > 0 ? `:${part}` : part}
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="row-span-1 flex justify-center items-center">
              <button className="bg-[#2B7FFF] text-black w-[80%] py-3 px-8 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Price1;