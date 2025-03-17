import React from 'react'

function Proposal() {
  return (
    <>
      <div className=' bg-white grid h-[60vh]'>
        <div className=' bg-gray-100 my-[50px] mx-[70px] rounded-[20px] grid grid-cols-2 '>
            <div className=' grid items-center pl-[80px] '>
                <ul className=' flex flex-col gap-[15px]'>
                    <li>
                        <h2 className=' text-[30px]'>Let's make things happen</h2>
                    </li>
                    <li>
                        <h5>Contact us today to learn more about how our digital <br /> marketing services can help your business grow and <br /> succeed online.</h5>
                    </li>
                    <li>
                     <button className="relative text-white bg-[#1a1a24] w-[60%] h-[60px] overflow-hidden border-2 border-gray-900 px-8 py-2 rounded-xl text-lg font-medium hover:text-white transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500 before:to-blue-500 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 animate-fadeInUp opacity-0 animation-delay-300">
                         <span className="relative">Get a free Consultation</span>
                     </button>
                    </li>
                </ul>
            </div>
            <div className=' bg-[url(./assets/serv4.png)] bg-no-repeat bg-contain bg-left'></div>
        </div>
      </div>
    </>
  )
}

export default Proposal
