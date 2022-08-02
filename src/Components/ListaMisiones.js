import {Container, Row, Col, Spinner} from "react-bootstrap"
import { useEffect, useState } from "react";
import Tarjeta from "./Tarjeta"
import Api from "../Services/Api"
import InfiniteScroll  from "react-infinite-scroll-component"


const ListaMisiones=()=>{
    const [Data, SetData]=useState([])
    const [Paginador, SetPaginador]=useState(0)

    useEffect(()=>{
         Api.ObtenerInformacion(Paginador).then(response=>{
           const datos=response.filter(e=>e.links.mission_patch != null)
            SetData(Data.concat(datos))
         }).catch(error=>console.log(error)) 
    },[Paginador])   
    
    
    console.log(Data)
    return(
      <>
    <InfiniteScroll
      dataLength={Data.length}
      hasMore={Data.length == 109 ? false : true}
      next={()=>SetPaginador(Data.length + 1)}
     
       loader={<Spinner animation="border" variant="primary"  style={{margin: "30px"}}/>}
       > 
    <Container>
    
    <Row>
       {Data.map(e=><Col sm={4} mb="3" key={e.mission_name}><Tarjeta datos={e}></Tarjeta></Col>)}
     </Row>
     
   </Container>
   </InfiniteScroll> 
  </>
    )
}

export default ListaMisiones