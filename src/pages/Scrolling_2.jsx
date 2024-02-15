import { useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";


gsap.registerPlugin(ScrollTrigger)

function Scrolling_2() {

    const tl = gsap.timeline()

    const container_y_y = useRef()
    
    gsap.defaults({ ease: "expo.inOut", duration: 2})

    /* gsap.set(".contenedor__Animacion", {position: "fixed"}) */



    useGSAP(() => {
        tl.from(".seccio_2", { yPercent : -100,})
        tl.from(".seccio_1_1", { yPercent : 100 }, "-=2")
    }, {scope: container_y_y})

    ScrollTrigger.create({
        animation: tl,
        trigger: ".contenedor__Animacion",
        start: "top top",
        end: "+=260",
        pin: true, 
        markers: true,
        scrub: 2,
    })

  return (
    <div ref={container_y_y} className='w-full h-screen absolute flex overflow-hidden'>                    
        <section className="seccion seccio_1_1 w-[50%] h-screen  flex justify-center items-center bg-orange-600">
            <h2 className="text-white">SECCION 1_1</h2>
        </section>
        <section className="seccion seccio_2 w-[50%] h-screen  flex justify-center items-center bg-red-600">
            <h2 className=" text-black">SECCION 2</h2>
        </section>
    </div>
  )
}

export default Scrolling_2