import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="w-full h-auto bg-primary text-white flex">
      <div className='py-20 px-10 md:py-32 md:px-28'>
       <h1>Launching 2023</h1>
       <h5>We are in the middle of updating our website but are still very much availableto help you with any upcoming projects.</h5>
       <p>Contact us or come and visit our office.</p>
       <button className='text-primary bg-white'>Visit Office</button>
      </div>
      <div>
        Hero background here
      </div>
    </div>
  );
};

export default Hero;