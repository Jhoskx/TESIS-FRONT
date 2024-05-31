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

          <div className="relative ml-2  mt-5 mb-3 ">
            <select
              className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
              <option value="brazil">Brazil</option>
              <option value="bucharest">Bucharest</option>
            </select>
            <label
              className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Select a City
            </label>
          </div>

          <div className=" mx-auto col-span-full mt-7 pb-8 ">
            <button type='submit' className=' pl-5 pr-5 pt-2 pb-2 font-Embed  text-white bg-gray-400 opacity-90 hover:bg-gradient-to-r from-cyan-500  to-cyan-200 h-10 w-44 border-b-gray-950 rounded-lg text-xs  py-2.5 text-center '>Send</button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default InitialData

