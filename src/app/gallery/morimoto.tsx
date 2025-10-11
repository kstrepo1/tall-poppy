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
        scrambleText: "MORIMOTO",
        chars: "XO",
        });

        gsap.to('#brandServicesMM', {
        duration: 2,
        delay: 0.5,
        scrambleText: "PHOTOGRAPHY, CREATIVE DIRECTION",
        chars: "XO",
        });

    });

    const images1 = [
        {id:0, src:"/gallery/mm/mm-1-0.jpg", alt: "Morimoto 0.5", imageHeader:"Morimoto Header", imageText:"Monty Monty Monty"},
        {id:1, src: "/gallery/mm/mm-1-1.jpg", alt: "Morimoto 1", imageHeader:"", imageText:""},
        {id:2, src: "/gallery/mm/MM 2.jpg", alt: "Morimoto 2", imageHeader:"Morimoto Header", imageText:"Monty Monty Monty"},
        {id:3, src: "/gallery/mm/MM 3.jpg", alt: "Morimoto 3", imageHeader:"Morimoto Header", imageText:"Monty Monty Monty"},
        {id:4, src: "/gallery/mm/MM 4.jpg", alt: "Morimoto 4", imageHeader:"Morimoto Header", imageText:"Monty Monty Monty"},
        {id:5, src: "/gallery/mm/MM 5.jpg", alt: "Morimoto 5", imageHeader:"Morimoto Header", imageText:"Monty Monty Monty"},
        {id:6, src: "/gallery/mm/MM 5-1.jpg", alt: "Morimoto 6", imageHeader:"Morimoto Header", imageText:"Monty Monty Monty"},
        {id:7, src: "/gallery/mm/MM 7.jpg", alt: "Morimoto 7", imageHeader:"Morimoto Header", imageText:"Monty Monty Monty"},
        {id:8, src: "/gallery/mm/MM 8.jpg", alt: "Morimoto 8", imageHeader:"Morimoto Header", imageText:"Monty Monty Monty"},
        {id:9, src: "/gallery/mm/MM 9.jpg", alt: "Morimoto 9", imageHeader:"Morimoto Header", imageText:"Monty Monty Monty"},
        {id:10, src: "/gallery/mm/MM 10.jpg", alt: "Morimoto 10", imageHeader:"Morimoto Header", imageText:"Monty Monty Monty"},
        {id:11, src: "/gallery/mm/MM 11.jpg", alt: "Morimoto 11", imageHeader:"Morimoto Header", imageText:"Monty Monty Monty"},
        {id:12, src: "/gallery/mm/MM 12.jpg", alt: "Morimoto 12", imageHeader:"Morimoto Header", imageText:"Monty Monty Monty"},
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
            <div>
            <Image 
            key={image.id}
            src={image.src} 
            width={200}
            height={200}
            alt={image.alt}
            className="galleryImage"
            priority
            />
            <div><b>{image.imageHeader}</b> {image.imageText}</div>
            </div>
        ))}
        <div>
            <video width="400px" height="500px" preload="none" className="galleryImage" muted autoPlay loop playsInline>
                <source src="/gallery/mm/VideoMM.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        </div>
    </>
    )
}