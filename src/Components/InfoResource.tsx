import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

interface DeveloperLevel {
    description: string;
    estimatedTimePerTask: string;
    expectedImpact: string;
    abilityToEstimateEffort: string;
  }
  

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);

    const [levels, setLevels] = useState<DeveloperLevel[]>([]);

    useEffect(() => {
      const fetchLevels = async () => {
        try {
          const response = await axios.get<DeveloperLevel[]>('https://localhost:7211/api/Master/DetailResource');
          console.log(response);
          setLevels(response.data);
        } catch (error) {
          console.error('Error al obtener los niveles de desarrollador:', error);
        }
      };
  
      fetchLevels();
    }, []);
  

    return (
        <div className="relative min-h-screen bg-gray-100">
            {/* Botón global */}
            <div className="fixed top-4 right-4 z-50">
                <button
                    onClick={toggleModal}
                    //   className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-bl transition"
                    className='pl-5 pr-5 pt-2 pb-2 font-Embed text-white bg-gray-400 opacity-90
        hover:bg-gradient-to-r from-cyan-500 to-cyan-200 h-10 w-44
        border-b-gray-950 rounded-lg  py-2.5 text-center text-lg'
                >
                    Abrir Modal
                </button>
            </div>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40 ">
                    <div className="bg-black p-6 rounded-xl shadow-lg w-full max-w-7xl opacity-100">
                        <div className="p-6">
                            <h1 className="text-3xl font-bold mb-6 text-center">Escalera de Niveles de Desarrollador</h1>
                            <div className="overflow-x-auto">
                            <table className="min-w-full table-auto border border-gray-300 rounded-lg shadow-md overflow-hidden">
  <thead className="bg-gray-500 text-white">
    <tr>
      <th className="border px-6 py-3 text-left">Nivel</th>
      <th className="border px-6 py-3 text-left">Tiempo estimado por tarea (hrs)</th>
      <th className="border px-6 py-3 text-left">Impacto esperado</th>
      <th className="border px-6 py-3 text-left">Capacidad para estimar esfuerzo</th>
    </tr>
  </thead>
  <tbody className="bg-white text-gray-800">
    {levels.map((level, index) => (
      <tr key={index} className="hover:bg-gray-100">
        <td className="border px-6 py-4 font-semibold">{level.description}</td>
        <td className="border px-6 py-4">{level.estimatedTimePerTask}</td>
        <td className="border px-6 py-4">{level.expectedImpact}</td>
        <td className="border px-6 py-4">{level.abilityToEstimateEffort}</td>
      </tr>
    ))}
  </tbody>
</table>
                            </div>
                        </div>
                        <div className="text-right">
                            <button
                                onClick={toggleModal}
                                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Rutas aquí */}
            <Outlet />
        </div>
    );
};

export default Layout;
