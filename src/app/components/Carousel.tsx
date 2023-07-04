"use client"

import { useRef, useState } from 'react';
import slide1Url from '../../../public/images/slide1.png'
import slide2Url from '../../../public/images/slide2.png'
import slide3Url from '../../../public/images/slide3.png'
import slide4Url from '../../../public/images/slide4.png'

const images = [
  slide1Url,
  slide2Url,
  slide3Url,
  slide4Url
];

const Carousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current!.offsetLeft);
    setScrollLeft(containerRef.current!.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current!.offsetLeft;
    const scrollX = x - startX;
    containerRef.current!.scrollLeft = scrollLeft - scrollX;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section className="flex flex-col bg-white pt-10 pb-40 md:py-10">
      <h2 className="px-10 text-center text-2xl md:px-20 md:text-left">
        Check out our latest projects on instagram
      </h2>
      <div className="w-full flex overflow-hidden whitespace-nowrap items-center justify-center my-8 slider-wrap cont-h-s"
      >
        <div className="scrollable flex gap-6 flex-no-wrap overflow-x-scroll touch-scroll cont-h-s"
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
        >
          {images.map((image, index) => (
            <div className='w-[310px] h-[310px] flex-shrink-0 bg-cover' style={{ backgroundImage: `url(${image.src})` }} key={index}>
            </div>
          ))}
          {images.map((image, index) => (
            <div className='w-[310px] h-[310px] flex-shrink-0 bg-cover' style={{ backgroundImage: `url(${image.src})` }} key={index}>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Carousel;
