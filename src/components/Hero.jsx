import React from 'react'

function Hero() {
  return (
    <>
        <div id='Home' className='bg-white h-[70vh] grid'>
          <div className='grid grid-cols-2 mx-[40px]'>
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
              <div className='bg-[url(./assets/hero.svg)] bg-center bg-cover'></div>
          </div>
        </div>

        {/* Add CSS for animations and fonts */}
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Poppins:wght@400;500&display=swap');
          
          .font-playfair {
            font-family: 'Playfair Display', serif;
          }

          body {
            font-family: 'Poppins', sans-serif;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 1s ease-out forwards;
          }

          .animation-delay-200 {
            animation-delay: 200ms;
          }

          .animation-delay-300 {
            animation-delay: 300ms;
          }
        `}</style>
    </>
  )
}

export default Hero