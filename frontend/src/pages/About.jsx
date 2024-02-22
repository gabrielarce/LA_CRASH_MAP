/* eslint-disable react/no-unescaped-entities */
// AboutPage.js
const About = () => {
  return (
    <main className="text-snow bg-slate-950 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About</h1>
        <p className="mb-6 text-xl">
          In 2022, there were over 300 car related fatalities in Los Angeles
          County. That's 300 plus lives whose journey through life ended
          abruptly due to car accidents; and thousands more left with the grief,
          physical trauma, and financial burden caused by these accidents. LA
          County has the highest number of car related fatalities in the
          country, and in 2022 had seen the highest number of deaths ever
          recorded in the county.
        </p>
        <p className="mb-6 text-xl">
          This site's purpose is to allow users to see where severe car crashes
          have occurred and to view information related to car accidents in LA
          County, with the hope that individuals make informed decisions that
          can help reduce and eliminate future car related fatalities.
        </p>

        <h2 className="text-2xl font-bold mb-6 mt-8">The App</h2>
        <p className="mb-6 text-xl">
          The map displays car crashes based on data obtained through the
          California Highway Patrol agency. The map displays the data in
          clusters that can be clicked on and expand the points, and each point
          contains data about the crash. The map has a feature to filter the
          data points based off certain criteria (ex. alcohol involved,
          pedestrian, involved, highway crashes). Users can see how their
          neighborhood, place of work, or other locations throughout the city
          compare to each other.
        </p>

        <h2 className="text-2xl font-bold mb-6">The Data</h2>
        <p className="mb-6 text-xl">
          The Statewide Integrated Traffic Records System (SWITRS) is a database
          that serves as a means to collect and process data gathered from a
          collision scene, operated by the California Highway Patrol and
          collected by local, city, county and state jurisdictions. The data was
          obtained through the California Public Records Act (CPRA) (Gov. Code,
          § 6250 et seq.), which allows public access to appropriate records and
          information possessed by State government.
        </p>

        <h2 className="text-2xl font-bold mb-6">Limitations</h2>
        <p className="mb-6 text-xl">
          Data is recorded by a law enforcement agent at the site of the crash,
          and sometimes human error is present and not all data fields are
          completely recorded. Therefor, the map only displays points where a
          coordinate data (latitude, longitude) was properly recorded.
        </p>
      </div>
    </main>
  );
};

export default About;
