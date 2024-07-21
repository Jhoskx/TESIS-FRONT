import { format } from 'path'
import React from 'react'
import { useNavigate } from 'react-router-dom';

interface DescriptionProps {
  responseData: any|null; // Ajusta 'any' según el tipo real de responseData
}


const Description: React.FC<DescriptionProps> = ({ responseData }) => {
  const history = useNavigate ();
  
  const handleClick = () => {
    // Redirigir a otra página usando el método push
    history('/TablaConRegistros');
  };
  return (
    <div className='backimage '>

      <form className='flex h-screen items-center justify-center' action="">

        <a className='text-center font-Embed text-white text-7xl pt-10 mb-10  ' href="">ingrese la idea del proyecyo  de la forma  mas detalla posible</a>

        <textarea className="whitespace-pre-wrap block px-3 pb-3 h-96 mr-8 w-full text-lg text-white bg-transparent rounded-lg border-2 border-white appearance-none dark:text-white dark:focus:border-cyan-200 focus:outline-none focus:ring-0 focus:border-cyan-200  peer" />
      </form>
      <div className=" mx-auto col-span-full mt-7 pb-8 ">
            <button onClick={handleClick} type='submit' className=' pl-5 pr-5 pt-2 pb-2 font-Embed  text-white bg-gray-400 opacity-90 hover:bg-gradient-to-r from-cyan-500  to-cyan-200 h-10 w-44 border-b-gray-950 rounded-lg text-xs  py-2.5 text-center '>Send</button>
          </div>
    </div>
  )
}
export default Description