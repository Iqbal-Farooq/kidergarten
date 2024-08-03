'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Shahid from '../../assets/img/shahid.jpg';
import Tariq from "../../assets/img/tariq.jpg";
import Iqbal from "../../assets/img/iqbal.jpg";
import Maria from "../../assets/img/teacher-women-3.jpg";
import Erica from "../../assets/img/erica.jpg"

const Carasoul = () => {
    const [currentIndex, setCurrentIndex] = useState(1);

  const images = [
    { src: Shahid, name: 'Shahid', lastName: 'Maqbool', designation: 'Ph.D Physics', bio: 'Physics enthusiast with a knack for explaining the universe.' },
    { src: Iqbal, name: 'Iqbal', lastName: 'Farooq', designation: 'M.Sc Math', bio: 'Passionate mathematician who loves making complex concepts simple.' },
    { src: Erica, name: 'Erica', lastName: 'Jong', designation: 'Ph.D Biology', bio: 'Enthusiastic biologist with a passion for ecology and mentoring.' },
    { src: Tariq, name: 'Tariq', lastName: 'Bashir', designation: 'Btech Cse', bio: 'Expert in Computer Science with over 10 years of teaching experience.' },
    { src: Maria, name: 'Maria', lastName: 'Montessori', designation: 'M.A English', bio: 'Dedicated to helping students appreciate literature and improve their writing skills.' },
    ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  return (
    <div id="gallery" className="relative w-full" data-carousel="slide">
    <div className="relative max-sm:h-56 overflow-hidden rounded-lg h-96 lg:h-[400px]">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            currentIndex === index ? 'opacity-100' : 'opacity-0'
          }`}
          data-carousel-item={currentIndex === index ? 'active' : ''}
        >
          <Image
            src={image.src}
            alt={`Carousel item ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="block"
          />
          <div className='absolute max-sm:right-0 max-sm:bottom-0 right-1 bottom-3 bg-primary text-light w-[200px] h-[200px] max-sm:w-[100px] max-sm:h-[100px] flex flex-col justify-center items-center rounded-full p-4'>
            <div className='text-center '>
              <h4 className='text-white'>{image.name} <span className='max-sm:hidden'>{image.lastName}</span></h4>
              <h6 className='text-md'>{image.designation}</h6>
              <p className='text-[10px] text-dark max-sm:hidden'>{image.bio}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    <button
      type="button"
      className="absolute top-0 -start-5 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none"
      data-carousel-prev
      onClick={handlePrev}
    >
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary">
        <svg
          className="w-4 h-4 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
        </svg>
        <span className="sr-only">Previous</span>
      </span>
    </button>

    <button
      type="button"
      className="absolute top-0 -end-5 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none"
      data-carousel-next
      onClick={handleNext}
    >
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary">
        <svg
          className="w-4 h-4 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
        </svg>
        <span className="sr-only">Next</span>
      </span>
    </button>
  </div>
  )
}

export default Carasoul