import React from "react";
import Header from "../components/Header.js";
import HeroSection from "../components/HeroSection.js";
import TrustedLawFirm from "../components/TrustedLawFirm.js";

import Footer from "../components/Footer.js";
import Know from "@/components/know.js";


const Page = () => {
  return (
    <div>
      <Header />
      <HeroSection />
     
      <TrustedLawFirm />
      <Know/>
      
    </div>
  );
};

export default Page;