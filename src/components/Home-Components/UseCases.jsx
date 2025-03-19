import React, { useEffect } from 'react'
import { HiArrowUpRight } from "react-icons/hi2";

function UseCases() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="Cases" className="bg-white my-[40px] grid md:grid-rows-12 min-h-[70vh] md:h-[70vh]">
      <div className="flex flex-col md:flex-row gap-4 md:gap-[30px] px-4 md:pl-[50px] pt-8 pb-8 md:pt-0 md:row-span-1">
        <h2 className="service-header py-3 md:py-[15px] bg-blue-500 text-black md:mt-[10px] h-auto md:h-[45px] w-full md:w-[15%] rounded-2xl flex items-center justify-center text-xl md:text-2xl capitalize">
          case studies
        </h2>
        <h6 className="service-subheader text-gray-800 text-lg md:text-base md:pt-[10px] text-center md:text-left px-4">
          Explore Real-Life Examples of Our Proven Digital Marketing Success <br /> through Our Case Studies
        </h6>
      </div>

      <div className="grid p-5 md:p-10 my-[20px] md:my-[50px] h-auto md:h-[60vh] overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-[10px]">
          <div className="bg-black text-white rounded-[40px] md:rounded-[60px] grid items-center text-[16px] md:text-[19px] pl-[30px] md:pl-[60px] p-4 md:p-6 animate-on-scroll">
            <div className="space-y-4 md:space-y-7">
              <div>
                <p>
                  For a local restaurant, we <br /> 
                  implemented a targeted PPC <br /> 
                  campaign that resulted in a 50% <br /> 
                  increase in website traffic and a 25% <br /> 
                  increase in sales.
                </p>
              </div>
              <div className="flex gap-[15px] md:gap-[20px]">
                <p className="text-blue-500">Case Info</p>
                <p className="text-xl md:text-2xl">
                <a href="http://wa.me/2347030024413">
                  <HiArrowUpRight className="font-bold text-blue-500 h-[25px] md:h-[30px]" />
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-black text-white rounded-[40px] md:rounded-[60px] grid items-center text-[16px] md:text-[19px] pl-[30px] md:pl-[60px] p-4 md:p-6 animate-on-scroll">
            <div className="space-y-4 md:space-y-7">
              <div>
                For a B2B software company, we <br /> 
                developed an SEO strategy that <br /> 
                resulted in a first page ranking for key <br /> 
                keywords and a 200% increase in <br /> 
                organic traffic.
              </div>
              <div className="flex gap-[15px] md:gap-[20px]">
                <p className="text-blue-500">Case Info</p>
                <p className="text-xl md:text-2xl">
                  <a href="http://wa.me/2347030024413">
                  <HiArrowUpRight className="font-bold text-blue-500 h-[25px] md:h-[30px]" />
                  </a>
                  
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black text-white rounded-[40px] md:rounded-[60px] grid items-center text-[16px] md:text-[19px] pl-[30px] md:pl-[60px] p-4 md:p-6 animate-on-scroll">
            <div className="space-y-4 md:space-y-7">
              <div>
                For a national retail chain, we created a <br /> 
                social media marketing campaign that <br /> 
                increased followers by 25% and <br /> 
                generated a 20% increase in online <br /> 
                sales.
              </div>
              <div className="flex gap-[15px] md:gap-[20px]">
                <p className="text-blue-500">Case Info</p>
                <p className="text-xl md:text-2xl">
                <a href="http://wa.me/2347030024413">
                  <HiArrowUpRight className="font-bold text-blue-500 h-[25px] md:h-[30px]" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-on-scroll {
          opacity: 0;
          animation-duration: 0.8s;
          animation-fill-mode: forwards;
        }

        .animated {
          animation-name: slideUp;
        }

        @media (max-width: 767px) {
          .grid.grid-cols-1.md\\:grid-cols-3 {
            gap: 20px;
          }
          
          .service-subheader {
            font-size: 16px;
            line-height: 1.4;
          }
        }
      `}</style>
    </div>
  )
}

export default UseCases;