"use client"
import Image from "next/image"


export default function Sten(){

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
        <div className="brandHeader">
            STEN 
        </div>
        <div className="brandServices">
            Photography, Creative Direction
        </div>
        <div className="brandSubHeader">
            HAPPY HOUSE 
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
            priority
            />
        ))}
        <video width="400px" height="500px" preload="none" className="galleryImage" muted autoPlay loop playsInline>
                <source src="/gallery/sten/STEN SAMPLE VID.mp4" type="video/mp4" />
                Your browser does not support the video tag.
        </video>
        </div>

        <div className="brandSubHeader">
            STILL LIFE
        </div>
        <div className="galleryImages" style={{ display: 'flex', flexDirection: 'row', gap: '10px', flexWrap: 'wrap', justifyContent:"center"}}>
        {images2.map((image) => (
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