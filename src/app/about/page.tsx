"use client"

import Header from "../coreHeader";
import Image from "next/image";
import { useState, useEffect } from "react";



export default function About() {
  return (
    <>
      <Header />
      <h1 className="px-4 mt-4">About</h1>
      <hr className="white-line" />

      <div className="about-frame">
        <div className="aboutImage">
          <Image
            src="/aboutFrame.png"
            alt="Tall Poppy Studios"
            height={500}
            width={900}
            priority // High priority for the main image
          />
        </div>
        
        <div className="aboutText">
          <div className="text-content">
            Tall Poppy Studios is a Melbourne-based creative studio led by Mads Russell. 
            
            Rooted in photography, design, and brand communication, we help brands craft thoughtful, visually driven narratives that feel authentic and intentional.
            Our work lives at the intersection of creativity and clarity, from concepting shoots and developing digital campaigns to refining the details that make a brand cohesive. 
            We&apos;ve collaborated with brands across design and lifestyle, fashion and beauty, and culture, bringing a hands-on, collaborative approach to every project.
            
            At Tall Poppy Studios, we believe in creativity that feels authentic — less about perfection, and more about presence.
            
          </div>
        </div>
      </div>
    </>
  );
}