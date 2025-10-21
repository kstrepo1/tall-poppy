"use client"
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrambleTextPlugin);



export default function Tia(){

            useGSAP(() => { 
            gsap.to('#brandHeaderT', {
                scrollTrigger: {
                    trigger: '#brandHeaderP',   // element that triggers
                    start: 'top center',       // when it enters viewport
                    toggleActions: 'play none none none'
                },
                duration: 1,
                scrambleText: {
                    text: "Production",
                    chars: "XO"
                }
            });

            gsap.to('#brandServicesT', {
                scrollTrigger: {
                    trigger: '#brandServicesP',   // element that triggers
                    start: 'top center',       // when it enters viewport
                    toggleActions: 'play none none none'
                },
                duration: 1,
                delay: 0.5,
                scrambleText: {
                    text: "PHOTOGRAPHY, CREATIVE DIRECTION",
                    chars: "XO"
                }
                });

            });

    const images1 = [
        {id:1, src: "", alt: ""},
        {id:2, src: "", alt: ""},
        {id:3, src: "", alt: ""},
        {id:4, src: "", alt: ""},
        {id:5, src: "", alt: ""},
        {id:6, src: "", alt: ""},
        {id:7, src: "", alt: ""},
        {id:8, src: "", alt: ""},
    ]

    return(
        <>
        <hr className="white-line"/>
         <div className="headerBox">
            <div className="brandHeader" id="brandHeaderT">        </div>
            <div className="brandServices" id="brandServicesP">        </div>
        </div>
        
        <div className="galleryImages" style={{ display: 'flex', flexDirection: 'row', gap: '10px', flexWrap: 'wrap', justifyContent:"center"}}>
        {images1.map((image) => (
            <Image 
            key={image.id}
            src={image.src} 
            width={200}
            height={200}
            alt={image.alt}
            className="galleryImage"
            
            />
        ))}
        </div>
    </>
    )
}