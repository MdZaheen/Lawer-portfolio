import React from "react";
import Header from "../components/Header.js";
import HeroSection from "../components/HeroSection.js";
import Appointment from "../components/Appointment.js";
import Footer from "../components/Footer.js";

const Page = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Appointment />
      <Footer />
    </div>
  );
};
export default Page;