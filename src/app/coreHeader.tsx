"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Header() {
    const pathname = usePathname();

    const navLinks=[{id: 1, title: "Gallery", href:"/gallery"},
                    {id:2, title:"About", href:"/about"},
                    {id:3, title:"Contact", href:"/contact"}
]


    return(
        <><div id="headerElements">
            <div id="headerLogo">
                <Link href="home">
                <Image src={"/tps-long-ff.png"} width={400} height={50} alt="Tall Poppy Studios Logo"/>
                </Link>
                
                
            </div>
                
            <div id="headerLinks">

                {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    console.log(isActive)
                    console.log(pathname)
                    console.log(link.href)
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`headerLink ${
                            isActive
                                ? "text-white-500 "
                                : "text-stone-400 hover:text-red"
                            }`}
                        >
                            {link.title}
                        </Link>
                    );
                })}
            </div>

        </div></>
    )
}

