import React from "react";
import Header from "../components/Header.js";
import HeroSection from "../components/HeroSection.js";
import TrustedLawFirm from "../components/TrustedLawFirm.js";
// import Appointment from "../components/Appointment.js";
import Know from "@/components/Know.js";
import Footer from "@/components/Footer.js";
// import Footer from "../components/Footer.js";
import News from "@/components/News.js";




const Page = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <TrustedLawFirm />
      <Know/>
      <Footer/>
      
    </div>
  );
};
export default Page;