import React from 'react';


const Career = () => {
  return (
    <div>
      

      {/* Section 1: Intro */}
      <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-40 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">Join Our Team</h1>
          <p className="text-gray-600 sm:text-lg leading-relaxed">
            NewsHub is always looking for talented individuals passionate about news and technology.
          </p>
        </div>
      </section>

      {/* Section 2: Open Positions */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl text-gray-800 sm:text-3xl font-semibold mb-6">Open Positions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <h3 className="font-semibold text-gray-800">Frontend Developer</h3>
              <p className="text-gray-500 mt-2">Build and maintain the NewsHub platform.</p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <h3 className="font-semibold text-gray-800">Content Writer</h3>
              <p className="text-gray-500 mt-2">Create high-quality news articles and reports.</p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <h3 className="font-semibold text-gray-800">UI/UX Designer</h3>
              <p className="text-gray-500 mt-2">Design user-friendly interfaces for our platform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Benefits */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-40">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl text-gray-800 sm:text-3xl font-semibold mb-4">Why Work With Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition">
              <h3 className="font-semibold text-gray-800">Flexible Hours</h3>
              <p className="text-gray-500 mt-1">Work in your own schedule while contributing remotely.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition">
              <h3 className="font-semibold text-gray-800">Learning Opportunities</h3>
              <p className="text-gray-500 mt-1">Grow with us through workshops, mentorships, and team collaboration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Apply CTA */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-40 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl text-gray-800 font-semibold mb-4">Apply Now</h2>
          <p className="text-gray-600 mb-6">Send your resume and portfolio to <span className="font-semibold text-indigo-500">careers@newshub.com</span></p>
          <a href="mailto:careers@newshub.com" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
            Apply via Email
          </a>
        </div>
      </section>
    </div>
  );
};

export default Career;
