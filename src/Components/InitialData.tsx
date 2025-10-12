import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface FormData {
  name: string;
  areaId: number | undefined;
  methodologyId: number | undefined;
  chargeId: number | undefined;
  developmentTypeId: number | undefined;
  typeEstimationId: number | undefined;
  expertOpinion?: string;
  email?: string;
}




interface DevelopmentType {
  id: number;
  description: string;
}

interface Area {
  id: number;
  description: string;
}

interface Charge {
  id: number;
  description: string;
}

interface Methodology {
  id: number;
  description: string;
}

const InitialData: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    areaId: undefined,
    methodologyId: undefined,
    chargeId: undefined,
    developmentTypeId: undefined,
    typeEstimationId: undefined,
    expertOpinion: '',
    email: '',
  });

  //#region 
  // const [developmentTypes, setDevelopmentTypes] = useState([]);
  const [developmentTypes, setDevelopmentTypes] = useState<DevelopmentType[]>([]);

  const [areas, setAreas] = useState<Area[]>([]);
  const [Charge, setCharges] = useState<Charge[]>([]);
  const [Methodology, setMethodology] = useState<Methodology[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Llamando a la API...");

        const [AreaDev, DevMeth, ChargeRes, DevType] = await Promise.all([
          axios.get("https://localhost:7211/api/Master/Areas"),
          axios.get("https://localhost:7211/api/Master/DevelopmentMethodology"),
          axios.get("https://localhost:7211/api/Master/PositionResponsible"),
          axios.get("https://localhost:7211/api/Master/DevelopmentType"),
        ]);

        console.log("Datos obtenidos - Development Types:", AreaDev.data);

        if (Array.isArray(AreaDev.data) && AreaDev.data.length > 0) {
          setAreas(AreaDev.data);
          setMethodology(DevMeth.data);
          setCharges(ChargeRes.data);
          setDevelopmentTypes(DevType.data);

          console.log(AreaDev.data);
          console.log(DevMeth.data);
          console.log(ChargeRes.data);
          console.log(DevType.data);

        } else {
          console.warn("La API de Development Types devolvió un array vacío o no válido.");
        }


      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  function sumarDiasHabiles(fecha: Date, diasHabiles: number): Date {
    let resultado = new Date(fecha);
    let contador = 0;

    while (contador < diasHabiles) {
      resultado.setDate(resultado.getDate() + 1);
      const dia = resultado.getDay();
      // 0: domingo, 6: sábado
      if (dia !== 0 && dia !== 6) {
        contador++;
      }
    }

    return resultado;
  }
  const handleBlur = (email: string) => {
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    console.log("onBlur ejecutado, email válido?", isValidEmail);
    const fechaLimite = sumarDiasHabiles(new Date(), 15);
    setPlazoEstimado(fechaLimite); // 👈 guardamos la fecha en estado
    setShowModal(true);

    if (isValidEmail) {
      setEmailError(null); // limpia el error
      setShowModal(true);  // muestra modal
    } else {
      setEmailError("El email ingresado no es válido."); // muestra error
      setShowModal(false); // evita mostrar el modal si es inválido
    }
  };



  // 🔹 useEffect para ver cuando developmentTypes realmente cambie
  useEffect(() => {
    console.log("Estado actualizado:", developmentTypes);
  }, [developmentTypes]);
  //#endregion
  // useEffect(() => {
  //   if (formData.email?.trim() !== "") {
  //     setShowModal(true);
  //   }
  // }, [formData.email]);

  const [showExpertOpinionInput, setShowExpertOpinionInput] = useState(false);

  const [showLabel, setShowLabel,] = useState(false);
  const [showLabelmethodology, setShowLabelmethodology,] = useState(false);
  const [showLabelArea, setShowLabelArea,] = useState(false);
  const [showLabelCharge, setShowLabelCharge,] = useState(false);
  const [showLabelDevType, setShowLabelDevYpe,] = useState(false);
  const [plazoEstimado, setPlazoEstimado] = useState<Date | null>(null);



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Verifica si el campo cambiado es "typeEstimationId"

    if (name === "typeEstimationId") {
      setShowLabel(value !== "");
      setShowExpertOpinionInput(value === "2");

    }

    if (name === "methodologyId") {
      setShowLabelmethodology(Number(value) !== 3 && value !== "");
    }

    if (name === "areaId") {
      setShowLabelArea(Number(value) !== 1 && value !== "");
    }


    if (name === "chargeId") {
      setShowLabelCharge(Number(value) !== 1 && value !== "");
    }

    if (name === "developmentTypeId") {
      setShowLabelDevYpe(Number(value) !== 2 && value !== "");
    }

    if (name === "name") {
      const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]*$/;
      if (!soloLetras.test(value)) return; // Ignora caracteres inválidos
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

          <div className="relative ml-2 mt-5 mb-3">
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

          <div className="relative ml-2 mt-5 mb-3">
            <select
              name="chargeId"
              onChange={handleChange}
              className="SelecStyle inputStyle peer"
            >
              {Charge.length > 0 ? (
                Charge.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.description}
                  </option>
                ))
              ) : (
                <option>Cargando...</option>
              )}
            </select>
            {showLabelCharge && (
              <label
                htmlFor="chargeId"
                className="inputLabel"
              >
                Cargo del solicitante
              </label>
            )}
          </div>

          <div className="relative ml-2 mt-5 mb-3">
            <select
              name="areaId"
              onChange={handleChange}
              className="SelecStyle inputStyle peer"
            >
              {areas.length > 0 ? (
                areas.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.description}
                  </option>
                ))
              ) : (
                <option>Cargando...</option>
              )}
            </select>


            {showLabelArea && (
              <label
                htmlFor="areaId"
                className="inputLabel"
              >
                Area Que solicto el Desarollo
              </label>
            )}

          </div>



          <div className="relative ml-2 mt-5 mb-3">
            <select
              name="methodologyId"
              onChange={handleChange}
              className="SelecStyle inputStyle peer"
            >
              {Methodology.length > 0 ? (
                Methodology.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.description}
                  </option>
                ))
              ) : (
                <option>Cargando...</option>
              )}
            </select>

            {showLabelmethodology && (
              <label
                htmlFor="methodologyId"
                className="inputLabel"
              >
                Metodologia de Desarollo
              </label>
            )}

          </div>

          <div className="relative ml-2 mt-5 mb-3">
            <select
              name="developmentTypeId"
              onChange={handleChange}
              className="SelecStyle inputStyle peer"
            >
              {developmentTypes.length > 0 ? (
                developmentTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.description}
                  </option>
                ))
              ) : (
                <option>Cargando...</option>
              )}
            </select>
            {showLabelDevType && (
              <label
                htmlFor="developmentTypeId"
                className="inputLabel"
              >
                Tipo de Desarollo
              </label>
            )}
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
                name="email"
                value={formData.email || ""}
                onChange={handleChange}
                onBlur={(e) => handleBlur(e.target.value)} // 👈 aquí
                className="inputStyle peer"
                placeholder=" "
              />
              <label htmlFor="email" className="inputLabel">
                Email
              </label>
              {emailError && (
                <p className="text-white text-sm mt-1">{emailError}</p>
              )}
            </div>
          )}
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-2xl shadow-lg w-96 text-center">
                <h2 className="text-xl font-bold mb-4">Tiempo estimado de respuesta</h2>
                <p className="mb-4">La fecha limite de respuesta para esta estimacion es para el <strong>{plazoEstimado?.toLocaleDateString("es-ES", { day: "2-digit", month: "long", year: "numeric" })}</strong>.</p>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => setShowModal(false)}
                >
                  Cerrar
                </button>
              </div>
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
