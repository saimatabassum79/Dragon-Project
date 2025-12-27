import React from 'react';


const About = () => {
  return (
    <div>
   

      {/* Section 1: Hero / Introduction */}
      <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-40">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">About NewsHub</h1>
          <p className="text-gray-600 sm:text-lg">
            NewsHub is your trusted source for the latest news, keeping you informed with accurate and timely updates from around the globe.
          </p>
        </div>
      </section>

      {/* Section 2: Mission */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl  text-gray-800 sm:text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We aim to deliver news that matters most to our readers. Our platform ensures that you stay updated with verified information from multiple sources.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From breaking news to in-depth analysis, our team is committed to bringing you trustworthy and engaging content.
          </p>
        </div>
      </section>

      {/* Section 3: Team */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl text-gray-800 sm:text-3xl font-semibold mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <img src="https://loremfaces.net/128/id/3.jpg" alt="John Doe" className="w-24 h-24 rounded-full mx-auto mb-4"/>
              <h3 className="font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-500 text-sm">Founder & CEO</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <img src="https://loremfaces.net/128/id/2.jpg" alt="Jane Smith" className="w-24 h-24 rounded-full mx-auto mb-4"/>
              <h3 className="font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-500 text-sm">Chief Editor</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <img src="https://loremfaces.net/128/id/1.jpg"  alt="Saima" className="w-24 h-24 rounded-full mx-auto mb-4"/>
              <h3 className="font-semibold text-gray-800">Saima Tabassum</h3>
              <p className="text-gray-500 text-sm">Frontend Developer</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <img src="https://loremfaces.net/128/id/4.jpg" alt="Mark Wilson" className="w-24 h-24 rounded-full mx-auto mb-4"/>
              <h3 className="font-semibold text-gray-800">Mark Wilson</h3>
              <p className="text-gray-500 text-sm">Content Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Stats / Partners */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl text-gray-800 sm:text-3xl font-semibold mb-6">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-800">500K+</h3>
              <p className="text-gray-500 mt-1">Monthly Readers</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800">120+</h3>
              <p className="text-gray-500 mt-1">Team Members</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800">50+</h3>
              <p className="text-gray-500 mt-1">Countries Covered</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
