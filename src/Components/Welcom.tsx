import React from 'react'
import logo from  '../images/joy.png'

const Welcom : React.FC = () => {
  return (
    <div className='h-screen bg-black'>
        <h1 className="mx-auto text-3xl text-white">Bienvenido a Joy</h1>
        <img src={logo} alt="Descripción de la imagen" />

        <button className='mx-auto text-white bg-gray-400 opacity-90 hover:bg-cyan-500  rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 '>Acceder</button>
    </div>
  )
}

export default Welcom
