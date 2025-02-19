"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../public/styles/hero.css";

const HeroSection = () => {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Text animations with 3D rotation effect
    tl.fromTo(
      headingRef.current,
      { opacity: 0, rotateX: 90, y: 50 },
      { opacity: 1, rotateX: 0, y: 0, duration: 1.2 }
    )
      .fromTo(
        paragraphRef.current,
        { opacity: 0, rotateX: 90, y: 50 },
        { opacity: 1, rotateX: 0, y: 0, duration: 1.2 },
        "-=0.8"
      )
      .fromTo(
        buttonRef.current,
        { scale: 0.2, opacity: 0, },
        { scale: 1, opacity: 1, rotateY: 0, duration: 0.3 }
      );

    // 3D Image staggered parallax effect
    gsap.fromTo(
      imagesRef.current,
      { opacity: 0, y: 100, rotateY: 30, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        rotateY: 0,
        scale: 1,
        duration: 1.2,
        stagger: 0.3,
      }
    );


    buttonRef.current.addEventListener("mouseleave", () => {
      gsap.to(buttonRef.current, { rotateX: 0, rotateY: 0, duration: 0.5 });
    });

  }, []);

  return (
    <div className="hero-section" ref={heroRef}>
      <div className="hero-content">
        <h1 ref={headingRef}>Protecting Your Rights In The Field Of Law & Order</h1>
        <p ref={paragraphRef}>
          Lorem ipsum dolor sit amet consectetur. Massa scelerisque enim dui tristique massa hendrerit.
          Phasellus est aliquet suspendisse sed et cras viverra vitae. Ipsum in tempor turpis ut aliquet tincidunt.
        </p>
        <button ref={buttonRef} className="hero-button">BOOK APPOINTMENT →</button>
      </div>
      <div className="image-container">
        {["image1.png", "image2.png", "image3.png", "image4.png"].map((img, index) => (
          <img
            key={index}
            src={`/images/${img}`}
            alt={`Law Image ${index + 1}`}
            className={`image${index + 1}`}
            ref={(el) => (imagesRef.current[index] = el)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
