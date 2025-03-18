import React from 'react'
import { HiArrowUpRight } from "react-icons/hi2";

function UseCases() {
  return (
    <div id="Cases" className="bg-white my-[40px] grid md:grid-rows-12 h-[70vh]">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-[30px] px-4 md:pl-[50px] pt-8 pb-8 md:pt-0 md:row-span-1">
        <h2 className="service-header py-3 md:py-[15px] bg-blue-500 md:mt-[10px] h-auto md:h-[45px] w-full md:w-[15%] rounded-2xl flex items-center justify-center text-2xl md:text-2xl capitalize">
          case studies
        </h2>
        <h6 className="service-subheader text-2xl md:text-base md:pt-[10px] text-center md:text-left">
          Explore Real-Life Examples of Our Proven Digital Marketing Success <br /> through Our Case Studies
        </h6>
      </div>

      {/* Cases Grid */}
      <div className="grid p-10  my-[50px] h-auto md:h-[60vh]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px]">
          <div className="bg-black text-white rounded-[60px] grid items-center text-[19px] pl-[60px] p-6">
            <div className="space-y-7">
              <div>
                <p>
                  For a local restaurant, we <br /> 
                  implemented a targeted PPC <br /> 
                  campaign that resulted in a 50% <br /> 
                  increase in website traffic and a 25% <br /> 
                  increase in sales.
                </p>
              </div>
              <div className="flex gap-[20px]">
                <p className="text-blue-500">Case Info</p>
                <p className="text-2xl">
                  <HiArrowUpRight className="font-bold text-blue-500 h-[30px]" />
                </p>
              </div>
            </div>
          </div>
          <div className="bg-black text-white rounded-[60px] grid items-center text-[19px] pl-[60px] p-6">
            <div className="space-y-7">
              <div>
                For a B2B software company, we <br /> 
                developed an SEO strategy that <br /> 
                resulted in a first page ranking for key <br /> 
                keywords and a 200% increase in <br /> 
                organic traffic.
              </div>
              <div className="flex gap-[20px]">
                <p className="text-blue-500">Case Info</p>
                <p className="text-2xl">
                  <HiArrowUpRight className="font-bold text-blue-500 h-[30px]" />
                </p>
              </div>
            </div>
          </div>
          <div className="bg-black text-white rounded-[60px] grid items-center text-[19px] pl-[60px] p-6">
            <div className="space-y-7">
              <div>
                For a national retail chain, we created a <br /> 
                social media marketing campaign that <br /> 
                increased followers by 25% and <br /> 
                generated a 20% increase in online <br /> 
                sales.
              </div>
              <div className="flex gap-[20px]">
                <p className="text-blue-500">Case Info</p>
                <p className="text-2xl">
                  <HiArrowUpRight className="font-bold text-blue-500 h-[30px]" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UseCases;
