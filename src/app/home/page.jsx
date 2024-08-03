import React from 'react'
import Header from "@/components/Header";
import SchoolFacilities from "@/components/SchoolFacilities";
import OurActivities from "@/components/OurActivites";
import BecomeTeacher from "@/components/BecomeTeacher";
import SchoolClasses from "@/components/SchoolClasses";
const Home = () => {
  return (
    <>
       <Header />
        <SchoolFacilities />
        <OurActivities />
        <BecomeTeacher />
        <SchoolClasses /></>
  )
}

export default Home