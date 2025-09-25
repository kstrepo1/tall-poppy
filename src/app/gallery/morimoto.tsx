"use client"
import Image from "next/image"


export default function Moriomoto(){

    const images1 = [
        {id:1, src: "/gallery/mm/MM 1.jpg", alt: "Morimoto 1"},
        {id:2, src: "/gallery/mm/MM 2.jpg", alt: "Morimoto 2"},
        {id:3, src: "/gallery/mm/MM 3.jpg", alt: "Morimoto 3"},
        {id:4, src: "/gallery/mm/MM 4.jpg", alt: "Morimoto 4"},
        {id:5, src: "/gallery/mm/MM 5.jpg", alt: "Morimoto 5"},
        {id:6, src: "/gallery/mm/MM 5-1.jpg", alt: "Morimoto 6"},
        {id:7, src: "/gallery/mm/MM 7.jpg", alt: "Morimoto 7"},
        {id:8, src: "/gallery/mm/MM 8.jpg", alt: "Morimoto 8"},
        {id:9, src: "/gallery/mm/MM 9.jpg", alt: "Morimoto 9"},
        {id:10, src: "/gallery/mm/MM 10.jpg", alt: "Morimoto 10"},
        {id:11, src: "/gallery/mm/MM 11.jpg", alt: "Morimoto 11"},
        {id:12, src: "/gallery/mm/MM 12.jpg", alt: "Morimoto 12"},
        
    ]

    const images2 = [

    ]

    return(
        <>
        <hr className="white-line"/>
        <div className="brandHeader">
            Morimoto
        </div>
        
        <div id="galleryImages" style={{ display: 'flex', flexDirection: 'row', gap: '10px', flexWrap: 'wrap', justifyContent:"center"}}>
        {images1.map((image) => (
            <Image 
            key={image.id}
            src={image.src} 
            width={200}
            height={200}
            alt={image.alt}
            objectFit="cover"
            className="galleryImage"
            priority
            />
        ))}
        </div>
        


    
        
        
        
        </>

    )
}