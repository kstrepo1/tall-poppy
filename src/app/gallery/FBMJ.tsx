"use client"
import Image from "next/image"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrambleTextPlugin);


export default function FBMJ(){

    useGSAP(() => { 
        gsap.to('.brandHeader', {
        scrollTrigger: '.brandHeader', // start animation when ".box" enters the viewport
        x: 0
        });

        gsap.to('#brandHeaderFBMJ', {
        duration: 1, 
        scrambleText: {
            text: "BOWQUET by FBMJ",
            chars: "XO"
        }
        });

        gsap.to('#brandServicesFBMJ', {
        duration: 2,
        delay: 0.5,
        scrambleText:{
            text: "PHOTOGRAPHY, CREATIVE DIRECTION",
            chars: "XO",
        } 
        
        });

    });



    const images2 = [
        {id:0, src:"/gallery/fbmj/FBMJ1 WHISPER HONEY 2.jpg", alt: "FBMJ", imageHeader:"WHISPER HONEY", imageText:""},
        {id:1, src:"/gallery/fbmj/FBMJ1 009_ falling ( love again ).jpg", alt: "FBMJ", imageHeader:"FALLING", imageText:""},
        {id:2, src:"/gallery/fbmj/FBMJ1 010_ out of control.jpg", alt: "FBMJ", imageHeader:"OUT OF CONTROL", imageText:""},
        {id:3, src:"/gallery/fbmj/FBMJ1 WHISPER HONEY 1.jpg", alt: "FBMJ", imageHeader:"WHISPER HONEY", imageText:""},
        {id:4, src:"/gallery/fbmj/FBMJ1 005_ chemistry.jpg", alt: "FBMJ", imageHeader:"CHEMISTRY", imageText:""},
        {id:5, src:"/gallery/fbmj/FBMJ1 004_ whisper honey.jpg", alt: "FBMJ", imageHeader:"WHISPER HONEY", imageText:""},
        {id:6, src:"/gallery/fbmj/FMBJ1 005_ chemistry.jpg", alt: "FBMJ", imageHeader:"CHEMISTRY", imageText:""},
        {id:7, src:"/gallery/fbmj/FBMJ1 COMPLIATION.jpg", alt: "FBMJ", imageHeader:"COMPILATION", imageText:""},
        ]

    const images1 = [
        {id:0, src:"/gallery/fbmj/FBMJ2 002_ bow wow wowFILM.jpg", alt: "FBMJ", imageHeader:"BOW WOW WOW", imageText:""},
        {id:1, src:"/gallery/fbmj/FBMJ2 out of control 1.jpg", alt: "FBMJ", imageHeader:"OUT OF CONTROL 1", imageText:""},
        {id:2, src:"/gallery/fbmj/FBMJ2 out of control_.jpg", alt: "FBMJ", imageHeader:"OUT OF CONTROL 2", imageText:""},
        {id:3, src:"/gallery/fbmj/FBMJ2 primrose BIN.jpg", alt: "FBMJ", imageHeader:"PRIMROSE", imageText:""},
        {id:4, src:"/gallery/fbmj/FBMJ2 primrose.jpg", alt: "FBMJ", imageHeader:"PRIMROSE", imageText:""},
        {id:5, src:"/gallery/fbmj/FBMJ2 WHISPER HONEY FILM 1.jpg", alt: "FBMJ", imageHeader:"WHISPER HONEY", imageText:""},
        {id:6, src:"/gallery/fbmj/FBMJ2 WHISPER HONEY FILM_.jpg", alt: "FBMJ", imageHeader:"WHISPER HONEY", imageText:""},
        {id:7, src:"/gallery/fbmj/FBMJ2 WHITE.jpg", alt: "FBMJ", imageHeader:"WHITE", imageText:""},
    
    ]

    return(
        <>
        <hr className="white-line"/>
        <div className="headerBox">
            <div className="brandHeader" id="brandHeaderFBMJ"></div>
            <div className="brandServices" id="brandServicesFBMJ"></div>
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
                {images2.map((image) => (
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
        {/* <div>
            <video width="400px" height="500px" preload="none" className="galleryImage" muted autoPlay loop playsInline>
                <source src="/gallery/mm/VideoMM.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="imageTitle"><b>VICTORIA</b> SANDALS</div>
        </div> */}
        </div>
    </>
    )
}