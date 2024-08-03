import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import img1 from "../../assets/img/class-girl-2.jpg"
import BecomeTeacher from '@/components/BecomeTeacher'
import OurActivities from '@/components/OurActivites'
import OurTeachers from '@/components/OurTeachers'
const page = () => {
    return (
        <div>
            <div className='mb-12'>
                <div className=" container p-0 mb-5 relative">
                    <div className="header-carousel relative">
                        <div className="text-left relative" key={'about-section'}>
                            <div className='w-full h-full'>
                                <Image className='header-image-1 max-h-[400px] bg-cover' layout='responisve' src={img1} width={'100%'}  alt='Image 1'></Image>
                            </div>
                            <div className="absolute top-0 start-0 w-full h-full flex items-center">
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className=" md:w-[66%] w-full px-3">
                                            <h1 className="display-2 text-primary mb-1 lg:mb-6">About Us</h1>
                                            <p className="fs-5 text-sm lg:text-[1.25rem] gradient-text lg:mb-10 mb-2 lg:pb-2">At our kindergarten, we nurture curiosity and creativity, fostering a love for learning in a warm and welcoming <span><span className='vissible sm:hidden'>...</span><span className='hidden sm:inline'>environment. Our dedicated team ensures every child grows and thrives, preparing them for a bright future.</span></span></p>
                                           </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <OurActivities />
            <OurTeachers />
            <BecomeTeacher />
           
        </div>
    )
}

export default page

