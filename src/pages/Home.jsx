import Mesa_de_trabajo_4 from "../assets/Mesa_de_trabajo_4.png"
import React, { useState } from 'react';
import { CiCircleChevDown } from "react-icons/ci";


function Home() {

  const [navpage, setNavpage] = useState(false);
  const handleNav = () => {
    setNavpage(!navpage);
    
  };

  return (
    
      <div className="h-screen w-full snap-y snap-mandatory" >
        <div className=" snap-start">          
        <img className="top-0 left-0 w-full h-screen object-cover " src={Mesa_de_trabajo_4}/>
        </div>
        {/* <div className="absolute top-0 w-full h-full">

        </div> */}
          <div className="flex justify-center snap-start ">
          
            <div className=" bg-red-600 h-screen w-[50%] animate-slide-in-left ">
                      
            </div>
            <div className="h-screen w-[50%] animate-slide-in-right">
              <div className=" bg-lime-600 h-[50%]">

              </div>
              <div className=" bg-violet-700 h-[50%]">

              </div>
            </div>
          </div>

      </div>
    
  )
}

export default Home