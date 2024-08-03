'use client'
import React from 'react'
import Image from 'next/image'
import img1 from "../../assets/img/header6.jpg"
import img2 from "../../assets/img/class-girl1.jpg"
import img3 from "../../assets/img/header5.jpg"
import Link from 'next/link'
import EmblaCarousel from '../Carousel/EmblaCarousel'
const Header = () => {
    const options = {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnInteraction: false,
        }
      }

  return (
    <>
      <div className='mb-12'>
        <div className="container p-0 mb-5 relative">
          <div className="header-carousel relative">
            <EmblaCarousel options={options}>
              <div className="text-left relative" key={12}>
                <div className='w-full h-full'>
                  <Image className='header-image-1' src={img1} width={'100%'} height={1000} alt='Image 1'></Image>
                </div>
                <div className="absolute top-0 start-0 w-full h-full flex items-center">
                  <div className="container">
                    <div className="row justify-content-start mt-[100px] sm:mt-0">
                      <div className=" md:w-[66%] w-full px-3">
                        <h1 className="display-2 text-white mb-1 lg:mb-6">The Best Kindergarten School For Your Child</h1>
                        <p className="fs-5 text-sm lg:text-[1.25rem] text-white lg:mb-10 mb-2 lg:pb-2  hidden sm:block">At our school, we prioritize nurturing environments where children thrive intellectually and socially. </p>
                        <Link href="#" className="btn btn-primary py-2 px-2 mr-2 lg:!py-[15px] lg:!px-12 lg:mr-4">Learn More</Link>
                        <Link href="#" className="btn btn-dark py-2 px-2  lg:!py-[15px] lg:!px-12">Our Classes</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-left relative" key={13}>
                <div className='w-full h-full'>
                  <Image className='header-image-1' src={img2} width={'100%'} height={1000} alt='Image 1'></Image>
                </div>
                <div className="absolute top-0 start-0 w-full h-full flex items-center">
                  <div className="container">
                    <div className="row justify-content-start mt-[100px] sm:mt-0">
                      <div className=" md:w-[66%] w-full px-3">
                        <h1 className="display-2 text-white mb-1 lg:mb-6">Make A Brighter Future For Your Child</h1>
                        <p className="fs-5 text-sm lg:text-[1.25rem] text-white lg:mb-10 mb-2 lg:pb-2 hidden sm:block">We believe in fostering curiosity and creativity while providing a supportive framework for each child's unique development.</p>
                        <Link href="#" className="btn btn-primary py-2 px-2 mr-2 lg:!py-[15px] lg:!px-12 lg:mr-4">Learn More</Link>
                        <Link href="#" className="btn btn-dark py-2 px-2  lg:!py-[15px] lg:!px-12">Our Classes</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-left relative" key={14}>
                <div className='w-full h-full'>
                  <Image className='header-image-1' src={img3} width={'100%'} height={1000} alt='Image 1'></Image>
                </div>
                <div className="absolute top-0 start-0 w-full h-full flex items-center">
                  <div className="container">
                    <div className="row justify-content-start mt-[100px] sm:mt-0">
                      <div className=" md:w-[66%] w-full px-3">
                        <h1 className="display-2 text-white mb-1 lg:mb-6">Unleashing Potential Through Education</h1>
                        <p className="fs-5 text-sm lg:text-[1.25rem] text-white lg:mb-10 mb-2 lg:pb-2 hidden sm:block">Empowering children to discover and maximize their unique abilities through comprehensive and supportive learning experiences</p>
                        <Link href="#" className="btn btn-primary py-2 px-2 mr-2 lg:!py-[15px] lg:!px-12 lg:mr-4">Learn More</Link>
                        <Link href="#" className="btn btn-dark py-2 px-2  lg:!py-[15px] lg:!px-12">Our Classes</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             </EmblaCarousel>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
