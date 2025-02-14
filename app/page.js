import React from "react";
import Header from "../components/Header.js";
import HeroSection from "../components/HeroSection.js";
import TrustedLawFirm from "../components/TrustedLawFirm.js";
import Appointment from "../components/Appointment.js";
import Footer from "../components/Footer.js";
import Know from "@/components/know.js";


const Page = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Appointment />
      <TrustedLawFirm />
      <Know/>
      
    </div>
  );
};
export default Page;