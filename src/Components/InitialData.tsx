import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Description from './Description';

interface FormData {
  name: string;
  area: string;
  methodologyId: number | undefined;
  responsiblePosition: string;
  developmentType: string;
  typeEstimationId: number | undefined;
}

const InitialData: React.FC = () => {
  const navigate = useNavigate();
  const [responseData, setResponseData] = useState<any>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    area: '',
    methodologyId: undefined,
    responsiblePosition: '',
    developmentType: '',
    typeEstimationId: undefined
  });
  const [response, setResponse] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://localhost:7211/api/Projects', formData);
      setResponseData(res.data);
      navigate('/Description'); // Redirigir después de una respuesta exitosa
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error message: ', error.message);
        // Handle error accordingly
      } else {
        console.error('Unexpected error: ', error);
      }
    }
  };

  return (
    <div className='backimage '>
      <div className="absolute inset-40 rounded-sm bg-trn bg-opacity-60 backdrop-filter backdrop-blur-sm"></div>
      <div className="blur-xl z-20 w-1/2 h-1/2"></div>
      <form className='flex h-screen items-center justify-center' onSubmit={handleSubmit}>
        <div className='mx-auto w-3/4 grid grid-cols-3 z-10'>
          <h1 className='text-center font-Embed text-white text-7xl pt-10 mb-10 col-span-full'>Complete la siguiente información</h1>

          <div className="relative ml-2 mt-3 mb-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="inputStyle peer"
              placeholder=" "
            />
            <label htmlFor="NombreProyecto" className="inputLabel">Nombre del proyecto</label>
          </div>

          <div className="relative ml-2 mt-3 mb-3">
            <input
              type="text"
              name="area"
              value={formData.area}
              onChange={handleChange}
              className="inputStyle peer"
              placeholder=" "
            />
            <label htmlFor="AreaParaDesarollar" className="inputLabel">Área para la que se Desarrolla</label>
          </div>

          <div className="relative ml-2 mt-3 mb-3">
            <select
              name="methodologyId"
              value={formData.methodologyId}
              onChange={handleChange}
              className="SelecStyle peer"
            >
              <option value="">Selecciona una opción</option>
              <option value="2">Uno</option>
            </select>
            <label htmlFor="DevelopmentType" className="inputLabel">Tipo de metodología</label>
          </div>

          <div className="relative ml-2 mt-5 mb-3">
            <input
              type="text"
              name="responsiblePosition"
              value={formData.responsiblePosition}
              onChange={handleChange}
              className="inputStyle peer"
              placeholder=" "
            />
            <label htmlFor="cargoResponsable" className="inputLabel">Cargo de la persona Responsable del proyecto</label>
          </div>

          <div className="relative ml-2 mt-5 mb-3">
            <input
              type="text"
              name="developmentType"
              value={formData.developmentType}
              onChange={handleChange}
              className="inputStyle peer"
              placeholder=" "
            />
            <label htmlFor="TipoDesarollo" className="inputLabel">Tipo de Desarrollo</label>
          </div>

          <div className="relative ml-2 mt-5 mb-3">
            <select
              name="typeEstimationId"
              value={formData.typeEstimationId}
              onChange={handleChange}
              className="SelecStyle peer"
            >
              <option value="">Selecciona una opción</option>
              <option value="1">Algoritmo</option>
              <option value="2">Opinión Experto</option>
            </select>
            <label htmlFor="DevelopmentType" className="inputLabel">Tipo de estimación</label>
          </div>

          <div className="mx-auto col-span-full mt-7 pb-8">
            <button type='submit' className='pl-5 pr-5 pt-2 pb-2 font-Embed text-white bg-gray-400 opacity-90 hover:bg-gradient-to-r from-cyan-500 to-cyan-200 h-10 w-44 border-b-gray-950 rounded-lg text-xs py-2.5 text-center'>
              Send
            </button>
          </div>
        </div>
      </form>
      {response && <div>Response: {response} <Description responseData={responseData} /></div>}
    </div>
  );
};

export default InitialData;
