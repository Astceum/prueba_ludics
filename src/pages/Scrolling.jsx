import { useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Link } from 'react-router-dom';

import ScrollDetector from '../components/ScrollDetector.jsx'


gsap.registerPlugin(ScrollTrigger)



function Scrolling() {
    
    

    const tl = gsap.timeline()
    const tl2 = gsap.timeline()
    const tl3 = gsap.timeline()

    const container_x = useRef()
    const container_y = useRef()
    const container_y_y = useRef()

   
    
    gsap.defaults({ ease: "expo.inOut", duration: 2})

    



    useGSAP(() => {
        tl.from(".seccio_2", { yPercent : -200,})
        tl.from(".seccio_1_1", { yPercent : 200 }, "-=2")
    }, {scope: container_y_y})


    ScrollTrigger.create({
        animation: tl,
        trigger: ".contenedor__Animacion",
        start: "top top",
        end: "+=2%",
        
        
        markers: true,
        scrub: 4,

        
    })

    useGSAP(() => {
        tl2.from(".seccio_3", { xPercent : -100 })
        tl2.from(".seccio_4", { xPercent : 100 }, "-=2")
    }, {scope: container_x})

    ScrollTrigger.create({
        animation: tl2,
        trigger: ".contenedor__Animacion_2",
        start: "+=13%",
        end: "+=2",
        
        
        markers: true,
        scrub: 4,
    })


    

    useGSAP(() => {

        
        tl3.from(".seccio_5", { yPercent : -200, className: " invisible" })
        tl3.from(".seccio_6", { yPercent : 200, className: " invisible" }, "-=2")
    }, {scope: container_y})

    ScrollTrigger.create({
        animation: tl3,
        trigger: ".contenedor__Animacion_3",
        start: "+=26%",
        end: "+=5 ",
         
        
        markers: true,
        scrub: 4,
    })


    


  return (
    <>

           
       
        <div className=' w-full h-screen relative '>            
            <main className="contenedor__Animacion w-full h-screen fixed overflow-hidden justify-center items-center " >
                <section className="seccion seccio_1 w-full h-screen absolute flex justify-center items-center bg-black">
                    <h2 className="text-white">SECCION 1</h2>
                </section>
                <div ref={container_y_y} className='w-full h-screen   flex justify-center items-center' >                    
                    <section className="seccion seccio_1_1 w-1/2 h-screen  flex justify-center items-center bg-orange-600">
                        <h2 className="text-black">SECCION 1</h2>
                    </section>
                    <div className="seccion seccio_2 w-1/2 h-screen flex-col justify-center items-center" >
                    
                        <section className=" w-full h-1/2  flex justify-center items-center bg-fuchsia-900">
                            
                            <Link to="/portafolio" className="bg-[#3fa09b]  hover:bg-[#177571] px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:gb-indigo-400 z-auto" >Enviar</Link>
                            
                            <h2 className=" text-black ">SECCION 2</h2>
                        </section>
                                               
                        <section className=" w-full h-1/2  flex justify-center items-center bg-lime-900">
                            <h2 className=" text-black">SECCION 2</h2>
                        </section>
                    </div>
                </div>

            </main>
            <main className="contenedor__Animacion_2 w-full h-screen fixed overflow-hidden ">                
                <div ref={container_x} className='w-full h-screen  flex overflow-hidden justify-center items-center '>
                
                    <section className="seccion seccio_3 w-1/2 h-screen  flex justify-center items-center bg-violet-800">
                    <Link to="/portafolio" className="bg-[#3fa09b]  hover:bg-[#177571] px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:gb-indigo-400 z-auto" >Enviar</Link>
                        <h2 className="">SECCION 3</h2>
                    </section>
                    <section className="seccion seccio_4 w-1/2 h-screen  flex justify-center items-center bg-emerald-800">
                        <h2 className="">SECCION 4</h2>
                    </section>
                </div>
            </main>
            <main className="contenedor__Animacion_3 w-full invisible h-screen  fixed overflow-hidden">               
                <div ref={container_y} className='w-full h-screen  flex overflow-hidden justify-center items-center '>
                    <section className="seccion seccio_5 w-1/2 h-screen flex justify-center items-center bg-pink-400">
                    <Link to="/portafolio" className="bg-[#3fa09b]  hover:bg-[#177571] px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:gb-indigo-400 z-10" >Enviar</Link>
                        <h2 className="">SECCION 5</h2>
                    </section>
                    <section className="seccion seccio_6 w-1/2 h-screen  flex justify-center items-center bg-yellow-400">
                    <Link to="/portafolio" className="bg-[#3fa09b]  hover:bg-[#177571] px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:gb-indigo-400 z-10" >Enviar</Link>
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