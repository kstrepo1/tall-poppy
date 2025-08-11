import Image from "next/image";


export default function Home() {
  return (

    <header>
        <Image
        alt={"Tall Poppy Studios"}
        src={"/TPS_logo.png"}
        height={100}
        width={500}
        />
    </header>

  );
}
