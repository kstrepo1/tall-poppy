import Image from "next/image";


export default function Home() {
  return (
<>

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
    
    <div style={styles.background}>
      <Image 
      style={{objectFit: "cover"}}
      alt={"Background Gif"}
      src={"/background.gif"}
      fill={true}
      
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