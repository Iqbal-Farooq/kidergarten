'use client'
import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileView, setMobileview] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-white  w-full shadow-sm flex flex-col navbar min-h-12  sticky-top transition-all duration-500 ${scrolled ? 'top-0 sticky ' : '-top-100'}`}>
      <main className='flex justify-between relative container items-center w-full min-h-[48px]'>
        <div>
          <h1 className="text-primary font-bold">Kider</h1>
        </div>
        <div className={`${mobileView ? 'absolute top-12 left-0 right-0 !flex flex-col justify-center items-center z-50 rounded-sm   mx-4  !text-light shadow-lg transition-all ease-linear duration-300 isolate aspect-video bg-blue-500 ring-1 ring-black/5' : 'max-sm:hidden flex gap-1 text-dark'}`} >
          <ul className={`flex ${mobileView ? ' !flex flex-col items-start  ' : 'ml-5  items-center '}`} >
            <li onClick={() => setMobileview(false)} className={`${mobileView ? 'px-2 py-2' : 'px-4 py-8'}   cursor-pointer font-medium`}><Link href='/'>Home </Link></li>
            <li onClick={() => setMobileview(false)} className={`${mobileView ? 'px-2 py-2' : 'px-4 py-8'}   cursor-pointer font-medium`}><Link href='about'>About Us</Link></li>
            {/* <li onClick={() => setMobileview(false)} className={`${mobileView ? 'px-2 py-2' : 'px-4 py-8'}   cursor-pointer font-medium`}><Link href=''>Classes</Link></li> */}
            <li onClick={() => setMobileview(false)} className={`${mobileView ? 'px-2 py-2' : 'px-4 py-8'}   cursor-pointer font-medium`}><Link href='contactus'>Contact Us</Link></li>
          </ul>
          <div className={`${mobileView ? '!block px-2 py-3' : ' max-md:hidden px-4 py-6'}`}><button className="btn btn-primary  ">Join us</button> </div>

        </div>
        <div className="block sm:hidden ">
          <button onClick={() => setMobileview(prev => !prev)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-secondary hover:!text-primary rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
      </main>
    </nav>
  );
}
export default Navbar;
