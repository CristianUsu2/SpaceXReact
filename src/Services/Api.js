import axios from "axios"

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



export default {ObtenerInformacion , ObtenerMision}