import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const ListOfResources : React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const responseData = location.state?.responseData;

  type Registro = {
    descripcion: string;
    horas: number;
  };

  const [registros, setRegistros] = useState<Registro []>([]);
  const [NuevoRecurso, setNuevoRecurso] = useState<string>('');
  const [Horas, setHoras] = useState<number>(0);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: 'descripcion' | 'horas') => {
    if (field === 'descripcion') {
      setNuevoRecurso(event.target.value);
    } else if (field === 'horas') {
      setHoras(Number(event.target.value));
    }
  };


  

  const agregarRegistro = () => {
    if (NuevoRecurso.trim() !== '') {
      setRegistros([...registros, {descripcion:NuevoRecurso,horas:Horas}]);
      setNuevoRecurso('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();
    if (responseData) 
      {
        try {
console.log("s"+ responseData)
          const resourceRequests = registros.map(registro => ({
            description: registro,
            projectId: responseData // Suponiendo que `responseData` es el ID del proyecto
          }));

          const response = await axios.post(`https://localhost:7211/api/Resources`, { resourceRequests });
          console.log('Respuesta del servidor:', response.data);
  
          // Redirigir a otra página pasando la respuesta del servidor
          navigate('/ListOfResources', { state: { responseDescription: response.data } });

        }
        catch (error) {
          console.error('Error al hacer la solicitud POST:', error);
        }

      }else {
        console.error('ID del proyecto no está definido :');
      }

    
  };

  return (
    <div className='backimage h-screen'>
      <h2 className='text-white text-center text-7xl font-Embed pt-16 pb-14'>
        Ingrese en forma de lista los recursos que serán asignados al proyecto
      </h2>
      <table className='mx-auto w-3/4 overflow-auto'>
        <thead>
          <tr>
            <th className='text-white font-Embed'>Lista de Recursos</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {registros.map((registro, index) => (
            <tr className='text-white font-Embed rounded-md' key={index}>
              <td className='text-white border rounded-lg'>{registro.descripcion}</td>
              <td className='text-white border rounded-lg'>{registro.horas}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='mt-4 flex justify-center'>
        <input
          className='w-2/3 bg-transparent border border-white focus:outline-none rounded-lg placeholder:text-white placeholder:text-center text-white'
          type="text"
          placeholder="Nuevo Registro"
          value={NuevoRecurso}
          onChange={(e)=>handleInputChange(e,'descripcion')}
        />
        <input
          className='w-2/3 bg-transparent border border-white focus:outline-none rounded-lg placeholder:text-white placeholder:text-center text-white'
          type="text"
          placeholder="Nuevo Registro"
          value={Horas}
          onChange={(e)=>handleInputChange(e,'horas')}
        />
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

export default ListOfResources;
