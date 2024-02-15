import React, { useEffect, useRef } from 'react';
import { ScrollTrigger, gsap } from 'gsap/all'; // Importa ScrollTrigger y gsap

const PinningComponent = () => {
  const pinningRef = useRef(null);

  useEffect(() => {
    // Registra ScrollTrigger para que funcione con gsap
    gsap.registerPlugin(ScrollTrigger);

    // Aplica el efecto de "pinning"
    ScrollTrigger.create({
      trigger: pinningRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: true,
      markers: true // Opcional: muestra marcadores para visualizar el pinning
    });

  }, []);

  return (
    <div className="pinning-container h-[110vh] bg-slate-500" ref={pinningRef}>
      {/* Contenido que será pinneado */}
      <div className="pinning-content">
        Este contenido será pinneado mientras se desplaza.
      </div>
    </div>
  );
};

export default PinningComponent;