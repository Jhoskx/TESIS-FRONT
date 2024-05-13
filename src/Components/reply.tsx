import { format } from 'path'
import React from 'react'

const reply: React.FC = () => {
  return (
    <div className='backimage  '>

      <form className='flex h-screen items-center justify-center' action="">


        <div className='grid'>

        <a className='text-center font-Embed text-white text-7xl pt-10 mb-10  ' href="">El resultado de la estimacion es :</a>

        <textarea className="whitespace-pre-wrap block px-3 pb-3 h-96 mr-8 w-full text-lg text-white bg-transparent rounded-lg border-2 border-white appearance-none dark:text-white dark:focus:border-cyan-200 focus:outline-none focus:ring-0 focus:border-cyan-200  peer" />
           </div>
      </form>
    </div>
  )
}
export default reply

