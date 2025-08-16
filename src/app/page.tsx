"use client"
import Image from "next/image";
import { useState } from "react";



export default function Home() {
  const [bgLoaded, setbgLoaded] = useState(false);
  
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
        src={"/logo-2.png"}
        height={100}
        width={500}
        priority
      />
    </div>
  )}
    
    <div style={styles.background}>
      <Image 
      style={{objectFit: "cover"}}
      alt={"Background Gif"}
      src={"/background.gif"}
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
      justifyContent: "center",
      alignItems: "center",
      top: 0,
      left: 8,
  },
  background: {
    

  }
}