import React from 'react'
import Image from 'next/image'
import class1 from "../../assets/img/classes-1.jpg"
import class2 from "../../assets/img/classes-2.jpg"
import class3 from "../../assets/img/classes-3.jpg"
import class4 from "../../assets/img/classes-4.jpg"
import class5 from "../../assets/img/classes-5.jpg"
import class6 from "../../assets/img/classes-6.jpg"
import Link from 'next/link'

const Footer = () => {
  // return (
  //   <div className='mt-12 pt-12 px-3'>
  //     <div className="bg-dark text-white-50  pt-5 mt-5 wow fadeIn" >
  //       <div className="container py-5">
  //         <div className="flex flex-wrap justify-between">
  //           <div className="mt-12 px-6 flex-0">
  //             <h3 className="text-white mb-4">Get In Touch</h3>
  //             <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
  //             <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
  //             <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
  //           </div>
  //           <div className="mt-12 px-6 flex-0 flex flex-col items-start">
  //             <h3 className="text-white mb-4">Quick Links</h3>
  //             <Link className="btn btn-link text-white-50" href="#">About Us</Link>
  //             <Link className="btn btn-link text-white-50" href="#">Contact Us</Link>
  //             <Link className="btn btn-link text-white-50" href="#">Our Services</Link>
  //             <Link className="btn btn-link text-white-50" href="#">Privacy Policy</Link>
  //             <Link className="btn btn-link text-white-50" href="#">Terms & Condition</Link>
  //           </div>
  //           <div className="mt-12 px-6 flex-1 flex flex-col items-start">
  //             <h3 className="text-white mb-4">Photo Gallery</h3>
  //             <div className="flex flex-wrap gap-4 w-full">
  //               <div className="w-[calc(33.33%-1rem)] min-w-16 min-h-16 ">
  //                 <Image className="img-fluid rounded-sm max-h-32 bg-light p-1" src={class1} alt="classes-1" />
  //               </div>
  //               <div className="w-[calc(33.33%-1rem)] min-w-16 min-h-16 ">
  //                 <Image className="img-fluid rounded-sm max-h-32 bg-light p-1" src={class2} alt="classes-2" />
  //               </div>
  //               <div className="w-[calc(33.33%-1rem)] min-w-16 min-h-16 ">
  //                 <Image className="img-fluid rounded-sm max-h-32 bg-light p-1" src={class3} alt="classes-3" />
  //               </div>
  //               <div className="w-[calc(33.33%-1rem)] min-w-16 min-h-16 ">
  //                 <Image className="img-fluid rounded-sm max-h-32 bg-light p-1" src={class4} alt="classes-4" />
  //               </div>
  //               <div className="w-[calc(33.33%-1rem)] min-w-16 min-h-16 ">
  //                 <Image className="img-fluid rounded-sm max-h-32 bg-light p-1" src={class5} alt="classes-5" />
  //               </div>
  //               <div className="w-[calc(33.33%-1rem)] min-w-16 min-h-16 ">
  //                 <Image className="img-fluid rounded-sm max-h-32 bg-light p-1" src={class6} alt="classes-6" />
  //               </div>
  //             </div>
  //           </div>
  //           <div className="mt-12 px-6 flex-0">
  //             <h3 className="text-white mb-4">Get In Touch</h3>
  //             <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
  //             <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
  //             <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )
  return(
    

<footer className="mt-12 pt-12 px-3 bg-dark text-white-50">
    <div className="mx-auto w-full container">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3 lg:grid-cols-5">
        <div>
            <h2 className="mb-6 text-light ">Company</h2>
            <ul className="">
                <li className="mb-4">
                    <Link href="#" className=" hover:tracking-wider transition-all ease-in duration-300">About</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className=" hover:tracking-wider transition-all ease-in duration-300">Careers</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className=" hover:tracking-wider transition-all ease-in duration-300">Brand Center</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className=" hover:tracking-wider transition-all ease-in duration-300">Blog</Link>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-light ">Help center</h2>
            <ul className="">
                <li className="mb-4">
                    <Link href="#" className=" hover:tracking-wider transition-all ease-in duration-300">Discord Server</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className=" hover:tracking-wider transition-all ease-in duration-300">Twitter</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className=" hover:tracking-wider transition-all ease-in duration-300">Facebook</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className=" hover:tracking-wider transition-all ease-in duration-300">Contact Us</Link>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-light">Legal</h2>
            <ul className="">
                <li className="mb-4">
                    <Link href="#" className=" hover:tracking-wider transition-all ease-in duration-300">Privacy Policy</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className=" hover:tracking-wider transition-all ease-in duration-300">Licensing</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className=" hover:tracking-wider transition-all ease-in duration-300">Terms &amp; Conditions</Link>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-light">Download</h2>
            <ul className="">
                <li className="mb-4">
                    <Link href="#" className=" hover:tracking-wider transition-all ease-in duration-300">iOS</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className=" hover:tracking-wider transition-all ease-in duration-300">Android</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className=" hover:tracking-wider transition-all ease-in duration-300">Windows</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className=" hover:tracking-wider transition-all ease-in duration-300">MacOS</Link>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-light  uppercase">Contact</h2>
            <ul className="">
              <li className="mb-4">
                <Link href="tel:+917780908889">+91 7780908889</Link>
                </li>
                <li className="mb-4">
                <Link href='mailto:akashfarooq222@gmail.com'>akashfarooq222@gmail.com</Link>
                </li>
               
            </ul>
        </div>
      
    </div>
    <div className="mt-4 py-6 flex gap-3">
        <span className="text-light">© 2024 <Link href="#">IQBAL AHMAD</Link>. All Rights Reserved.
        </span>
       
      </div>
    </div>
   
</footer>

  )
}

export default Footer
