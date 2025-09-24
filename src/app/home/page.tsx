"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";


export default function Home() {
  const [bgLoaded, setbgLoaded] = useState(false);
  const [loader, setLoader] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
      setLoader((v) => (v < 100 ? v + 0.01 : v));
    }, 50); // every 50ms
    return () => clearInterval(interval);
  }, []);
  
  return (


    <div
      style={{
        ...styles.head,
      } as React.CSSProperties}
    >
      <Image
        alt={"Tall Poppy Studios"}
        src={"/tps-logo-00.png"}
        height={80}
        width={400}
        priority
      />
            <Link href="gallery">Gallery</Link>
          <Link href="about">About</Link>
          <Link href="contact">Contact</Link>
      
    </div>

  
    )
}

const styles={
  head: {
    
    position: "absolute",
    zIndex: 2,
    width: "100%",
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
