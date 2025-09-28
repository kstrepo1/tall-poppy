"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);


export default function Home() {
  const [bgLoaded, setbgLoaded] = useState(false);
  const [loader, setLoader] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
      setLoader((v) => (v < 100 ? v + 0.01 : v));
    }, 50); // every 50ms
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    gsap.to(".title", {
      duration: 1,
      rotation: 360,
      opacity: 1,
      delay: .5,
      stagger: 0.1, // stagger in from the left with a 0.1 second gap in between animations
      ease: "sine.out"
    });
    gsap.to("#gallery",{
      duration:1, 
      delay:.5, 
      xPercent:-130,
      rotate:-360
    });
    gsap.to("#about",{
      duration:1, 
      delay:.5, 
      yPercent:-100
    });
    gsap.to("#contact",{
      duration:1, 
      delay:.5, 
      xPercent:130,
      yPercent:-200,
      rotate:360
    });
  });

  
  return (

    <div
      style={{
        ...styles.head,
      } as React.CSSProperties}
    >

      <Image 
        style={{objectFit: "cover"}}
        alt={"Background Poppies In Neon Colours"}
        src={"/BGRD.jpeg"}
        fill={true}
        priority
        id="home-2-background"
      />      
      
      
      <Image
        style={{zIndex: 2}}
        alt={"Tall Poppy Studios"}
        src={"/tps-logo-ff.png"}
        height={80}
        width={400}
        priority
        id="tall-poppy-logo"
      />
      
      <Link href="gallery">
        <Image src="/gallery-icon.png"
          alt="Gallery"
          height={150}
          width={150}
          priority
          className="title-option"
          id="gallery"
        />
      </Link>

      <Link href="about">
        <Image src="/about-icon.png"
          alt="About"
          height={150}
          width={150}
          priority
          className="title-option"
          id="about"
        />
      
      </Link>

      <Link href="contact">
        <Image src="/contact-icon.png"
          alt="Contact"
          height={150}
          width={150}
          priority
          className="title-option"
          id="contact"
        />
      </Link>
      
    </div>
    
  
    )
}

const styles={
  head: {
    
    position: "absolute",
    zIndex: 2,
    width: "100%",
    height:"100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
  },
  background: {
  
  },
  button: {

    
  }
}
