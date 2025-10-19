"use client"

import Header from "../coreHeader";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Function Code:
//     ---------------
//     gsap.from(animatedText, {
//         scrollTrigger: {
//           trigger: animatedText,
//           start: "top 85%",
//           end: "top 35%",
//           scrub: true,
//         },
        // skewX: 45,
        // opacity: 0,
        // duration: 2,
//       });

//     HTML Code:
//     ---------------
//     <section class="container-fluid vh-100 d-flex align-items-center justify-content-center position-relative effect-section" data-effect="skew-in">
//           <button class="btn btn-dark position-absolute top-0 end-0 m-3 copy-btn">Copy Code</button>
//           <div class="row w-100">
//             <div class="col-12 text-center">
//               <h1 class="animated-text" style="translate: none; rotate: none; scale: none; opacity: 0.5759; transform: translate3d(0px, 0px, 0px) skew(19.0843deg, 0deg);">Skew-In Effect</h1>
//             </div>
//           </div>
//         </section>




export default function About() {

    useGSAP(() => { 
            gsap.to('.aboutText', {
                scrollTrigger: {
                    trigger: '.aboutText',  
                    start: "top 80%",
                    end: "top 30%",
                    scrub: false,
                },
                skewX: 45,
                opacity: 0,
                duration: 2,
            });



    });


    return(
        <>
        <Header/>
        <h1>About</h1><hr className="white-line"/>
        <div className="aboutText" style={{translate: "none", rotate: "none", scale: "none", opacity: 0.5759, transform: "translate3d(0px, 0px, 0px) skew(19.0843deg, 0deg)"}}>
        Tall Poppy Studios is a Melbourne-based creative studio led by Mads Russell. 
        
        Rooted in photography, design, and brand communication, we help brands craft thoughtful, visually driven narratives that feel authentic and intentional.
        Our work lives at the intersection of creativity and clarity, from concepting shoots and developing digital campaigns to refining the details that make a brand cohesive. We've collaborated with brands across design, lifestyle, and culture, bringing a hands-on, collaborative approach to every project.
        At Tall Poppy Studios, we believe in creativity that feels authentic — less about perfection, more about presence.
        
        </div>

        </>
        
    )
}

