import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Reply: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const responseData = location.state?.responseData;

  const [data, setData] = useState<string>('');  // Estado para guardar la respuesta
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
console.log (responseData);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://localhost:7211/api/Result`, {
          params: { ProjectId: responseData }, 
        });
        setData(response.data);
      } catch (err) {
        setError('Error al obtener los datos vuelva a Intentarlo  Mas Tarde');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    if (responseData) { 
      fetchData();
    } else {
      setLoading(false);
    }
  }, [responseData]);

  return (
    <div className="backimage">
      <form className="flex h-screen items-center justify-center">
        <div className="grid">
          <h1 className="text-center font-Embed text-white text-7xl pt-10 mb-10">
            El resultado de la estimación es:
          </h1>

          {loading ? (
            <p className="text-white text-center">Cargando...</p>
          ) : error ? (
            <p className="text-red-500 text-center">{error}</p>
          ) : (
            <textarea
              className="whitespace-pre-wrap block px-3 pb-3 h-96 mr-8 w-full text-lg text-white bg-transparent rounded-lg border-2 border-white appearance-none dark:text-white dark:focus:border-cyan-200 focus:outline-none focus:ring-0 focus:border-cyan-200 peer"
              value={data}
              readOnly
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default Reply;
