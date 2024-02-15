import { useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";


gsap.registerPlugin(ScrollTrigger)

function Scrolling_3() {

    const tl = gsap.timeline()

    const container_x = useRef()

    
    gsap.defaults({ ease: "expo.inOut", duration: 2})

    /* gsap.set(".contenedor__Animacion", {position: "fixed"}) */

    useGSAP(() => {
        tl.from(".seccio_3", { xPercent : -100 })
        tl.from(".seccio_4", { xPercent : 100 }, "-=2")
    }, {scope: container_x})

    ScrollTrigger.create({
        animation: tl,
        trigger: container_x.current,
        start: "top top",
        end: "+=260",
        pin: true, 
        markers: true,
        scrub: 5,
    })
    
  return (
    <div ref={container_x} className='w-full h-screen absolute flex overflow-hidden'>
                    <section className="seccion seccio_3 w-[50%] h-screen  flex justify-center items-center bg-violet-800">
                        <h2 className="">SECCION 3</h2>
                    </section>
                    <section className="seccion seccio_4 w-[50%] h-screen  flex justify-center items-center bg-emerald-800">
                        <h2 className="">SECCION 4</h2>
                    </section>
                </div>
  )
}

export default Scrolling_3