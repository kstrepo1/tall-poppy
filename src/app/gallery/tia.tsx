"use client"
import Image from "next/image"


export default function Tia(){

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
        <div className="brandHeader">
            TIA
        </div>
        <div className="brandServices">
            PHOTOGRAPHY, CREATIVE DIRECTION
        </div>
        
        <div className="galleryImages" style={{ display: 'flex', flexDirection: 'row', gap: '10px', flexWrap: 'wrap', justifyContent:"center"}}>
        {images1.map((image) => (
            <Image 
            key={image.id}
            src={image.src} 
            width={200}
            height={200}
            alt={image.alt}
            objectFit="cover"
            className="galleryImage"
            
            />
        ))}
        </div>
    </>
    )
}