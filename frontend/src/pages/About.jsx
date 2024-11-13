/* eslint-disable react/no-unescaped-entities */
// AboutPage.js
import Accordion from '../components/Accordion';

const About = () => {
  return (
    <main className="h-screen text-snow bg-slate-950 p-8">
      <div className="max-w-3xl mx-auto mt-12 text-left transition-opacity duration-1000 ease-in-out">
        <h1 className="text-4xl font-bold mb-6">About</h1>
        <p className="mb-6 text-lg">
          In 2022, there were over 300 car related fatalities in Los Angeles
          County. That's 300 plus lives whose journey through life ended
          abruptly due to car accidents; and thousands more left with the grief,
          physical trauma, and financial burden caused by these accidents. LA
          County has the highest number of car related fatalities in the
          country, and in 2022 had seen the highest number of deaths ever
          recorded in the county.
        </p>
        <p className="mb-6 text-lg">
          This site's purpose is to allow users to see where severe car crashes
          have occurred and to view information related to car accidents in LA
          County, with the hope that individuals make informed decisions that
          can help reduce and eliminate future car related fatalities.
        </p>
        <Accordion />
      </div>
    </main>
  );
};

export default About;
