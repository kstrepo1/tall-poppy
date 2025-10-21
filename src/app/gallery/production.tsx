"use client"
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrambleTextPlugin);



export default function PRODUCTION(){

            useGSAP(() => { 
            gsap.to('#brandHeaderProduction', {
                scrollTrigger: {
                    trigger: '#brandHeaderProduction',   // element that triggers
                    start: 'top center',       // when it enters viewport
                    toggleActions: 'play none none none'
                },
                duration: 1,
                scrambleText: {
                    text: "Production",
                    chars: "XO"
                }
            });

            gsap.to('#brandServicesProduction', {
                scrollTrigger: {
                    trigger: '#brandServicesProduction',   // element that triggers
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
        {id:1, src: "/gallery/production/Bobbi Brown 1.MP4", alt: "BOBBI BROWN", imageHeader:"", imageText:""},
        {id:3, src: "/gallery/production/CLEOPATRA 2.jpg", alt: "", imageHeader:"", imageText:""},
        {id:4, src: "/gallery/production/CLEOPATRA 3.jpg", alt: "", imageHeader:"", imageText:""},
        {id:5, src: "/gallery/production/CLEOPATRA 4.jpg", alt: "", imageHeader:"", imageText:""},
        {id:6, src: "/gallery/production/CLEOPATRA 5.jpg", alt: "", imageHeader:"", imageText:""},
        {id:7, src: "/gallery/production/CLEOPATRA 6.jpg", alt: "", imageHeader:"", imageText:""},
        {id:8, src: "/gallery/production/CLEOPATRA 7.jpg", alt: "", imageHeader:"", imageText:""},
        {id:9, src: "/gallery/production/CLEOPATRA 8.jpg", alt: "", imageHeader:"", imageText:""},
        {id:12, src: "/gallery/production/CLEOPATRA 11.jpg", alt: "", imageHeader:"", imageText:""},
        {id:13, src: "/gallery/production/CLEOPATRA 12.mp4", alt: "", imageHeader:"", imageText:""},
        {id:14, src: "/gallery/production/KMART 1.jpg", alt: "", imageHeader:"", imageText:""},
        {id:15, src: "/gallery/production/KMART 1.mp4", alt: "", imageHeader:"", imageText:""},
        {id:16, src: "/gallery/production/KMART 2.jpg", alt: "", imageHeader:"", imageText:""},
        {id:17, src: "/gallery/production/KMART 2.mp4", alt: "", imageHeader:"", imageText:""},
        {id:18, src: "/gallery/production/KMART.mp4", alt: "", imageHeader:"", imageText:""},
        {id:19, src: "/gallery/production/MECCA 1.png", alt: "", imageHeader:"", imageText:""},
        {id:20, src: "/gallery/production/MECCA 2.png", alt: "", imageHeader:"", imageText:""},
        {id:21, src: "/gallery/production/MECCA 3.png", alt: "", imageHeader:"", imageText:""},
        {id:22, src: "/gallery/production/MFW 1.jpg", alt: "", imageHeader:"", imageText:""},
        {id:23, src: "/gallery/production/MFW 2.jpg", alt: "", imageHeader:"", imageText:""},
        {id:24, src: "/gallery/production/MFW 3.jpg", alt: "", imageHeader:"", imageText:""},
        {id:25, src: "/gallery/production/MFW 4.jpg", alt: "", imageHeader:"", imageText:""},
        {id:26, src: "/gallery/production/MFW 5.jpg", alt: "", imageHeader:"", imageText:""},
        {id:27, src: "/gallery/production/MFW 6.jpg", alt: "", imageHeader:"", imageText:""},
        {id:28, src: "/gallery/production/MFW 7.jpg", alt: "", imageHeader:"", imageText:""},
        {id:29, src: "/gallery/production/NALA1.MP4", alt: "", imageHeader:"", imageText:""},
        {id:30, src: "/gallery/production/PH1.jpg", alt: "", imageHeader:"", imageText:""},
        {id:32, src: "/gallery/production/PH3.jpg", alt: "", imageHeader:"", imageText:""},
        {id:33, src: "/gallery/production/PH4.jpg", alt: "", imageHeader:"", imageText:""},
        {id:35, src: "/gallery/production/PH6.jpg", alt: "", imageHeader:"", imageText:""},
        {id:36, src: "/gallery/production/PH7.jpg", alt: "", imageHeader:"", imageText:""},
        {id:37, src: "/gallery/production/PH8.jpg", alt: "", imageHeader:"", imageText:""},
        {id:39, src: "/gallery/production/RAQ1.jpg", alt: "", imageHeader:"", imageText:""},
        {id:40, src: "/gallery/production/RAQ2.jpg", alt: "", imageHeader:"", imageText:""},
        {id:41, src: "/gallery/production/RAQ3.jpg", alt: "", imageHeader:"", imageText:""},
        {id:42, src: "/gallery/production/RAQ4.jpg", alt: "", imageHeader:"", imageText:""},
        {id:43, src: "/gallery/production/SPORTSGIRL1.mp4", alt: "", imageHeader:"", imageText:""},
        ]

    return(
        <>
            <hr className="white-line" />
            <div className="headerBox">
                <div className="brandHeader" id="brandHeaderProduction" />
                <div className="brandServices" id="brandServicesProduction" />
            </div>

            <div
                className="galleryImages"
                style={{ display: "flex", flexDirection: "row", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}
            >
                {images1.map((item) => {
                    const src = item.src;
                    const lower = src.toLowerCase();
                    

                    if (lower.endsWith(".mp4")) {
                        return (
                            <>
                            <video
                                key={item.id}
                                src={src}
                                className="galleryImage"
                                width={200}
                                height={200}
                                controls
                                loop
                                muted
                                playsInline
                            />
                            {item.id}</>
                        );
                    }

                    // fallback for images (.jpg, .png, .jpeg, etc.)
                    return (
                        <>
                        <Image
                            key={item.id}
                            src={src}
                            width={200}
                            height={200}
                            alt={item.alt || ""}
                            className="galleryImage"
                        />
                        {item.id}</>
                    );
                })}
            </div>
        </>
    )
}