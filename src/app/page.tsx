"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";



export default function Landing() {
  const [bgLoaded, setbgLoaded] = useState(false);
  const [loader, setLoader] = useState(0);

    useEffect(() => {
    if(!bgLoaded) return
    const interval = setInterval(() => {
      setLoader((v) => (v < 100 ? v + 0.01 : v));
    }, 50); // every 50ms
    return () => clearInterval(interval);
  }, [bgLoaded]);
  
  return (
<>

  {!bgLoaded ? (
    <div
      style={{
        ...styles.head,
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#000",
        color: "#fff",
        fontSize: 32,
        zIndex: 10,
      } as React.CSSProperties}
    >
      

      <div className="loader"></div>

    </div>
  ) : (
    <div
      style={{
        ...styles.head,
      } as React.CSSProperties}
    >
      <Image
        alt={"Tall Poppy Studios"}
        src={"/tps-logo-ff.png"}
        height={80}
        width={400}
        priority
      />

      <div className="">Coming Soon</div>
      
      {/* {loader>=1? 
      <Link href='home'>
        <Image src={"/enter.png"} height={200} width={200} alt="enter" priority/></Link> : <progress value={loader}/>} */}
      

      

    </div>
  )}
    
    <div>
      <Image 
      style={{objectFit: "cover"}}
      alt={"Background Gif"}
      src={"/background2.gif"}
      fill={true}
      onLoad={()=>setbgLoaded(true)}
      />
    </div>


  </>
  );
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

  button: {
    border: "2px solid white",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#00000062",
    color:"white"
  }

}
