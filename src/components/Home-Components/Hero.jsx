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
                    Our agency helps businesses grow and succeed <br /> 
                    online through a range of services including social media <br /> 
                    adverstment, management and marketing, Ecommerce development, Business 
                    Management software(Inventory) <br /> and Web development .
                  </h5>
                </li>
                <li>
                  <a href="http://wa.me/2348105460026">
                      <button className="relative text-white bg-[#1a1a24] w-[40%] h-[60px] overflow-hidden border-2 border-gray-900 px-8 py-2 rounded-xl text-lg font-medium hover:text-white transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500 before:to-blue-500 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 animate-fadeInUp opacity-0 animation-delay-300">
                        <span className="relative">Chat Us Today</span>
                      </button>
                  </a>
                  
                </li>
               </ul>
              </div>
              <div className='bg-[url(./assets/hero.png)] bg-center bg-cover'></div>
          </div>

          {/* Mobile overlay (same DOM element) */}
          <div className='md:hidden grid grid-rows-2 h-full w-full'>
              <div className='bg-[url(./assets/hero.png)] bg-contain bg-no-repeat bg-center'></div>
              <div className='grid items-center px-4 pb-8'>
               <ul className='flex flex-col gap-4'>
                <li>
                  <h1 className='text-3xl font-semibold text-center font-playfair leading-tight'>
                    Navigating the digital landscape for success
                  </h1>
                </li>
                <li>
                  <h5 className='text-base text-center leading-relaxed'>
                  Our agency helps businesses grow and succeed <br /> 
                    online through a range of services including social media <br /> 
                    adverstment, management and marketing, Ecommerce development, Business 
                    Management software(Inventory) <br /> and Web development .
                  </h5>
                </li>
                <li className='flex justify-center'>
                <a 
                  href="http://wa.me/2348105460026" 
                  className="inline-block w-[70%] text-center max-w-[300px] md:max-w-none md:w-[30%]"
                >
                  <button className="relative text-white bg-[#1a1a24] w-[70%] h-[50px] md:h-[60px] overflow-hidden border-2 border-gray-900 px-4 md:px-8 py-2 md:py-3 rounded-xl text-base md:text-lg font-medium hover:text-white transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500 before:to-blue-500 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 animate-fadeInUp opacity-0 animation-delay-300 focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <span className="relative">Chat Us Today</span>
                  </button>
                </a>
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