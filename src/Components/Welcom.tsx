import React from 'react'
import logo from  '../images/joy.png'

const Welcom : React.FC = () => {
  return (
    <div className='h-screen bg-black'>
         
          
        <h1 className="font-Embed text-center text-8xl text-white  pt-8  eba "> Bienvenido a joy</h1>
       
        <div  className ="flex justify-center  p-0">
        <img src={logo} alt="Logo" className='' />
        </div>  

        <div className="flex justify-center p-0 ">
        <button className=' pl-10 pr-10 pt-4 pb-4 font-Embed  text-white bg-gray-400 opacity-90 hover:bg-cyan-500  rounded-lg text-xl  py-2.5 text-center '>Acceder</button>
        </div>
    </div>
  )
}

export default Welcom
