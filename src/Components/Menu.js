import React from "react"
import { Navbar, Container } from "react-bootstrap";
import styled from "styled-components"
import img from "../img/SpaceX-Logo.png"
import {Link} from "react-router-dom"

const Imagen=styled.img`
   width: 300px;
   height: 80px;
   object-fit: cover;
  
`


const Menu = () => {
  return (
    <div className="sticky-top mb-4">
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
        </Container>
      </Navbar>
      </Link>
     
    </div>
  );
};

export default Menu;
