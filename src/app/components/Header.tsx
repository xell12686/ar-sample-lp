import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-primary md:absolute md:bg-transparent z-30">
      <div className="h-[47px] w-full bg-white opacity-20 md:h-[41px]"></div>
      <h2 className="px-10 py-[22px] text-center text-2xl text-white md:px-[77px] md:text-left">
        Brand New Company
      </h2>
    </header>
  );
};

export default Header;
