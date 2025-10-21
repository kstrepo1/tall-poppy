"use client"

import Header from "../coreHeader";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";


export default function Contact() {


    return(
        <>
        <Header/>
        <h1>Contact</h1><hr className="white-line"/>
        
        <center>
            <p><a href="mailto:hi@tallpoppystudios.au">hi@tallpoppystudios.au</a></p>
            <p><a href="https://www.instagram.com/t.allpoppy/">INSTAGRAM</a></p>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScnD3OUabffIkUlFL2mUuVoS2LUdGrT2YK8ht-fDGxU9u_uqA/viewform?embedded=true" width="640" height="725">Loading…</iframe>
            
        </center> 
              
        
        
        </>

    )
}

