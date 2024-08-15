import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const Description: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [description, setDescription] = useState<string>('');
  const responseData = location.state?.responseData;

  useEffect(() => {
    if (responseData) {
      setDescription(responseData.description);
    }
  }, [responseData]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };
 
  console.log(responseData)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (responseData ) {
      try {
        const response = await axios.put(`https://localhost:7211/api/Projects/${responseData}`, { description });
        console.log('Respuesta del servidor:', response.data);
        navigate('/TablaConRegistros');
      } catch (error) {
        console.error('Error al hacer la solicitud PUT:', error);
      }
    } else {
      console.error('ID del proyecto no está definido.');
    }
  };

  return (
    <div className='backimage'>
      <form className='flex h-screen items-center justify-center' onSubmit={handleSubmit}>
        <label className='text-center font-Embed text-white text-7xl pt-10 mb-10'>
          Ingrese la idea del proyecto de la forma más detallada posible
        </label>
        <textarea
          className="whitespace-pre-wrap block px-3 pb-3 h-96 mr-8 w-full text-lg text-white bg-transparent rounded-lg border-2 border-white appearance-none dark:text-white dark:focus:border-cyan-200 focus:outline-none focus:ring-0 focus:border-cyan-200 peer"
          value={description}
          onChange={handleChange}
        />
        <div className="mx-auto col-span-full mt-7 pb-8">
          <button
            type='submit'
            className='pl-5 pr-5 pt-2 pb-2 font-Embed text-white bg-gray-400 opacity-90 hover:bg-gradient-to-r from-cyan-500 to-cyan-200 h-10 w-44 border-b-gray-950 rounded-lg text-xs py-2.5 text-center'
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Description;
