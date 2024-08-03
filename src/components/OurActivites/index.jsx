import React from 'react'
import Image from 'next/image'
import Ceo from '../../assets/img/user.jpg'
import About1 from '../../assets/img/about-01.png'
import About2 from '../../assets/img/about-02.jpg'
import About3 from '../../assets/img/about-05.jpg'
import Link from 'next/link'

const OurActivities = () => {
  return (
    <div className="px-3 py-12">
      <div className="container">
        <div className="flex lg:flex-nowrap flex-wrap items-center">
          <div className="w-full lg:max-w-[50%] min-w-[250px] flex-grow mt-12 px-6">
            <h1 className="mb-6">Learn More About Our Work And Our Cultural Activities</h1>
            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            <p className="mb-6">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos, ipsum labore duo duo sit no sea diam. Et dolor et kasd ea. Eirmod diam at dolor est vero nonumy magna.</p>
            <div className="flex justify-between max-sm:flex-col">
              <div className="flex-1 flex-grow mt-6 px-3">
                <Link className="btn btn-primary !py-[15px] !px-12 mr-4" href="">Read More</Link>
              </div>
              <div className="flex-1 flex-grow mt-6 px-3">
                <div className="flex items-center">
                  <Image src={Ceo} className="rounded-full flex-shrink-0 w-[45px] h-[45px]" width={45} height={45} alt="CEO" />
                  <div className="ml-2">
                    <h6 className="text-primary mb-1">John Doe</h6>
                    <small>CEO & Founder</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:max-w-[50%] min-w-[250px] flex-grow mt-12 px-6">
            <div className="flex flex-col w-full px-2">
              <div className="text-center w-[100%]  min-w-[250px] max-w-[450px] m-auto max-h-[450px]">
                <Image className="img-fluid w-full rounded-full bg-light hover:!bg-primary  cursor-pointer transition-all ease-in-out duration-300 p-3 max-h-[450px]" src={About1} alt="img" width={1000} height={1000} />
              </div>
              <div className="flex w-full -mt-36">
                <div className="w-1/2 text-start min-w-[150px]">
                  <Image className="img-fluid w-full rounded-full bg-light hover:!bg-primary  cursor-pointer transition-all ease-in-out duration-300  p-3 " src={About2} alt="img" width={1000} height={1000} />
                </div>
                <div className="w-1/2 text-end min-w-[150px]">
                  <Image className="img-fluid w-full rounded-full bg-light hover:!bg-primary  cursor-pointer transition-all ease-in-out duration-300  p-3" src={About3} alt="img" width={1000} height={1000} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurActivities
