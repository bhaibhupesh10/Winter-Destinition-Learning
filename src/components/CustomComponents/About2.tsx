import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming you're using shadcn/ui for the button

const About: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-16 px-6 lg:px-20 bg-white">
      {/* Left Section */}
      <div className="lg:w-1/2">
        <p className="text-mikado-yellow text-2xl font-comforter-brush mb-4">About Us</p>
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
          Explore all tour of the world with us.
        </h2>
        <p className="text-gray-600 mb-6">
          Lorem Ipsum available, but the majority have suffered alteration in some form, by
          injected humour, or randomised words which don't look even slightly believable.
        </p>
        <ul className="space-y-6">
          {[
            { title: 'Tour guide', description: 'Lorem Ipsum available, but the majority have suffered alteration in some.' },
            { title: 'Friendly price', description: 'Lorem Ipsum available, but the majority have suffered alteration in some.' },
            { title: 'Reliable tour', description: 'Lorem Ipsum available, but the majority have suffered alteration in some.' },
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-4">
              <div className="p-4 bg-teal-500 text-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.828 21a2 2 0 0 1-1.414-.586l-8-8a2 2 0 0 1 0-2.828l8-8a2 2 0 0 1 2.828 0l8 8a2 2 0 0 1 0 2.828l-8 8A2 2 0 0 1 13.828 21z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <Button className="mt-6 bg-teal-500 text-white hover:bg-teal-600">Booking Now</Button>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center items-center gap-6 lg:gap-10 relative">
        <div className="w-200 h-200 rounded-full flex items-center justify-center relative">
          <img
            src="/assets/About/image.png"
            alt="Tour Guide 1"
            className="w-200 h-200 object-contain"
          />
        </div>
      
      </div>
    </section>
  );
};

export default About;
