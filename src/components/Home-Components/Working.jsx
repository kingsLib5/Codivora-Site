import React, { useState } from 'react';

const Working = () => {
  // Initialize sections with default title and content.
  const [sections, setSections] = useState([
    { title: 'Consultation',  content: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.' },
    { title: 'Research', content: 'After the consultation, we will conduct thorough research to identify your target audience, competitors, and industry trends. This will help us develop a comprehensive strategy to achieve your business goals.' },
    { title: 'Implementation', content: 'Once the research is complete, we will begin implementing the strategy. This may include optimizing your website, creating content, and launching marketing campaigns. Our team will work diligently to ensure that all tasks are completed on time and within budget.' },
    { title: 'Optimization', content: 'After the initial implementation, we will continuously monitor and optimize your marketing efforts to ensure maximum results. This may involve adjusting ad campaigns, refining content, and analyzing data to identify areas for improvement.' },
    { title: 'Reporting', content: 'Throughout the process, we will provide regular reports on the performance of your marketing campaigns. This will allow you to track progress, measure success, and make informed decisions about future strategies.' },
    { title: 'Improvement', content: 'Based on the data and insights gathered from the reports, we will make recommendations for further improvement. This may involve refining existing strategies, exploring new opportunities, or adjusting tactics to better align with your business goals.' },
  ]);

  // Manage which accordion section is open.
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the open/closed state of a section.
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Update the content for a given section.
  const handleContentChange = (index, event) => {
    const newSections = [...sections];
    newSections[index].content = event.target.value;
    setSections(newSections);
  };

  // ToggleIcon displays a plus sign that rotates into a minus sign.
  const ToggleIcon = ({ isActive }) => (
    <div className="relative w-6 h-6">
      {/* Horizontal bar – always visible */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black h-1 w-full rounded transition-all duration-500"></div>
      {/* Vertical bar – rotates and scales down when active */}
      <div
        className={`absolute left-1/2 top-0 transform -translate-x-1/2 bg-black w-1 h-full rounded transition-all duration-500 ${
          isActive ? 'rotate-90 scale-y-0' : 'rotate-0 scale-y-100'
        }`}
      ></div>
    </div>
  );

  return (
    <div className="grid  min-h-screen grid-rows-[auto,1fr] p-8 gap-[20px] py-[50px] ">
      {/* Header Section for Working Process */}
      <div className=" flex flex-col md:flex-row gap-4 md:gap-8 px-8 md:px-16 pt-8 pb-8 rounded-2xl">
        <h2 className="py-3 capitalize bg-blue-500 mt-2 md:mt-4 h-auto md:h-12 w-full md:w-1/3 rounded-2xl flex items-center justify-center text-2xl md:text-3xl text-white">
          Our Working Process
        </h2>
        <h6 className="text-sm md:text-base pt-4 md:pt-6 text-center md:text-left text-gray-800">
          Step-by-Step Guide to Achieving Your Business Goals
        </h6>
      </div>

      {/* Accordion Section */}
      <div className="w-full max-w-8xl mx-auto mt-10 px-4 space-y-6">
        {sections.map((section, index) => {
          // Format the number with leading zero.
          const formattedNumber = (index + 1).toString().padStart(2, '0');

          return (
            <div
              key={index}
              className={`rounded-4xl overflow-hidden shadow-lg shadow-black border-2 border-black transition-colors duration-500 ${
                activeIndex === index ? 'bg-blue-500 text-black' : 'bg-white text-black'
              }`}
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full px-24 py-16 font-semibold flex justify-between items-center transition-all duration-500 focus:outline-none rounded-t-4xl ${
                  activeIndex === index ? 'bg-blue-500 text-black' : 'bg-white text-black'
                }`}
              >
                <span className="flex items-center">
                  {/* Styled Number */}
                  <span className="mr-6 text-6xl font-medium tracking-wider drop-shadow">
                    {formattedNumber}
                  </span>
                  <span>{section.title}</span>
                </span>
                {/* Toggle sign: stays in its own white, rounded container */}
                <div className="rounded-full border border-black w-12 h-12 flex items-center justify-center bg-white">
                  <ToggleIcon isActive={activeIndex === index} />
                </div>
              </button>

              {/* Accordion Panel with Transition */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? 'max-h-[150px]' : 'max-h-0'
                }`}
              >
                <div
                  className={`px-24 pt-12 pb-16 transition-colors duration-500 relative rounded-b-4xl flex flex-col items-center ${
                    activeIndex === index
                      ? 'bg-blue-500 text-black'
                      : 'bg-white text-black'
                  }`}
                >
                  {/* Inner Divider */}
                  {activeIndex === index && (
                    <div className="absolute left-24 right-12 top-0 border-t-2 border-black"></div>
                  )}
                  {/* Content Container: full width so text fields remain left aligned */}
                  <div className="w-full">
                    {/* Editable Content */}
                    <textarea
                      value={section.content}
                      onChange={(e) => handleContentChange(index, e)}
                      className="w-full border border-transparent rounded p-3 focus:outline-none focus:border-indigo-500 bg-transparent text-left"
                      rows="6"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Working;
