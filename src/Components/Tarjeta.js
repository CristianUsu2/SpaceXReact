import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled  from 'styled-components';
import { Link } from 'react-router-dom';


const Tarjeta=({ datos, ...props})=>{
   return(
    <div className='mb-3'>
        <Card style={{width: "350px", height: "270px", boxShadow: " 2px 2px 2px rgba(0,0,0,0.2)"}} {...props}>
         
          <Card.Body>
          <Card.Title className='text-center'>Mission {datos.mission_name}</Card.Title>
          <Card.Img variant="top" src={datos.links.mission_patch} style={{width: "105px", marginTop: "15px", marginLeft: "20px"}}/>
         
          <Card.Text style={{marginLeft: "95px", marginTop: "-94px"}}>
          <p className='text-center'>Year: {datos.launch_year}</p>
          <p className='text-center'>Rocket: {datos.rocket.rocket_name}</p>
          <p className='text-center'>Type rocket: {datos.rocket.rocket_type}</p>
          </Card.Text>
          <Link to={"Detalle/"+datos.flight_number}>
          <Button variant="primary" style={{width: "165px", height:"40px", marginTop: "15px", marginLeft: "70px"}}>More information</Button>
          </Link>
          </Card.Body>
       
         </Card>    
     </div>
     )
}


export default Tarjeta
