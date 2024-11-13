import { useState } from 'react';

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: 'The App',
      content: `
  The map displays car crashes based on data obtained through the
  California Highway Patrol agency. The map displays the data in
  clusters that can be clicked on and expand the points, and each point
  contains data about the crash. The map has a feature to filter the
  data points based off certain criteria (ex. alcohol involved,
  pedestrian involved, highway crashes). Users can see how their
  neighborhood, place of work, or other locations throughout the city
  compare to each other.
`,
    },
    {
      title: 'The Data',
      content: `
  The Statewide Integrated Traffic Records System (SWITRS) is a database
          that serves as a means to collect and process data gathered from a
          collision scene, operated by the California Highway Patrol and
          collected by local, city, county and state jurisdictions. The data was
          obtained through the California Public Records Act (CPRA) (Gov. Code,
          § 6250 et seq.), which allows public access to appropriate records and
          information possessed by State government.
`,
    },
    {
      title: 'Limitations',
      content: `
  Data is recorded by a law enforcement agent at the site of the crash,
          and sometimes human error is present and not all data fields are
          completely recorded. Therefor, the map only displays points where a
          coordinate data (latitude, longitude) was properly recorded.
`,
    },
  ];

  return (
    <div>
      {accordionData.map((item, index) => (
        <div key={index} className="border-b border-slate-200">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center py-5 text-snow"
          >
            {/* <span>{item.title}</span> */}
            <h2 className="text-2xl font-bold ">{item.title}</h2>
            <span
              className={`text-snow transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : 'rotate-0'
              }`}
            >
              {openIndex === index ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                </svg>
              )}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            <div className="pb-5 text-lg text-snow">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
