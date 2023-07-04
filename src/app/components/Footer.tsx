import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col gap-7 bg-secondary px-10 py-32 text-center text-[10px] md:flex-row md:gap-16 md:px-20 md:pb-24 md:pt-12 md:text-left">
      <div>
        <h3 className="mb-3 text-xs font-semibold uppercase">Address</h3>
        <p>
          Big Ben, <br />
          London
        </p>
        <div className="h-7"></div>
        <h3 className="mb-3 text-xs font-semibold uppercase">Opening Times</h3>
        <p>Mon - Fri: 9am&ndash;5:30pm</p>
        <p>Saturday: 10am&ndash;5pm </p>
        <p>Sunday: Closed</p>
      </div>
      <div>
        <h3 className="mb-3 text-xs font-semibold uppercase">Call us</h3>
        <p>
          <a href="tel:02071231234">020 71231234</a>
        </p>
      </div>

      <div className="m-auto md:my-0 md:ml-auto md:mr-0">
        <ul className="flex flex-row gap-6 text-lg">
          <li>
            <a href="#">
              <BsInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <BsFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <BsLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
