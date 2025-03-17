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
        <div id='Service' className='bg-white md:max-h-[100vh] grid md:grid-rows-12'>
              {/* Header Section */}
              <div className='flex flex-col md:flex-row gap-4 md:gap-[30px] px-4 md:pl-[50px] pt-8 pb-8 md:pt-0 md:row-span-1'>
                    <h2 className='service-header py-3 md:py-[15px] bg-[#bafe65] md:mt-[10px] h-auto md:h-[45px] w-full md:w-[10%] rounded-2xl items-center justify-center flex text-2xl md:text-[30px]'>
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
                          <h4 className='bg-[#bafe65] w-[50%] md:w-[35%] rounded-[4px] flex justify-center py-1'>Search Engine</h4>
                          <h4 className='bg-[#bafe65] w-[45%] md:w-[30%] rounded-[4px] py-1 mt-2'>Optimization</h4>
                        </div>
                        <div className='flex flex-row pt-4 md:pt-[45px] pl-4 md:pl-[30px] pb-4 md:pb-0'>
                          <div className='bg-[url(./assets/icon1.svg)] w-8 md:w-[17%] bg-no-repeat bg-contain h-8'></div>
                          <div className='pt-2 md:pt-[10px] pl-2'><h4>Service Info</h4></div>
                        </div>
                      </div>
                      <div className='bg-[url(./assets/ser1.webp)] bg-no-repeat bg-center bg-contain h-48 md:h-auto'></div>
                    </div>

                    {/* Card 2 */}
                    <div className='service-card bg-[#1a1a24] border-2 grid grid-cols-1 md:grid-cols-2 rounded-3xl md:rounded-4xl p-4 md:p-0'>
                      <div className='grid grid-rows-2'>
                        <div className='flex flex-col text-xs md:text-[13px] pl-4 md:pl-[30px] pt-4 md:pt-[30px]'> 
                          <h4 className='bg-white w-[55%] md:w-[35%] rounded-[4px] flex justify-center py-1'>Social Media</h4>
                          <h4 className='bg-white w-[50%] md:w-[30%] rounded-[4px] py-1 mt-2'>Marketing</h4>
                        </div>
                        <div className='flex flex-row pt-4 md:pt-[45px] pl-4 md:pl-[30px] pb-4 md:pb-0'>
                          <div className='bg-[url(./assets/icon2.svg)] w-8 md:w-[17%] bg-no-repeat bg-contain h-8'></div>
                          <div className='pt-2 md:pt-[10px] pl-2'><h4 className='text-white'>Service Info</h4></div>
                        </div>
                      </div>
                      <div className='bg-[url(./assets/ser3.webp)] bg-no-repeat bg-center bg-contain h-48 md:h-auto'></div>
                    </div>

                    {/* Card 3 */}
                    <div className='service-card bg-[#b9ff66] border-2 grid grid-cols-1 md:grid-cols-2 rounded-3xl md:rounded-4xl p-4 md:p-0'>
                      <div className='grid grid-rows-2'>
                        <div className='flex flex-col text-xs md:text-[13px] pl-4 md:pl-[30px] pt-4 md:pt-[30px]'> 
                          <h4 className='bg-white w-[40%] md:w-[25%] rounded-[4px] flex justify-start py-1'>Content</h4>
                          <h4 className='bg-white w-[40%] md:w-[25%] rounded-[4px] py-1 mt-2'>Creation</h4>
                        </div>
                        <div className='flex flex-row pt-4 md:pt-[45px] pl-4 md:pl-[30px] pb-4 md:pb-0'>
                          <div className='bg-[url(./assets/icon1.svg)] w-8 md:w-[17%] bg-no-repeat bg-contain h-8'></div>
                          <div className='pt-2 md:pt-[10px] pl-2'><h4>Service Info</h4></div>
                        </div>
                      </div>
                      <div className='bg-[url(./assets/ser5.webp)] bg-no-repeat bg-center bg-contain h-48 md:h-auto'></div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className='pt-4 md:pt-[20px] gap-4 md:gap-[20px] grid md:grid-rows-3'>
                    {/* Card 4 */}
                    <div className='service-card bg-[#b9ff66] border-2 grid grid-cols-1 md:grid-cols-2 rounded-3xl md:rounded-4xl p-4 md:p-0'>
                      <div className='grid grid-rows-2'>
                        <div className='flex flex-col text-xs md:text-[13px] pl-4 md:pl-[30px] pt-4 md:pt-[30px]'> 
                          <h4 className='bg-white w-[55%] md:w-[35%] rounded-[4px] flex justify-center py-1'>Pay-per-click</h4>
                          <h4 className='bg-white w-[50%] md:w-[30%] rounded-[4px] py-1 mt-2'>advertising</h4>
                        </div>
                        <div className='flex flex-row pt-4 md:pt-[45px] pl-4 md:pl-[30px] pb-4 md:pb-0'>
                          <div className='bg-[url(./assets/icon1.svg)] w-8 md:w-[17%] bg-no-repeat bg-contain h-8'></div>
                          <div className='pt-2 md:pt-[10px] pl-2'><h4>Service Info</h4></div>
                        </div>
                      </div>
                      <div className='bg-[url(./assets/ser2.webp)] bg-no-repeat bg-center bg-contain h-48 md:h-auto'></div>
                    </div>

                    {/* Card 5 */}
                    <div className='service-card bg-[#f3f3f3] border-2 grid grid-cols-1 md:grid-cols-2 rounded-3xl md:rounded-4xl p-4 md:p-0'>
                      <div className='grid grid-rows-2'>
                        <div className='flex flex-col text-xs md:text-[13px] pl-4 md:pl-[30px] pt-4 md:pt-[30px]'> 
                          <h4 className='bg-[#bafe65] w-[35%] md:w-[20%] rounded-[4px] flex justify-start py-1'>Email</h4>
                          <h4 className='bg-[#bafe65] w-[40%] md:w-[25%] rounded-[4px] py-1 mt-2'>Marketing</h4>
                        </div>
                        <div className='flex flex-row pt-4 md:pt-[45px] pl-4 md:pl-[30px] pb-4 md:pb-0'>
                          <div className='bg-[url(./assets/icon1.svg)] w-8 md:w-[17%] bg-no-repeat bg-contain h-8'></div>
                          <div className='pt-2 md:pt-[10px] pl-2'><h4>Service Info</h4></div>
                        </div>
                      </div>
                      <div className='bg-[url(./assets/ser4.webp)] bg-no-repeat bg-center bg-contain h-48 md:h-auto'></div>
                    </div>

                    {/* Card 6 */}
                    <div className='service-card bg-[#1a1a24] border-2 grid grid-cols-1 md:grid-cols-2 rounded-3xl md:rounded-4xl p-4 md:p-0'>
                      <div className='grid grid-rows-2'>
                        <div className='flex flex-col text-xs md:text-[13px] pl-4 md:pl-[30px] pt-4 md:pt-[30px]'> 
                          <h4 className='bg-white w-[60%] md:w-[35%] rounded-[4px] flex justify-center py-1'>Analytics and</h4>
                          <h4 className='bg-white w-[55%] md:w-[30%] rounded-[4px] py-1 mt-2'>Tracking</h4>
                        </div>
                        <div className='flex flex-row pt-4 md:pt-[45px] pl-4 md:pl-[30px] pb-4 md:pb-0'>
                          <div className='bg-[url(./assets/icon2.svg)] w-8 md:w-[17%] bg-no-repeat bg-contain h-8'></div>
                          <div className='pt-2 md:pt-[10px] pl-2'><h4>Service Info</h4></div>
                        </div>
                      </div>
                      <div className='bg-[url(./assets/ser6.webp)] bg-no-repeat bg-center bg-contain h-48 md:h-auto'></div>
                    </div>
                  </div>
              </div>
        </div>

        <style>{`
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