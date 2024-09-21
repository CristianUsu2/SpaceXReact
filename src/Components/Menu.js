import React from "react"
import { Navbar, Container ,Button} from "react-bootstrap";
import styled from "styled-components"
import img from "../img/SpaceX-Logo.png"
import {Navigate,Link,useNavigate} from "react-router-dom"
import { useUser } from './Login/UserContext'; // Importa el UserProvider


const Imagen=styled.img`
   width: 300px;
   height: 80px;
   object-fit: cover;
  
`


const Menu = () => {
  
  const navigate = useNavigate(); // Hook de navegación

  const { usuario } = useUser();
  console.log(usuario)

  const handleLogout = () => {
    localStorage.removeItem('token'); // Eliminar el token
    navigate('/login'); // Redirigir a la página de inicio de sesión
};

  return (
    <div className="sticky-top mb-6">
      <Link to={'/'}>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#">
            <Imagen
              src={img}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          {usuario ? <p color="white"> {usuario}</p> : <p>No estás logueado.</p>}
          <Button variant="outline-light" onClick={handleLogout}>
              Cerrar Sesión
            </Button>
        </Container>
      </Navbar>
      </Link>
     
    </div>
  );
};

export default Menu;



