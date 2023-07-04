"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Hero: React.FC = () => {

  return (
    <section className="flex h-auto w-full bg-primary pb-[82px] text-white md:pb-0">
      <div
        className="flex md:w-[632px] flex-col gap-5 px-10 py-20 pb-0 pt-0 md:px-28 md:py-32 md:pb-32 md:pt-[187px] z-10 bg-primary md:flex-shrink-0"
      >
        <h1 className="text-4xl leading-tight md:text-5xl">Launching 2023</h1>
        <h5 className="text-sm leading-relaxed md:text-xl md:leading-relaxed">
          We are in the middle of updating our website but are still very much
          availableto help you with any upcoming projects.
        </h5>
        <p className="text-sm">Contact us or come and visit our office.</p>
        <button className="mt-3 self-start rounded-full bg-secondary px-[45px] py-[10px] text-[10px] font-semibold text-primary drop-shadow-lg hover:drop-shadow-xl">
          Visit Office
        </button>
        <ul className="mt-5 flex flex-col gap-4 text-xs font-normal md:text-sm">
          <li>
            EMAIL: &nbsp; <a href="mailto:test@rigo.agency">test@rigo.agency</a>
          </li>
          <li>
            PHONE: &nbsp;<a href="tel:02071231234">02071231234</a>
          </li>
          <li>
            ADDRESS: &nbsp;<a href="#">Big Ben, London, SW1A 0AA</a>
          </li>
        </ul>
      </div>

      <div
        className="h-auto w-full pt-3 md:h-[788px] md:pt-0"
      >
        <Image
          src="/images/hero-bg-retina.jpg"
          alt="Hero background"
          width={1024}
          height={1024}
          className="h-full w-full object-cover object-[49%] md:object-center xl:object-[94%]"
          priority={true}
        />
      </div>
    </section>
  );
};

export default Hero;
