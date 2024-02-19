import { useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";


gsap.registerPlugin(ScrollTrigger)



function Scrolling() {
    
    

    const tl = gsap.timeline()
    const tl2 = gsap.timeline()
    const tl3 = gsap.timeline()

    const container_x = useRef()
    const container_y = useRef()
    const container_y_y = useRef()

   
    
    gsap.defaults({ ease: "expo.inOut", duration: 2})

    /* gsap.set(".contenedor__Animacion", {position: "fixed"}) */



    useGSAP(() => {
        tl.from(".seccio_2", { yPercent : -100,})
        tl.from(".seccio_1_1", { yPercent : 100 }, "-=2")
    }, {scope: container_y_y})

/*     useGSAP(() => {
        tl.from(".seccio_3", { xPercent : -100 })
        tl.from(".seccio_4", { xPercent : 100 }, "-=2")
    }, {scope: container_x})

    useGSAP(() => {
        tl.from(".seccio_5", { yPercent : -100 })
        tl.from(".seccio_6", { yPercent : 100 }, "-=2")
    }, {scope: container_y}) */

    ScrollTrigger.create({
        animation: tl,
        trigger: ".contenedor__Animacion",
        start: "top top",
        end: "+=10%",
        pin: true,
        pinSpacing: false,
        
        markers: true,
        scrub: 1,

        
    })

    useGSAP(() => {
        tl2.from(".seccio_3", { xPercent : -100 })
        tl2.from(".seccio_4", { xPercent : 100 }, "-=2")
    }, {scope: container_x})

    ScrollTrigger.create({
        animation: tl2,
        trigger: ".contenedor__Animacion_2",
        start: "+=14%",
        end: "+=7%",
        pin: true, 
        pinSpacing: false,
        
        markers: true,
        scrub: 1,
    })

    useGSAP(() => {
        tl3.from(".seccio_5", { yPercent : -100 })
        tl3.from(".seccio_6", { yPercent : 100 }, "-=2")
    }, {scope: container_y})

    ScrollTrigger.create({
        animation: tl3,
        trigger: ".contenedor__Animacion_3",
        start: "+=28%",
        end: "+=5 ",
        pin: true, 
        
        markers: true,
        scrub: 1,
    })





  return (
    <>

           
       
        <div className=' w-full h-screen relative'>
            <main className="contenedor__Animacion w-full h-screen fixed overflow-hidden " >
                <section className="seccion seccio_1 w-full h-screen absolute flex justify-center items-center bg-black">
                    <h2 className="text-white">SECCION 1</h2>
                </section>
                <div ref={container_y_y} className='w-full h-screen  flex   ' >                    
                    <section className="seccion seccio_1_1 w-[50%] h-screen  flex justify-center items-center bg-orange-600">
                        <h2 className="text-white">SECCION 1</h2>
                    </section>
                    <section className="seccion seccio_2 w-[50%] h-screen  flex justify-center items-center bg-red-600">
                        <h2 className=" text-black">SECCION 2</h2>
                    </section>
                </div>

            </main>
            <main className="contenedor__Animacion_2 w-full h-screen fixed overflow-hidden ">                
                <div ref={container_x} className='w-full h-screen absolute flex overflow-hidden '>
                    <section className="seccion seccio_3 w-[50%] h-screen  flex justify-center items-center bg-violet-800">
                        <h2 className="">SECCION 3</h2>
                    </section>
                    <section className="seccion seccio_4 w-[50%] h-screen  flex justify-center items-center bg-emerald-800">
                        <h2 className="">SECCION 4</h2>
                    </section>
                </div>
            </main>
            <main className="contenedor__Animacion_3 w-full h-screen fixed overflow-hidden ">               
                <div ref={container_y} className='w-full h-screen absolute flex overflow-hidden '>
                    <section className="seccion seccio_5 w-[50%] h-screen  flex justify-center items-center bg-pink-400">
                        <h2 className="">SECCION 5</h2>
                    </section>
                    <section className="seccion seccio_6 w-[50%] h-screen  flex justify-center items-center bg-yellow-400">
                        <h2  className="texto_6">SECCION 6</h2>
                    </section>
                </div>
            </main>
        </div>
            <footer>
                <div className="inicio w-full h-[45vh] bg-blue-700 flex justify-center items-center">   
                    <h1>final</h1>
                </div>
            </footer>


    </>
  )
}

export default Scrolling