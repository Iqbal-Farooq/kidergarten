import React from 'react'
import { IoBus } from "react-icons/io5";
import { IoMdFootball } from "react-icons/io";
import { TfiHome } from "react-icons/tfi";
import { PiStudentLight } from "react-icons/pi";
const SchoolFacilities = () => {
    return (
        <div >
            <div className="px-3 py-12">
                <div className="container px-2">
                    <div className="text-center mx-auto mb-12 max-w-[600px]"  >
                        <h1 className="mb-3">School Facilities</h1>
                        <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <div className="flex flex-wrap lg:flex-nowrap gap-4 justify-center">
                        <div className="md:max-w-[calc(50%-0.5rem)] lg:max-w-[25%] flex-1 min-w-[250px] flex-grow mt-4 px-3">
                            <div className="facility-item">
                                <div className="facility-icon bg-primary">
                                    <IoBus  className='w-[50px] h-[50px] text-primary  z-10' />
                                    <span className="bg-primary"></span>
                                    <span className="bg-primary"></span>
                                </div>
                                <div className="facility-text bg-primary">
                                    <h3 className="text-primary mb-3">School Bus</h3>
                                    <p className="mb-0">Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:max-w-[calc(50%-0.5rem)] lg:max-w-[25%] mmin-w-[250px] flex-grow mt-4 px-3 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="facility-item">
                                <div className="facility-icon bg-success">
                                <IoMdFootball  className='w-[50px] h-[50px] text-success  z-10' />
                                   <span className="bg-success"></span>
                                    <span className="bg-success"></span>
                                </div>
                                <div className="facility-text bg-success">
                                    <h3 className="text-success mb-3">Playground</h3>
                                    <p className="mb-0">Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:max-w-[calc(50%-0.5rem)] lg:max-w-[25%]  min-w-[250px] flex-grow mt-4 px-3 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="facility-item">
                                <div className="facility-icon bg-warning ">
                                <TfiHome  className='w-[50px] h-[50px] text-warning  z-10' />
                                <span className="bg-warning"></span>
                                    <span className="bg-warning"></span>
                                </div>
                                <div className="facility-text bg-warning">
                                    <h3 className="text-warning mb-3">Healthy Canteen</h3>
                                    <p className="mb-0">Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:max-w-[calc(50%-0.5rem)] lg:max-w-[25%] min-w-[250px] flex-grow mt-4 px-3 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="facility-item">
                                <div className="facility-icon bg-info">
                                <PiStudentLight  className='w-[50px] h-[50px] text-info  z-10' />
                               
                                    <span className="bg-info"></span>
                                    <span className="bg-info"></span>
                                </div>
                                <div className="facility-text bg-info">
                                    <h3 className="text-info mb-3">Positive Learning</h3>
                                    <p className="mb-0">Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default SchoolFacilities