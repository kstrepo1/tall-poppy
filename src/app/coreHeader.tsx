"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";


export default function Header() {


    return(
        <><div id="headerElements">
            <div id="headerLogo">
                <Link href="home">
                <Image src={"/tps-long-ff.png"} width={400} height={50} alt="Tall Poppy Studios Logo"/>
                </Link>
                
                
            </div>
                
            <div id="headerLinks">
                <Link href="gallery" className="headerLink">Gallery </Link>
                <Link href="about" className="headerLink">About </Link> 
                <Link href="contact" className="headerLink">Contact</Link>
            </div>

        </div></>
    )
}

