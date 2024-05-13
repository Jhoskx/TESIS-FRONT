import React, { useState } from 'react';

const TablaConRegistros: React.FC = () => {
  // Estado para almacenar los registros
  const [registros, setRegistros] = useState<string[]>([]);

  // Estado para almacenar el valor del campo de entrada
  const [nuevoRegistro, setNuevoRegistro] = useState<string>('');

  // Manejar cambios en el campo de entrada
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNuevoRegistro(event.target.value);
  };

  // Manejar la adición de un nuevo registro
  const agregarRegistro = () => {
    if (nuevoRegistro.trim() !== '') {
      setRegistros([...registros, nuevoRegistro]);
      setNuevoRegistro('');
    }
  };

  return (
    <div className='backimage h-screen'>
      <h2 className='text-white text-center text-7xl font-Embed pt-16 pb-14'>Ingrese  todos los casos de uso A continuación</h2>
      <table className='mx-auto w-3/4 overflow-auto'>
        <thead>
          <tr>
            <th className='text-white font-Embed'>Lista de casos de uso</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {registros.map((registro, index) => (
            <tr className='text-white  font-Embed rounded-md  ' key={index}>
              <td className='text-white  border rounded-lg  '>{registro}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='mt-4 flex justify-center  '>
        <input  className='w-2/3 bg-transparent  border border-white focus:outline-none  rounded-lg placeholder:text-white  placeholder:text-center text-white '
          type="text"
          placeholder="Nuevo Registro"
          value={nuevoRegistro}
          onChange={handleInputChange}
        />
        <button className='text-white border rounded-md ml-2 h-7 w-7' onClick={agregarRegistro}>+</button>
      </div>
      <div className="flex justify-center mt-7 pb-8 ">
            <button type='submit' className=' pl-5 pr-5 pt-2 pb-2 font-Embed  text-white bg-gray-400 opacity-90 hover:bg-gradient-to-r from-cyan-500  to-cyan-200 h-10 w-44 border-b-gray-950 rounded-lg text-xs  py-2.5 text-center '>Send</button>
          </div>
    </div>
  );
};

export default TablaConRegistros;
