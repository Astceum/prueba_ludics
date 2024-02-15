import { useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";


gsap.registerPlugin(ScrollTrigger)

function Scrolling_4() {

    const tl = gsap.timeline()

    
    const container_y = useRef()
    
    
    gsap.defaults({ ease: "expo.inOut", duration: 2})


    useGSAP(() => {
        tl.from(".seccio_5", { yPercent : -100 })
        tl.from(".seccio_6", { yPercent : 100 }, "-=2")
    }, {scope: container_y})

    ScrollTrigger.create({
        animation: tl,
        trigger: ".contenedor__Animacion",
        start: "top top",
        end: "+=260",
        pin: true, 
        markers: true,
        scrub: 5,
    })

  return (
    <div ref={container_y} className='w-full h-screen absolute flex overflow-hidden'>
        <section className="seccion seccio_5 w-[50%] h-screen  flex justify-center items-center bg-pink-400">
            <h2 className="">SECCION 5</h2>
        </section>
        <section className="seccion seccio_6 w-[50%] h-screen  flex justify-center items-center bg-yellow-400">
            <h2  className="texto_6">SECCION 6</h2>
        </section>
    </div>
  )
}

export default Scrolling_4