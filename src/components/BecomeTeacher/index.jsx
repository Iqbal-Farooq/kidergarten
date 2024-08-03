import React from 'react'
import Image from 'next/image'
import Teacher from "../../assets/img/header-image1.jpg"
import Link from 'next/link'

const BecomeTeacher = () => {
  return (
    <div className="px-3 py-12">
      <div className="container px-3">
        <div className="bg-light rounded">
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="w-full lg:w-1/2 min-h-[400px]">
              <div className="relative h-full">
                <Image 
                  className="absolute w-full h-full rounded object-cover" 
                  src={Teacher} 
                  alt="Teacher" 
                  layout="fill" 
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="h-full flex flex-col justify-center p-12">
                <h1 className="mb-6">Become A Teacher</h1>
                <p className="mb-6">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
                  Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <Link href='#' className="btn btn-primary !py-[15px] !px-12 mr-4">Get Started Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BecomeTeacher
