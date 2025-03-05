import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const UseCases: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const responseData = location.state?.responseData;

  type Registro = {
    descripcion: string;
    complejidad: string;
  };

 console.log(responseData);
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [NuevaDescripcion, setNuevaDescripcion] = useState<string>('');
  const [NuevaComplejidad, setNuevaComplejidad] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, field: 'descripcion' | 'complejidad') => {
    if (field === 'descripcion') {
      setNuevaDescripcion(event.target.value);
    } else if (field === 'complejidad') {
      setNuevaComplejidad(event.target.value);
    }
  };
  
  const agregarRegistro = () => {
    if (NuevaDescripcion.trim() !== '' && NuevaComplejidad.trim() !== '') {
      // Agrega un objeto con las propiedades descripción y complejidad
      setRegistros([...registros, { descripcion: NuevaDescripcion, complejidad: NuevaComplejidad }]);
      setNuevaDescripcion('');
      setNuevaComplejidad('');
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (responseData) {
      try { 
        // Crear el array de objetos en el formato correcto
        const UseCaseRequests = registros.map(registro => ({
          description: registro.descripcion,
          complexityId:registro.complejidad,
          projectId: responseData // Suponiendo que `responseData` es el ID del proyecto
        }));
        
        // Enviar la lista `resourceRequests` al servidor
        const response = await axios.post(`https://localhost:7211/api/UseCases`, { UseCaseRequests });
        console.log('Respuesta del servidor:', response.data);
  
        // Redirigir a otra página pasando la respuesta del servidor
        navigate('/ListOfResources  ', { state: { responseData: response.data } });
      } catch (error) {
        console.error('Error al hacer la solicitud POST:', error);
      }
    } else {
      console.error('ID del proyecto no está definido.');
    }
  };
  


  return (
    <div className='backimage h-screen'>
      <h2 className='text-white text-center text-7xl font-Embed pt-16 pb-14'>Ingrese todos los casos de uso A continuación</h2>
      <table className='mx-auto w-3/4 overflow-auto'>
        <thead>
          <tr>
            <th className='text-white font-Embed'>Lista de casos de uso</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {registros.map((registro, index) => (
            <tr className='text-white font-Embed rounded-md' key={index}>
       <td className='text-white border rounded-lg'>{registro.descripcion}</td>
       <td className='text-white border rounded-lg'>{registro.complejidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='mt-4 flex justify-center'>
      <input
    className='w-2/5 bg-transparent border border-white focus:outline-none rounded-lg placeholder:text-white placeholder:text-center text-white'
    type="text"
    placeholder="Descripcion"
    value={NuevaDescripcion}
    onChange={(e) => handleInputChange(e, 'descripcion')} // Cambia la descripción
  />  
  
<select
  className='w-2/5 bg-transparent border border-white focus:outline-none rounded-lg text-white bg-black'
  value={NuevaComplejidad}
  onChange={(e) => handleInputChange(e, 'complejidad')} // Cambia la complejidad
>
  <option value={0} className='bg-black'>Complejidad</option>
  <option value={1} className='bg-black'>Simple</option>
  <option value={2} className='bg-black'>Promedio</option>
  <option value={3} className='bg-black'>Complejo</option>
</select>

        <button className='text-white border rounded-md ml-2 h-7 w-7' onClick={agregarRegistro}>+</button>
      </div>
      <div className="flex justify-center mt-7 pb-8">
        <button onClick={handleSubmit} className='pl-5 pr-5 pt-2 pb-2 font-Embed text-white bg-gray-400 opacity-90 hover:bg-gradient-to-r from-cyan-500 to-cyan-200 h-10 w-44 border-b-gray-950 rounded-lg text-xs text-center'>
          Send
        </button>
      </div>
    </div>
  );
};

export default UseCases;
