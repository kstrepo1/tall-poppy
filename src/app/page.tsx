import Image from "next/image";


export default function Home() {
  return (

    <div style={{ ...styles.head, background: "#000000" }}>
      <Image 
      style={{ background: "#000000" }}
      alt={"Tall Poppy Studios"}
      src={"/TPS_logo.png"}
      height={100}
      width={500}
      />
    </div>

  );
}

const styles={
  head: {
    background: "#000000"
  }
}