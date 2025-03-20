import React, { useEffect } from 'react'

function Services() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translate(0)";
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.service-header, .service-subheader, .service-card');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
        <div id='Service' className='bg-white my-[30px] md:max-h-[100vh] grid md:grid-rows-12'>
              {/* Header Section */}
              <div className='flex flex-col md:flex-row gap-4 md:gap-[30px] px-4 md:pl-[50px] pt-8 pb-8 md:pt-0 md:row-span-1'>
                    <h2 className='service-header py-3 md:py-[15px] bg-blue-500 md:mt-[10px] h-auto md:h-[45px] w-full md:w-[10%] rounded-2xl items-center justify-center flex text-2xl md:text-[30px]'>
                      Services
                    </h2>
                    <h6 className='service-subheader text-sm md:text-base md:pt-[10px] text-center md:text-left'>
                      At our digital marketing agency, we offer a range of services to help <br /> businesses grow and succeed online. These services include
                    </h6>
              </div>

              {/* Cards Grid */}
              <div className='bg-white md:row-span-11 gap-4 md:gap-[20px] grid grid-cols-1 md:grid-cols-2 px-4 md:mx-[45px] pb-8 md:pb-0'>
                  {/* Left Column */}
                  <div className='pt-4 md:pt-[20px] gap-4 md:gap-[20px] grid md:grid-rows-3'>
                    {/* Card 1 */}
                    <div className='service-card bg-[#f3f3f3] border-2 grid grid-cols-1 md:grid-cols-2 rounded-3xl md:rounded-4xl p-4 md:p-0'>
                      <div className='grid grid-rows-2'>
                        <div className='flex flex-col text-xs md:text-[13px] pl-4 md:pl-[30px] pt-4 md:pt-[30px]'> 
                          <h4 className='bg-blue-500 w-[30%] md:w-[30%] rounded-[4px] flex justify-start py-1'>SocialMedia</h4>
                          <h4 className='bg-blue-500 w-[40%] md:w-[35%] rounded-[4px] py-1 '>Advertisement</h4>
                        </div>
                        <div className='flex flex-row pt-4 md:pt-[45px] pl-4 md:pl-[30px] pb-4 md:pb-0'>
                          <div className='bg-[url(./assets/icon2.svg)] w-8 md:w-[17%] bg-no-repeat bg-contain h-8'></div>
                          <a href="http://wa.me/2348136772798">
                          <div className='pt-2 text-black md:pt-[10px] pl-2'><h4>Service Info</h4></div>
                          </a>
                        </div>
                      </div>
                      <div className='bg-[url(./assets/social.png)] bg-no-repeat bg-center bg-contain h-48 md:h-auto'></div>
                    </div>

                    {/* Card 2 */}
                    <div className='service-card bg-[#1a1a24] border-2 grid grid-cols-1 md:grid-cols-2 rounded-3xl md:rounded-4xl p-4 md:p-0'>
                      <div className='grid grid-rows-2'>
                        <div className='flex flex-col text-xs md:text-[13px] pl-4 md:pl-[30px] pt-4 md:pt-[30px]'> 
                          <h4 className='bg-white w-[30%] md:w-[35%] rounded-[4px] flex justify-center pr-1 py-1'>Social Media</h4>
                          <h4 className='bg-white w-[25%] md:w-[30%] rounded-[4px] py-1'>Marketing</h4>
                        </div>
                        <div className='flex flex-row pt-4 md:pt-[45px] pl-4 md:pl-[30px] pb-4 md:pb-0'>
                          <div className='bg-[url(./assets/icon2.svg)] w-8 md:w-[17%] bg-no-repeat bg-contain h-8'></div>
                          <a href="http://wa.me/2348136772798">
                          <div className='pt-2 text-white md:pt-[10px] pl-2'><h4>Service Info</h4></div>
                          </a>
                        </div>
                      </div>
                      <div className='bg-[url(./assets/market.png)] bg-no-repeat bg-center bg-contain h-48 md:h-auto'></div>
                    </div>

                    {/* Card 3 */}
                    <div className='service-card bg-blue-500 border-2 grid grid-cols-1 md:grid-cols-2 rounded-3xl md:rounded-4xl p-4 md:p-0'>
                      <div className='grid grid-rows-2'>
                        <div className='flex flex-col text-xs md:text-[13px] pl-4 md:pl-[30px] pt-4 md:pt-[30px]'> 
                          <h4 className='bg-white w-[50%] md:w-[55%] rounded-[4px] flex justify-start py-1'>Business Management</h4>
                          <h4 className='bg-white w-[15%] md:w-[25%] rounded-[4px] py-1 '>Tools</h4>
                        </div>
                        <div className='flex flex-row pt-4 md:pt-[45px] pl-4 md:pl-[30px] pb-4 md:pb-0'>
                          <div className='bg-[url(./assets/icon2.svg)] w-8 md:w-[17%] bg-no-repeat bg-contain h-8'></div>
                          <a href="http://wa.me/2348136772798">
                          <div className='pt-2 text-white md:pt-[10px] pl-2'><h4>Service Info</h4></div>
                          </a>
                        </div>
                      </div>
                      <div className='bg-[url(./assets/ser5.webp)] bg-no-repeat bg-center bg-contain h-48 md:h-auto'></div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className='pt-4 md:pt-[20px] gap-4 md:gap-[20px] grid md:grid-rows-3'>
                    {/* Card 4 */}
                    <div className='service-card bg-blue-500 border-2 grid grid-cols-1 md:grid-cols-2 rounded-3xl md:rounded-4xl p-4 md:p-0'>
                      <div className='grid grid-rows-2'>
                        <div className='flex flex-col text-xs md:text-[13px] pl-4 md:pl-[30px] pt-4 md:pt-[30px]'> 
                          <h4 className='bg-white w-[20%] md:w-[20%] rounded-[4px] flex justify-center  py-1'>Website</h4>
                          <h4 className='bg-white w-[50%] md:w-[35%] rounded-[4px] py-1 '>Development</h4>
                        </div>
                        <div className='flex flex-row pt-4 md:pt-[45px] pl-4 md:pl-[30px] pb-4 md:pb-0'>
                          <div className='bg-[url(./assets/icon2.svg)] w-8 md:w-[17%] bg-no-repeat bg-contain h-8'></div>
                          <a href="http://wa.me/2349076084515">
                          <div className='pt-2 text-white md:pt-[10px] pl-2'><h4>Service Info</h4></div>
                          </a>
                        </div>
                      </div>
                      <div className='bg-[url(./assets/webdev.png)] bg-no-repeat bg-center bg-contain h-48 md:h-auto'></div>
                    </div>

                    {/* Card 5 */}
                    <div className='service-card bg-[#f3f3f3] border-2 grid grid-cols-1 md:grid-cols-2 rounded-3xl md:rounded-4xl p-4 md:p-0'>
                      <div className='grid grid-rows-2'>
                        <div className='flex flex-col text-xs md:text-[13px] pl-4 md:pl-[30px] pt-4 md:pt-[30px]'> 
                          <h4 className='bg-blue-500 w-[30%] md:w-[30%] rounded-[4px] flex justify-start py-1'>Ecommerce</h4>
                          <h4 className='bg-blue-500 w-[20%] md:w-[25%] rounded-[4px] py-1 '>Website</h4>
                        </div>
                        <div className='flex flex-row pt-4 md:pt-[45px] pl-4 md:pl-[30px] pb-4 md:pb-0'>
                          <div className='bg-[url(./assets/icon2.svg)] w-8 md:w-[17%] bg-no-repeat bg-contain h-8'></div>
                          <a href="http://wa.me/2349076084515">
                          <div className='pt-2 text-black md:pt-[10px] pl-2'><h4>Service Info</h4></div>
                          </a>
                        </div>
                      </div>
                      <div className='bg-[url(./assets/website.png)] bg-no-repeat bg-center bg-contain h-48 md:h-auto'></div>
                    </div>

                    {/* Card 6 */}
                    <div className='service-card bg-[#1a1a24] border-2 grid grid-cols-1 md:grid-cols-2 rounded-3xl md:rounded-4xl p-4 md:p-0'>
                      <div className='grid grid-rows-2'>
                        <div className='flex flex-col text-xs md:text-[13px] pl-4 md:pl-[30px] pt-4 md:pt-[30px]'> 
                          <h4 className='bg-white w-[25%] md:w-[35%] rounded-[4px] flex justify-center py-1'>SocialMedia</h4>
                          <h4 className='bg-white w-[30%] md:w-[35%] rounded-[4px] py-1 '>Management</h4>
                        </div>
                        <div className='flex flex-row pt-4 md:pt-[45px] pl-4 md:pl-[30px] pb-4 md:pb-0'>
                          <div className='bg-[url(./assets/icon2.svg)] w-8 md:w-[17%] bg-no-repeat bg-contain h-8'></div>
                          <a href="http://wa.me/2349076084515">
                          <div className='pt-2 text-white md:pt-[10px] pl-2'><h4>Service Info</h4></div>
                          </a>
                          
                        </div>
                      </div>
                      <div className='bg-[url(./assets/ser6.webp)] bg-no-repeat bg-center bg-contain h-48 md:h-auto'></div>
                    </div>
                  </div>
              </div>
        </div>

        <style>{`

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

          .service-header, .service-subheader, .service-card {
            opacity: 0;
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .service-header {
            transform: translateX(-100px);
          }

          .service-subheader {
            transform: translateX(100px);
          }

          .service-card {
            transform: translateY(50px);
          }

          @media (prefers-reduced-motion: reduce) {
            .service-header, .service-subheader, .service-card {
              transition: none;
            }
          }

           @media (max-width: 768px) {
            .service-card {
              min-height: 300px;
            }
            
            .service-card > div:last-child {
              height: 200px;
            }

            .service-header {
              width: 40% !important;
              font-size: 1.5rem;
            }
          }
        `}</style>
    </>
  )
}

export default Services