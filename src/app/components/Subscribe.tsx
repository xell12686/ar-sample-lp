import React from "react";

const Subscribe: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-white px-10 py-28 md:py-44">
      <div className="container max-w-[450px]">
        <h2 className="mb-4 text-center text-base font-bold">
          KEEP UP TO DATE - SUBSCRIBE TO OUR NEWSLETTER
        </h2>
        <p className="mb-6 text-center text-sm font-normal md:text-base">
          Receive the latest offers, promotions, and news delivered straight to
          your inbox with our exclusive email newsletter.
        </p>
        <input
          type="email"
          className="mx-auto mt-7 block w-full border border-black px-4 py-2 text-[10px] placeholder-gray-400 md:w-1/2 md:min-w-[400px] "
          placeholder="Email Address"
        />
      </div>
    </section>
  );
};

export default Subscribe;
