import axios from "axios"




const API_BASE_URL = 'https://api.anjeliscake.com'; // URL de tu API


const ObtenerInformacion=async(numeroLanzamiento)=>{
   const request=await  axios.get(`https://api.spacexdata.com/v3/launches?limit=20&offset=${numeroLanzamiento}`)
   const data= await request.data  
    return data
}

const ObtenerMision=async(id)=>{
    const request=await  axios.get(`https://api.spacexdata.com/v3/launches/${id}`)
    const data= await request.data  
     return data
}


// Obtener todas las valoraciones de una misión
const ObtenerValoraciones = (id_mision) => {
    return axios.get(`${API_BASE_URL}/comentarios.php/comentarios?id_mision=${id_mision}`)
      .then(response => response.data)
      .catch(error => { throw error; });
  };
  
 
  // Enviar una nueva valoración
const EnviarValoracion = async (valoracion) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/comentarios.php/comentarios`, valoracion, {
        headers: {
           'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        },
      });
  
      // Maneja la respuesta
      if (response.data) {
        return response.data;
      } else {
        throw new Error('No se pudo enviar la valoración');
      }
    } catch (error) {
      throw new Error('Error al enviar la valoración: ' + (error.response?.data?.mensaje || error.message));
    }
  };
  



export default {ObtenerInformacion , ObtenerMision, ObtenerValoraciones,
    EnviarValoracion}