import { useState } from 'react'
import YouTubePlayer from 'react-player/youtube';

function ModalYT() {

    

    const [isopen, setIsopen] = useState(false);

  return (
    <>
        <button className=' bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold m-5' onClick={()=>setIsopen(true)}>
            Ver Video
        </button>
        {
            isopen && (
                <div className=' fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
                    <div className=' bg-slate-400 text-white p-5 rounded flex flex-col justify-center items-center gap-5'>
                        <h1 className='text-2xl font-bold '></h1>
                        <div>
                            <YouTubePlayer
                                url="https://www.youtube.com/watch?v=ERNlatffw6E"
                                controls
                                playing
                                volume={ .3 }
                                loop
                            />
                            
                            <button type='submit' className='px-2 py-2 mx-2 bg-red-500 hover:bg-red-600 rounded-md' onClick={()=>setIsopen(false)}>Cerrar</button>
                        </div>
                    </div>
                </div>
            )
        }
        
    </>
  )
}

export default ModalYT