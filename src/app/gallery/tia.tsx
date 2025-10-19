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
                    trigger: '#brandHeaderT',   // element that triggers
                    start: 'top center',       // when it enters viewport
                    toggleActions: 'play none none none'
                },
                duration: 1,
                scrambleText: {
                    text: "TEST w/ TIA",
                    chars: "XO"
                }
            });

            gsap.to('#brandServicesT', {
                scrollTrigger: {
                    trigger: '#brandServicesT',   // element that triggers
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
        {id:1, src: "/gallery/tia/tia-1.jpg", alt: "Tia 1"},
        {id:2, src: "/gallery/tia/tia-2.jpg", alt: "Tia 2"},
        {id:3, src: "/gallery/tia/tia-3.jpg", alt: "Tia 3"},
        {id:4, src: "/gallery/tia/tia-4.jpg", alt: "Tia 4"},
        {id:5, src: "/gallery/tia/tia-5.jpg", alt: "Tia 5"},
        {id:6, src: "/gallery/tia/tia-6.jpg", alt: "Tia 6"},
        {id:7, src: "/gallery/tia/tia-7.jpg", alt: "Tia 7"},
        {id:8, src: "/gallery/tia/tia-8.jpg", alt: "Tia 8"}
    ]

    return(
        <>
        <hr className="white-line"/>
         <div className="headerBox">
            <div className="brandHeader" id="brandHeaderT">        </div>
            <div className="brandServices" id="brandServicesT">        </div>
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