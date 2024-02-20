import React, { useState, useEffect } from 'react';




function Srolling_pueba() {

    const [mostrar, setMostrar] = useState(false);

    const [mostrarPrimeraAnimacion, setMostrarPrimeraAnimacion] = useState(false);
    const [mostrarSegundaAnimacion, setMostrarSegundaAnimacion] = useState(false);
  
    
    useEffect(() => {
        setTimeout(() => {
          setMostrar(true);
        }, 100); // Ajusta este valor según tu preferencia para el retraso de inicio de la animación

        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const targetPositionPrimeraAnimacion = document.getElementById('primeraAnimacion').offsetTop;
            const targetPositionSegundaAnimacion = document.getElementById('segundaAnimacion').offsetTop;
      
            if (!mostrarPrimeraAnimacion && scrollPosition > targetPositionPrimeraAnimacion) {
                setMostrarPrimeraAnimacion(true);
              }
        
              if (mostrarPrimeraAnimacion && !mostrarSegundaAnimacion && scrollPosition > targetPositionSegundaAnimacion) {
                setMostrarSegundaAnimacion(true);
              }
            };
      
            window.addEventListener('scroll', handleScroll);
      
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };


      }, [mostrarPrimeraAnimacion, mostrarSegundaAnimacion]);

  return (
    <>
        
          <div className='w-full h-[150vh] relative'>
            <div id="primeraAnimacion"  className=" fixed flex justify-center items-center h-screen ">
                {/* Aplica clases condicionales para animar el traslado */}
                <div className={` flex justify-center items-center w-full h-screen bg-blue-500  ${mostrarPrimeraAnimacion ? 'animate-traslado_Y' : ''}`}>
                    <h1 className="text-black text-2xl">Seccion 1</h1>
                </div>
                <div className={` flex justify-center items-center w-full h-screen bg-red-500  ${mostrarPrimeraAnimacion ? 'animate-traslado_Y_Y' : ''}`}>
                    <h1 className="text-black text-2xl">Seccion 2</h1>
                </div>
            </div>
            <div id="segundaAnimacion" className="fixed flex justify-center items-center h-screen w-full">
                
                <div className={` left-full flex justify-center items-center w-1/2 h-screen bg-lime-600  ${mostrarSegundaAnimacion ? 'animate-traslado_X' : ''}`}>
                    <h1 className="text-black text-2xl">Seccion 3</h1>
                </div>
                {/* <div className={`  flex justify-center items-center w-1/2 h-screen bg-violet-800  ${mostrarSegundaAnimacion ? 'animate-traslado_X_X' : ''}`}>
                    <h1 className="text-black text-2xl">Seccion 4</h1>
                </div> */}
            </div>
          </div>
        
            
                {/* <div className='h-[50vh] bg-slate-800 w-full'>

            </div> */}
        

    
    </>


  )
}

export default Srolling_pueba