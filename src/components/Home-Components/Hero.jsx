import React from 'react'

function Hero() {
  return (
    <>
        <div id='Home' className='bg-white h-[70vh] grid'>
          {/* Desktop layout remains unchanged */}
          <div className='grid grid-cols-2 mx-[40px] h-full'>
              {/* Text Content (unchanged desktop layout) */}
              <div className='grid items-center'>
               <ul className='flex flex-col gap-[15px]'>
                <li>
                  <h1 className='text-[40px] font-semibold animate-fadeInUp opacity-0 font-playfair'>
                    Navigating the <br />digital landscape <br />for success
                  </h1>
                </li>
                <li>
                  <h5 className='text-[20px] animate-fadeInUp opacity-0 animation-delay-200'>
                    Our digital marketing agency helps businesses grow and succeed <br /> 
                    online through a range of services including SEO, PPC, social media <br /> 
                    marketing, and content creation.
                  </h5>
                </li>
                <li>
                  <button className="relative text-white bg-[#1a1a24] w-[40%] h-[60px] overflow-hidden border-2 border-gray-900 px-8 py-2 rounded-xl text-lg font-medium hover:text-white transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500 before:to-blue-500 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 animate-fadeInUp opacity-0 animation-delay-300">
                    <span className="relative">Chat Us Today</span>
                  </button>
                </li>
               </ul>
              </div>
              <div className='bg-[url(./assets/hero.png)] bg-center bg-cover'></div>
          </div>

          {/* Mobile overlay (same DOM element) */}
          <div className='md:hidden grid grid-rows-2 h-full w-full'>
              <div className='bg-[url(./assets/hero.svg)] bg-contain bg-no-repeat bg-center'></div>
              <div className='grid items-center px-4 pb-8'>
               <ul className='flex flex-col gap-4'>
                <li>
                  <h1 className='text-3xl font-semibold text-center font-playfair leading-tight'>
                    Navigating the digital landscape for success
                  </h1>
                </li>
                <li>
                  <h5 className='text-base text-center leading-relaxed'>
                    Our digital marketing agency helps businesses grow and succeed online through SEO, PPC, social media marketing, and content creation.
                  </h5>
                </li>
                <li className='flex justify-center'>
                  <button className="relative text-white bg-[#1a1a24] w-full max-w-[300px] h-14 overflow-hidden border-2 border-gray-900 px-6 py-2 rounded-xl text-lg font-medium transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500 before:to-blue-500 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100">
                    <span className="relative">Chat Us Today</span>
                  </button>
                </li>
               </ul>
              </div>
          </div>
        </div>

        {/* Responsive CSS */}
        <style jsx global>{`
          @media (max-width: 768px) {
            #Home > div:first-child {
              display: none !important;
            }
            
            #Home {
              height: auto;
              min-height: 100vh;
              padding: 2rem 0;
            }
            
            .font-playfair {
              font-size: 2rem;
              line-height: 1.3;
            }
          }

          @media (min-width: 769px) {
            #Home > div:last-child {
              display: none !important;
            }
          }
        `}</style>
    </>
  )
}

export default Hero