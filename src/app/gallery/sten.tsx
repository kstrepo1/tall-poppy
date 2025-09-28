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
            
            gsap.to('#brandSubHeaderSG', {
                scrollTrigger: {
                    trigger: '#brandSubHeaderSG',   // element that triggers
                    start: 'top center',       // when it enters viewport
                    toggleActions: 'play none none none'
                },
                duration: 1,
                delay: 1,
                scrambleText: {
                    text: "HAPPY HOUSE",
                    chars: "XO"
                }
                });

            

            gsap.to('#brandSubHeaderSG2', {
                scrollTrigger: {
                    trigger: '#brandSubHeaderSG2',   // element that triggers
                    start: 'top center',       // when it enters viewport
                    toggleActions: 'play none none none'
                },
                duration: 1,
                delay: 0,
                scrambleText: {
                    text: "STILL LIFE",
                    chars: "XO"
                }
                });


    });

    const images1 = [
        {id:0, src:"/gallery/sten/STEN HAPPY HOUSE 1.jpg", alt: "Morimoto 1"},
        {id:2, src: "/gallery/sten/STEN HAPPY HOUSE 2.jpg", alt: "Morimoto 2"},
        {id:3, src: "/gallery/sten/STEN HAPPY HOUSE 3.jpg", alt: "Morimoto 3"},
        {id:4, src: "/gallery/sten/STEN HAPPY HOUSE 4.jpg", alt: "Morimoto 4"},
        {id:5, src: "/gallery/sten/STEN HAPPY HOUSE 5.jpg", alt: "Morimoto 5"},
        {id:6, src: "/gallery/sten/STEN HAPPY HOUSE 6.jpg", alt: "Morimoto 6"},
        {id:7, src: "/gallery/sten/STEN HAPPY HOUSE 7.jpg", alt: "Morimoto 7"},
        {id:8, src: "/gallery/sten/STEN HAPPY HOUSE 8.jpg", alt: "Morimoto 8"},
        {id:9, src: "/gallery/sten/STEN HAPPY HOUSE 9.jpg", alt: "Morimoto 9"},
        {id:10, src: "/gallery/sten/STEN HAPPY HOUSE 10.jpg", alt: "Morimoto 10"}
    ]

        const images2 = [
        {id:0, src:"/gallery/sten/STILL LIFE 1.jpg", alt: "Morimoto 1"},
        {id:2, src: "/gallery/sten/STILL LIFE 2.jpg", alt: "Morimoto 2"},
        {id:3, src: "/gallery/sten/STILL LIFE 3.jpg", alt: "Morimoto 3"},
        {id:4, src: "/gallery/sten/STILL LIFE 4.jpg", alt: "Morimoto 4"},
        {id:5, src: "/gallery/sten/STILL LIFE 5.jpg", alt: "Morimoto 5"},
        {id:6, src: "/gallery/sten/STILL LIFE 6.jpg", alt: "Morimoto 6"},
        {id:7, src: "/gallery/sten/STILL LIFE 7.jpg", alt: "Morimoto 7"}
    ]

    return(
        <>
        <hr className="white-line"/>
        <div className="headerBox" style={{height:150}}>
            <div className="brandHeader" id="brandHeaderSG"></div>
            <div className="brandServices" id="brandServicesSG"></div>
            <div className="brandSubHeader" id="brandSubHeaderSG"> </div>
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
            priority
            />
        ))}
        <video width="400px" height="500px" preload="none" className="galleryImage" muted autoPlay loop playsInline>
                <source src="/gallery/sten/STEN SAMPLE VID.mp4" type="video/mp4" />
                Your browser does not support the video tag.
        </video>
        </div>

        <div className="brandSubHeader" id="brandSubHeaderSG2">
            
        </div>
        <div className="galleryImages" style={{ display: 'flex', flexDirection: 'row', gap: '10px', flexWrap: 'wrap', justifyContent:"center"}}>
        {images2.map((image) => (
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