import React from 'react'
import Image from 'next/image'
import class1 from "../../assets/img/classes-1.jpg"
import class2 from "../../assets/img/classes-2.jpg"
import class3 from "../../assets/img/classes-3.jpg"
import class4 from "../../assets/img/classes-4.jpg"
import class5 from "../../assets/img/classes-5.jpg"
import class6 from "../../assets/img/classes-6.jpg"
import user from "../../assets/img/user.jpg"
const _courses=[
    {
        src:class1,
        alt:'class 1',
        course:"Art & Drawing",
        teacherImg:user,
        teacher:'Jhon Doe',
        price:'$99',
        age:'3-5 Years',
        time:'9-10 AM',
        capicity:'30 Kids'

    },
    {
        src:class2,
        alt:'class 1',
        course:"Color Management",
        teacherImg:user,
        teacher:'Jhon Doe',
        price:'$99',
        age:'3-5 Years',
        time:'9-10 AM',
        capicity:'30 Kids'

    },
    {
        src:class3,
        alt:'class 1',
        course:"Athletic & Dance",
        teacherImg:user,
        teacher:'Jhon Doe',
        price:'$99',
        age:'3-5 Years',
        time:'9-10 AM',
        capicity:'30 Kids'

    },
    {
        src:class4,
        alt:'class 1',
        course:"Language & Speaking",
        teacherImg:user,
        teacher:'Jhon Doe',
        price:'$99',
        age:'3-5 Years',
        time:'9-10 AM',
        capicity:'30 Kids'

    },
    {
        src:class5,
        alt:'class 1',
        course:"Religion & History",
        teacherImg:user,
        teacher:'Jhon Doe',
        price:'$99',
        age:'3-5 Years',
        time:'9-10 AM',
        capicity:'30 Kids'

    },
    {
        src:class6,
        alt:'class 1',
        course:"General Knowledge",
        teacherImg:user,
        teacher:'Jhon Doe',
        price:'$99',
        age:'3-5 Years',
        time:'9-10 AM',
        capicity:'30 Kids'

    },
   
]
const SchoolClasses = () => {
    return (
      <div className='px-3 py-12'>
        <div className="">
          <div className="container">
            <div className="text-center mx-auto mb-5 max-w-[600px]" data-wow-delay="0.1s">
              <h1 className="mb-3">School Classes</h1>
              <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 w-full">
              {_courses.map((item, index) => (
                <div key={index} className="hover:-mt-2.5 transition-all ease-in-out duration-300 w-full  sm:w-[calc(50%-1rem)] md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] px-3 mt-6">
                  <div className="">
                    <div className=" bg-light rounded-full w-3/4 mx-auto p-4">
                      <Image className="img-fluid rounded-full" src={item.src} alt={item.alt} />
                    </div>
                    <div className="bg-light rounded p-6 pt-12 -mt-12">
                      <h3 className="block text-center h3 mt-4 mb-6">{item.course}</h3>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                          <Image className="rounded flex-shrink-0 w-[45px] h-[45px]" src={item.teacherImg} alt="user_img" />
                          <div className="ml-4">
                            <h6 className="text-primary mb-1">{item.teacher}</h6>
                            <small>Teacher</small>
                          </div>
                        </div>
                        <span className="bg-primary text-white rounded-full py-2 px-3">{item.price}</span>
                      </div>
                      <div className="flex justify-between gap-1">
                        <div className="flex-1">
                          <div className="border-t-[3px] border-primary pt-2 flex-1">
                            <h6 className="text-primary mb-1">Age:</h6>
                            <small>{item.age}</small>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="border-t-[3px] border-success pt-2 flex-1">
                            <h6 className="text-success mb-1">Time:</h6>
                            <small>{item.time}</small>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="border-t-[3px] border-warning pt-2 flex-1">
                            <h6 className="text-warning mb-1">Capacity:</h6>
                            <small>{item.capacity}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  

export default SchoolClasses
