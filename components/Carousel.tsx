import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

import promo1 from '../public/img/promo-1.gif';
const images = new Array(6).fill(promo1);

const DISTANCE = 500;
const sideScroll = (
  element: HTMLDivElement,
  speed: number,
  distance: number,
  step: number
) => {
  let scrollAmount = 0;
  const slideTimer = setInterval(() => {
    element.scrollLeft += step;
    scrollAmount += Math.abs(step);
    if (scrollAmount >= distance) {
      clearInterval(slideTimer);
    }
  }, speed);
};

const Carousel = () => {
  const imagesWrapper = useRef<HTMLDivElement>(null);

  return (
    <div className='z-10 flex flex-col mt-[100px] h-[294px] bg-blue justify-between pt-4 px-4'>
      <div ref={imagesWrapper} className='flex overflow-x-auto no-scroll '>
        <div className='flex gap-4'>
          {images.map((box, i) => (
            <Image
              className='rounded-md'
              key={i}
              src={box}
              height={200}
              width={400}
              layout='fixed'
              alt={box}
            />
          ))}
        </div>
      </div>
      <div className='flex gap-32 h-[40px] items-center justify-center text-white '>
        <ChevronLeftIcon
          className={`w-4 cursor-pointer`}
          onClick={() => {
            sideScroll(imagesWrapper.current, 25, DISTANCE, -50);
          }}
        />
        <Link href='#'>
          <span className='font-bold hover:underline cursor-pointer text-sm'>
            See more promos
          </span>
        </Link>
        <ChevronRightIcon
          className={`w-4 cursor-pointer`}
          onClick={() => {
            sideScroll(imagesWrapper.current, 25, DISTANCE, 50);
          }}
        />
      </div>
    </div>
  );
};

export default Carousel;
