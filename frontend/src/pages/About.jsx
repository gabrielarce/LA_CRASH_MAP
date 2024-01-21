// AboutPage.js

import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 w-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700">
          Welcome to our About Us page! We are a passionate team dedicated to
          creating amazing web applications.
        </p>
        <p className="text-gray-700 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          auctor, libero eu fermentum semper.
        </p>
        <p className="text-gray-700 mt-2">
          Nulla facilisi. Integer nec dolor ac odio aliquam consectetur. Etiam
          vestibulum, dui in fringilla rhoncus.
        </p>
      </div>
    </div>
  );
};

export default About;
