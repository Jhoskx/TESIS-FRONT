import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface FormData {
  name: string;
  area: string;
  methodologyId: number | undefined;
  responsiblePosition: string;
  developmentType: string;
  typeEstimationId: number | undefined;
  expertOpinion?: string;
}

const InitialData: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    area: '',
    methodologyId: undefined,
    responsiblePosition: '',
    developmentType: '',
    typeEstimationId: undefined,
    expertOpinion: '',
  });

  const [showExpertOpinionInput, setShowExpertOpinionInput] = useState(false);

  const [showLabel, setShowLabel,] = useState(false);
  const [showLabelmethodology, setShowLabelmethodology,] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Verifica si el campo cambiado es "typeEstimationId"
   
  if (name === "typeEstimationId") {
    setShowLabel(value !== ""); // Muestra el label solo si el value no es vacío
    setShowExpertOpinionInput(value === "2");
  }

  if (name === "methodologyId") {
    setShowLabelmethodology(value !== ""); // Muestra el label solo si el value no es vacío
  }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://localhost:7211/api/Projects', formData);
      console.log('Respuesta del servidor:', res.data);
      if (res.data) {
        navigate('/Description', { state: { responseData: res.data } });
      } else {
        console.error('La respuesta del servidor no contiene datos.');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error message: ', error.message);
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
          <h1 className='text-center font-Embed text-white text-7xl pt-10 mb-10 col-span-full'>
            Complete la siguiente información
          </h1>

          <div className="relative ml-2 mt-3 mb-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="inputStyle peer"
              placeholder=" "
            />
            <label htmlFor="name" className="inputLabel">Nombre del proyecto</label>
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
            <label htmlFor="area" className="inputLabel">Área para la que se desarrolla</label>
          </div>

          <div className="relative ml-2 mt-3 mb-3">
            <select
              name="methodologyId"
              value={formData.methodologyId ?? ""}
              onChange={handleChange}
              className="SelecStyle peer"
            >
              <option value="" disabled>Metodologia de Desarollo</option>
              <option value="1">Metodología Uno</option>
              <option value="2">Metodología Dos</option>
            </select>


            {showLabelmethodology && (
              <label htmlFor="methodologyId" className="inputLabel">Metodologia de Desarollo</label>
              // <label
              //   htmlFor="typeEstimationId"
              //   // className="absolute left-2 top-0 text-sm text-blue-600 transition-all"
              //   className="inputLabel"
              // >
              //   Tipo de Estimación
              // </label>
            )}
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
            <label htmlFor="responsiblePosition" className="inputLabel">
              Cargo del responsable del proyecto
            </label>
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
            <label htmlFor="developmentType" className="inputLabel">Tipo de Desarrollo</label>
          </div>

          <div className="relative ml-2 mt-5 mb-3">
            <select
              name="typeEstimationId"
              value={formData.typeEstimationId ?? ""}
              onChange={handleChange}
              className="SelecStyle peer"
            >
              <option value="" disabled>Tipo de Estimación</option>
              <option value="1">Algoritmo</option>
              <option value="2">Opinión Experto</option>
            </select>
            {showLabel && (
              <label
                htmlFor="typeEstimationId"
                // className="absolute left-2 top-0 text-sm text-blue-600 transition-all"
                className="inputLabel"
              >
                Tipo de Estimación
              </label>
            )}
          </div>

          {showExpertOpinionInput && (
            <div className="relative ml-2 mt-3 mb-3">
              <input
                type="text"
                name="expertOpinion"
                value={formData.expertOpinion || ""}
                onChange={handleChange}
                className="inputStyle peer"
                placeholder=" "
              />
              <label htmlFor="expertOpinion" className="inputLabel">
                Email
              </label>
            </div>
          )}

          <div className="mx-auto col-span-full mt-7 pb-8">
            <button
              type='submit'
              className='pl-5 pr-5 pt-2 pb-2 font-Embed text-white bg-gray-400 opacity-90
                         hover:bg-gradient-to-r from-cyan-500 to-cyan-200 h-10 w-44
                         border-b-gray-950 rounded-lg text-xs py-2.5 text-center'
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InitialData;
