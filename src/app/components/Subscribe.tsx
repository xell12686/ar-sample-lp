import React from 'react';

const Subscribe: React.FC = () => {
  return (
    <div className="bg-white md:py-16 py-6 flex flex-col items-center justify-center">
      <div className="container max-w-lg ">
        <h2 className="text-center text-2xl font-bold mb-4">
          KEEP UP TO DATE - SUBSCRIBE TO OUR NEWSLETTER
        </h2>
        <p className="text-center mb-6">
          Receive the latest offers, promotions, and news delivered straight to your inbox with our exclusive email newsletter.
        </p>
        <input
          type="email"
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md placeholder-gray-400 block mx-auto mt-7 "
          placeholder="Email Address"
        />
      </div>
    </div>
  );
};

export default Subscribe;
