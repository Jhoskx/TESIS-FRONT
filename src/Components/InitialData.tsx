import { format } from 'path'
import React from 'react'

const InitialData: React.FC = () => {
  return (
    <div className='backimage '>
      <div className="absolute inset-40 rounded-sm  bg-trn bg-opacity-60 backdrop-filter backdrop-blur-sm"></div>
      <div className=" blur-xl z-20 w-1/2 h-1/2"></div>
      <form className='flex h-screen items-center justify-center' action="">

        <div className='  mx-auto w-3/4 grid grid-cols-3 z-10' >
          <h1 className='text-center font-Embed text-white text-7xl pt-10 mb-10  col-span-full'> complete la siguiente información</h1>

          <div className="relative ml-2 mt-3 mb-3">
            <input type="text" id="NombreProyecto" className="block px-3 pb-3  w-full text-sm text-white bg-transparent rounded-lg border-2 border-white appearance-none dark:text-white dark:focus:border-cyan-200 focus:outline-none focus:ring-0 focus:border-cyan-200  peer" placeholder=" " />
            <label htmlFor="NombreProyecto" className="absolute ml-2 text-sm text-white bg-transparent duration-300 transform -translate-y-4 scale-75 z-10 origin-[0] px-2 peer-focus:px-2  peer-focus:bg-black peer-focus:text-cyan-200 peer-focus:dark:text-cyan-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto ">Nonbre del proyecto</label>
          </div>

          <div className="relative ml-2 mt-3 mb-3">
            <input type="text" id="AreaParaDesarollar" className="block px-2.5 pb-2.5  w-full text-sm text-white bg-transparent rounded-lg border-2 border-white appearance-none dark:text-white dark:focus:border-cyan-200 focus:outline-none focus:ring-0 focus:border-cyan-200  peer" placeholder=" " />
            <label htmlFor="AreaParaDesarollar" className="absolute ml-2 text-sm text-white bg-transparent duration-300 transform -translate-y-4 scale-75 z-10 origin-[0] px-2 peer-focus:px-2  peer-focus:bg-black peer-focus:text-cyan-200 peer-focus:dark:text-cyan-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto ">Area para la que se Desarolla</label>
          </div>

          <div className="relative ml-2 mt-3 mb-3  ">
            <input type="text" id="Metodologiadesarollo" className="block px-2.5 pb-2.5  w-full text-sm text-white bg-transparent rounded-lg border-2 border-white appearance-none dark:text-white dark:focus:border-cyan-200 focus:outline-none focus:ring-0 focus:border-cyan-200  peer" placeholder=" " />
            <label htmlFor="Metodologiadesarollo" className="absolute ml-2 text-sm text-white bg-transparent duration-300 transform -translate-y-4 scale-75 z-10 origin-[0] px-2 peer-focus:px-2  peer-focus:bg-black peer-focus:text-cyan-200 peer-focus:dark:text-cyan-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto ">Metodologia de desarollo</label>
          </div>

          <div className="relative ml-2  mt-5 mb-3 ">
            <input type="text" id="cargoResponsable" className="block px-2.5 pb-2.5  w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-cyan-200 focus:outline-none focus:ring-0 focus:border-cyan-200 peer" placeholder=" " />
            <label htmlFor="cargoResponsable" className="absolute ml-2 text-sm text-white bg-transparent duration-300 transform -translate-y-4 scale-75 z-10 origin-[0] px-2 peer-focus:px-2  peer-focus:bg-black peer-focus:text-cyan-200 peer-focus:dark:text-cyan-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto ">cargo de la persona Responsable del proyecto</label>
          </div>

          <div className="relative ml-2  mt-5 mb-3 ">
            <input type="text" id="TipoDesarollo" className="block px-2.5 pb-2.5 m-0  w-full text-sm text-white bg-transparent rounded-lg border-2 border-white appearance-none dark:text-white dark:focus:border-cyan-200 focus:outline-none focus:ring-0 focus:border-cyan-200  peer" placeholder=" " />
            <label htmlFor="TipoDesarollo" className="absolute mb-2 ml-2 text-sm text-white bg-transparent duration-300 transform -translate-y-4 scale-75 z-10 origin-[0] px-2 peer-focus:px-2  peer-focus:bg-black peer-focus:text-cyan-200 peer-focus:dark:text-cyan-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto ">Tipo de Desarollo</label>
          </div>

          {/* <div className="relative ml-2  mt-5 mb-3 ">
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
            <select id="countries" className="bg-transparent border border-white text-gray-900 text-sm rounded-lg focus:ring-cyan-200 focus:border-cyan-200 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-200 dark:focus:border-cyan-200">
              <option selected></option>
              <option value="US"></option>
            </select>
          </div> */}

          <div className=" mx-auto col-span-full mt-7 pb-8 ">
            <button type='submit' className=' pl-5 pr-5 pt-2 pb-2 font-Embed  text-white bg-gray-400 opacity-90 hover:bg-gradient-to-r from-cyan-500  to-cyan-200 h-10 w-44 border-b-gray-950 rounded-lg text-xs  py-2.5 text-center '>Send</button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default InitialData

