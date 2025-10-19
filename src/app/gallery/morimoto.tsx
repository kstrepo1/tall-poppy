"use client"
import Image from "next/image"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrambleTextPlugin);


export default function Moriomoto(){

    useGSAP(() => { 
        gsap.to('.brandHeader', {
        scrollTrigger: '.brandHeader', // start animation when ".box" enters the viewport
        x: 0
        });

        gsap.to('#brandHeaderMM', {
        duration: 1, 
        scrambleText: {
            text: "MORIMOTO",
            chars: "XO"
        }
        });

        gsap.to('#brandServicesMM', {
        duration: 2,
        delay: 0.5,
        scrambleText:{
            text: "PHOTOGRAPHY, CREATIVE DIRECTION",
            chars: "XO",
        } 
        
        });

    });



    const images1 = [
        {id:0, src:"/gallery/mm/mm-1-0.jpg", alt: "Morimoto 0.5", imageHeader:"ALIX", imageText:"MULES"},
        {id:10, src: "/gallery/mm/mm-1-1.jpg", alt: "Morimoto 1", imageHeader:"", imageText:""},
        {id:20, src: "/gallery/mm/MM 2.jpg", alt: "Morimoto 2", imageHeader:"BIANCA", imageText:"PUMPS"},
        {id:30, src: "/gallery/mm/MM 3.jpg", alt: "Morimoto 3", imageHeader:"ALIX", imageText:"MULES"},
        {id:40, src: "/gallery/mm/MM 6.jpg", alt: "Morimoto 6", imageHeader:"ALIX", imageText:"MULES"},
        {id:50, src: "/gallery/mm/MM 5.jpg", alt: "Morimoto 5", imageHeader:"ALIX", imageText:"MULES"},
        {id:51, src: "/gallery/mm/MM 5-1.jpg", alt: "Morimoto 6", imageHeader:"ALIX", imageText:"MULES"},
        {id:60, src: "/gallery/mm/MM 4.jpg", alt: "Morimoto 4", imageHeader:"ALMA", imageText:"MESH PUMPS"},
        {id:70, src: "/gallery/mm/MM 7.jpg", alt: "Morimoto 7", imageHeader:"BIANCA", imageText:"PUMPS"},
        {id:71, src: "/gallery/mm/MM 7-1.jpg", alt: "Morimoto 7-1", imageHeader:"ALIX", imageText:"MULES"},
        {id:80, src: "/gallery/mm/MM 8.jpg", alt: "Morimoto 8", imageHeader:"MARTINA", imageText:"SANDAL"},
        {id:85, src: "/gallery/mm/MM 8-5.jpg", alt: "Morimoto 8", imageHeader:"ALIX", imageText:"MULES"},
        {id:90, src: "/gallery/mm/MM 9.jpg", alt: "Morimoto 9", imageHeader:"ALIX", imageText:"MULES"},
        {id:100, src: "/gallery/mm/MM 10.jpg", alt: "Morimoto 10", imageHeader:"ALIX", imageText:"MULES"},
        {id:110, src: "/gallery/mm/MM 11.jpg", alt: "Morimoto 11", imageHeader:"VICTORIA", imageText:"SANDALS"},

    ]

    return(
        <>
        <hr className="white-line"/>
        <div className="headerBox">
            <div className="brandHeader" id="brandHeaderMM"></div>
            <div className="brandServices" id="brandServicesMM"></div>
        </div>
        
        <div className="galleryImages" style={{ display: 'flex', flexDirection: 'row', gap: '10px', flexWrap: 'wrap', justifyContent:"center"}}>
        {images1.map((image) => (
            <div key={image.id}>
            <Image 
            
            src={image.src} 
            width={200}
            height={200}
            alt={image.alt}
            className="galleryImage"
            priority
            />
            <div className="imageTitle"><b>{image.imageHeader}</b> {image.imageText}</div>
            </div>
        ))}
        <div>
            <video width="400px" height="500px" preload="none" className="galleryImage" muted autoPlay loop playsInline>
                <source src="/gallery/mm/VideoMM.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="imageTitle"><b>LAURA</b> SLINGBACK</div>
        </div>
        </div>
    </>
    )
}