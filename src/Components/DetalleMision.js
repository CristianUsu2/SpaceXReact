import React from "react";
import { useState, useEffect } from "react";
import Api from "../Services/Api";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import styled  from "styled-components";

const H1= styled.h1`
    text-align: center;
    margin-bottom: 15px;
    font-family: 'innhernit';
    font-weight: '200';
`

const DetalleMision = () => {
  const { id } = useParams();
  console.log("id", id)
  const [Mision, SetMision] = useState({});
  let contador=0
  
  useEffect(() => {
    Api.ObtenerMision(id)
      .then((response) => {
         console.log(response)
        SetMision(response);
      })
      .catch((error) => console.log(error));
  }, [contador]);

  console.log("si a bueno",Mision);

  return (
  
    <Container>
      {Mision.mission_name != null ?
      
      <Row>
        
      <Col sm={12}>
        <H1>Mission {Mision.mission_name}</H1>
      </Col>
      <Col sm={6}>
          <Image src={Mision.links.mission_patch} style={{width: "300px", marginTop: "25px"}}/>
          <p className="css" persona="jeison"></p>
      </Col> 
      <Col sm={6}>
         {Mision.details}  
        
      </Col>
      
    </Row> : null}
      
    
    </Container>
    
  );
};

export default DetalleMision;
