"use client"
import Header from "../coreHeader"
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import Moriomoto from "./morimoto";
import Sten from "./sten";
import Tia from "./tia";

export default function Gallery() {


    return(
        
        <><Header/>
        <h1>Gallery</h1>
        <Moriomoto/>
        <Sten/>
        <Tia/>
        </>
    )
}

