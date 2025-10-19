"use client"
import Image from "next/image"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrambleTextPlugin);


export default function Sten(){

        useGSAP(() => { 
            gsap.to('#brandHeaderSG', {
                scrollTrigger: {
                    trigger: '#brandHeaderSG',   // element that triggers
                    start: 'top center',       // when it enters viewport
                    toggleActions: 'play none none none'
                },
                duration: 1,
                scrambleText: {
                    text: "STEN",
                    chars: "XO"
                }
            });

            gsap.to('#brandServicesSG', {
                scrollTrigger: {
                    trigger: '#brandServicesSG',   // element that triggers
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
        {id:0, src:"/gallery/sten/STEN HAPPY HOUSE 1.jpg", alt: "Sten 1", imageHeader:"", imageText:""},
        {id:2, src: "/gallery/sten/STEN HAPPY HOUSE 2.jpg", alt: "Sten 2", imageHeader:"", imageText:""},
        {id:3, src: "/gallery/sten/STEN HAPPY HOUSE 3.jpg", alt: "Sten 3", imageHeader:"", imageText:""},
        {id:4, src: "/gallery/sten/STEN HAPPY HOUSE 4.jpg", alt: "Sten 4", imageHeader:"", imageText:""},
        {id:5, src: "/gallery/sten/STEN HAPPY HOUSE 5.jpg", alt: "Sten 5", imageHeader:"", imageText:""},
        {id:6, src: "/gallery/sten/STEN HAPPY HOUSE 6.jpg", alt: "Sten 6", imageHeader:"", imageText:""},
        {id:7, src: "/gallery/sten/STEN HAPPY HOUSE 7.jpg", alt: "Sten 7", imageHeader:"", imageText:""},
        {id:8, src: "/gallery/sten/STEN HAPPY HOUSE 8.jpg", alt: "Sten 8", imageHeader:"", imageText:""},
        {id:9, src: "/gallery/sten/STEN HAPPY HOUSE 9.jpg", alt: "Sten 9", imageHeader:"", imageText:""},
        {id:10, src: "/gallery/sten/STEN HAPPY HOUSE 10.jpg", alt: "Sten 10", imageHeader:"", imageText:""}
    ]

        const images2 = [
        {id:0, src:"/gallery/sten/STILL LIFE 1.jpg", alt: "Sten 1", imageHeader:"", imageText:""},
        {id:2, src: "/gallery/sten/STILL LIFE 2.jpg", alt: "Sten 2", imageHeader:"", imageText:""},
        {id:3, src: "/gallery/sten/STILL LIFE 3.jpg", alt: "Sten 3", imageHeader:"", imageText:""},
        {id:4, src: "/gallery/sten/STILL LIFE 4.jpg", alt: "Sten 4", imageHeader:"", imageText:""},
        {id:5, src: "/gallery/sten/STILL LIFE 5.jpg", alt: "Sten 5", imageHeader:"", imageText:""},
        {id:6, src: "/gallery/sten/STILL LIFE 6.jpg", alt: "Sten 6", imageHeader:"", imageText:""},
        {id:7, src: "/gallery/sten/STILL LIFE 7.jpg", alt: "Sten 7", imageHeader:"", imageText:""}
    ]

    return(
        <>
        <hr className="white-line"/>
        <div className="headerBox">
            <div className="brandHeader" id="brandHeaderSG"></div>
            <div className="brandServices" id="brandServicesSG"></div>
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
            
            />
            <div className="imageTitle"><b>{image.imageHeader}</b> {image.imageText}</div>
            </div>
        ))}

        <video width="400px" height="500px" preload="none" className="galleryImage" muted autoPlay loop playsInline>
                <source src="/gallery/sten/STEN SAMPLE VID.mp4" type="video/mp4" />
                Your browser does not support the video tag.
        </video>
        </div>
    </>
    )
}