import React, { useEffect } from 'react'

function Proposal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-proposal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
       <div className='bg-white grid min-h-[60vh]'>
        <div className='bg-gray-100 my-8 md:my-[50px] mx-4 md:mx-[70px] rounded-xl md:rounded-[20px] grid grid-cols-1 md:grid-cols-2'>
          <div className='grid items-center p-4 md:pl-[80px] md:py-0 order-2 md:order-1'>
            <ul className='flex flex-col gap-3 md:gap-[15px]'>
              <li>
                <h2 className='text-2xl md:text-[30px] animate-proposal opacity-0 translate-y-6 transition-all duration-500'>
                  Let's make things happen
                </h2>
              </li>
              <li>
                <h5 className='text-sm md:text-base animate-proposal opacity-0 translate-y-6 transition-all duration-500 delay-200'>
                  Contact us today to learn more about how our digital {' '}
                  <span className="hidden md:inline"><br /></span>
                  marketing services can help your business grow and {' '}
                  <span className="hidden md:inline"><br /></span>
                  succeed online.  
                </h5>
              </li>
              <li>
                <a href="http://wa.me/2347030024413">
                    <button className="relative text-white bg-[#1a1a24] w-full md:w-[60%] h-12 md:h-[60px] overflow-hidden border-2 border-gray-900 px-4 md:px-8 py-2 rounded-xl text-sm md:text-lg font-medium hover:text-white transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500 before:to-blue-500 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 animate-proposal opacity-0 translate-y-6 transition-all duration-500 delay-300">
                      <span className="relative">Get a free Consultation</span>
                    </button>
                </a>
              </li>
            </ul>
          </div>
          <div className='min-h-[300px] md:min-h-0 bg-[url(./assets/serv4.png)] bg-no-repeat bg-cover md:bg-contain bg-center md:bg-left animate-proposal opacity-0 md:translate-x-6 transition-all duration-500 delay-100 order-1 md:order-2'></div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .animate-proposal {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </>
  ) 
}

export default Proposal