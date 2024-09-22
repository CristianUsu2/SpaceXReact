// import React from "react";
// import { useState, useEffect } from "react";
// import Api from "../Services/Api";
// import { useParams } from "react-router-dom";
// import { Container, Row, Col, Image } from "react-bootstrap";
// import styled  from "styled-components";

// const H1= styled.h1`
//     text-align: center;
//     margin-bottom: 15px;
//     font-family: 'innhernit';
//     font-weight: '200';
// `

// const DetalleMision = () => {
//   const { id } = useParams();
//   console.log("id", id)
//   const [Mision, SetMision] = useState({});
//   let contador=0

//   useEffect(() => {
//     Api.ObtenerMision(id)
//       .then((response) => {
//          console.log(response)
//         SetMision(response);
//       })
//       .catch((error) => console.log(error));
//   }, [contador]);

//   console.log("si a bueno",Mision);

//   return (

//     <Container>
//       {Mision.mission_name != null ?

//       <Row>

//       <Col sm={12}>
//         <H1>Mission {Mision.mission_name}</H1>
//       </Col>
//       <Col sm={6}>
//           <Image src={Mision.links.mission_patch} style={{width: "300px", marginTop: "25px"}}/>
//           <p className="css" persona="jeison"></p>
//       </Col>
//       <Col sm={6}>
//          {Mision.details}

//       </Col>

//     </Row> : null}

//     </Container>

//   );
// };

// export default DetalleMision;

//---------------------------------------------------------------------------------------
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
// import styled from "styled-components";
// import Api from "../Services/Api";
// import { FaStar } from "react-icons/fa";  // Importamos el ícono de estrella

// const H1 = styled.h1`
//   text-align: center;
//   margin-bottom: 15px;
//   font-family: 'innhernit';
//   font-weight: '200';
// `;

// const StarRating = ({ rating }) => {
//   return (
//     <>
//       {[...Array(5)].map((star, index) => {
//         index += 1;
//         return (
//           <FaStar
//             key={index}
//             size={20}
//             color={index <= rating ? "#ffc107" : "#e4e5e9"}
//             style={{ marginRight: 5 }}
//           />
//         );
//       })}
//     </>
//   );
// };

// const DetalleMision = () => {
//   const { id } = useParams();
//   const [Mision, SetMision] = useState({});
//   const [comentarios, setComentarios] = useState([]);
//   const [nuevoComentario, setNuevoComentario] = useState({
//     usuario: '',
//     comentario: '',
//     valoracion: ''
//   });
//   const [contador, setContador] = useState(0);

//   useEffect(() => {
//     Api.ObtenerMision(id)
//       .then((response) => {
//         SetMision(response);
//       })
//       .catch((error) => console.log(error));

//     // Comentarios simulados
//     setComentarios([
//       { usuario: "Carlos", comentario: "Increíble misión", valoracion: 5 },
//       { usuario: "Ana", comentario: "Esperaba más", valoracion: 3 }
//     ]);
//   }, [id, contador]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNuevoComentario({ ...nuevoComentario, [name]: value });
//   };

//   const agregarComentario = (e) => {
//     e.preventDefault();
//     if (nuevoComentario.usuario && nuevoComentario.comentario && nuevoComentario.valoracion) {
//       setComentarios([...comentarios, nuevoComentario]);
//       setNuevoComentario({ usuario: '', comentario: '', valoracion: '' });
//       setContador(contador + 1);
//     }
//   };

//   return (
//     <Container>
//       {Mision.mission_name != null ? (
//         <Row>
//           {/* Columna izquierda: Detalles de la misión */}
//           <Col sm={6}>
//             <H1>Mission {Mision.mission_name}</H1>
//             <Image src={Mision.links?.mission_patch} style={{ width: "300px", marginTop: "25px" }} />
//             <p style={{ marginTop: "15px" }}>{Mision.details}</p>
//           </Col>

//           {/* Columna derecha: Comentarios */}
//           <Col sm={6}>
//             <h3>Comentarios</h3>
//             <ul>
//               {comentarios.map((comentario, index) => (
//                 <li key={index} style={{ marginBottom: "15px" }}>
//                   <strong>{comentario.usuario}</strong>: {comentario.comentario}
//                   <br />
//                   <StarRating rating={comentario.valoracion} />
//                 </li>
//               ))}
//             </ul>

//             {/* Formulario para agregar un nuevo comentario */}
//             <h3>Agregar un comentario</h3>
//             <Form onSubmit={agregarComentario}>
//               <Form.Group controlId="formUsuario">
//                 <Form.Label>Usuario</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="usuario"
//                   value={nuevoComentario.usuario}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </Form.Group>
//               <Form.Group controlId="formComentario">
//                 <Form.Label>Comentario</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   name="comentario"
//                   value={nuevoComentario.comentario}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </Form.Group>
//               <Form.Group controlId="formValoracion">
//                 <Form.Label>Valoración</Form.Label>
//                 <Form.Control
//                   type="number"
//                   name="valoracion"
//                   value={nuevoComentario.valoracion}
//                   onChange={handleInputChange}
//                   min="1"
//                   max="5"
//                   required
//                 />
//               </Form.Group>
//               <Button variant="primary" type="submit">Enviar comentario</Button>
//             </Form>
//           </Col>
//         </Row>
//       ) : null}
//     </Container>
//   );
// };

// export default DetalleMision;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import styled from "styled-components";
import Api from "../Services/Api";
import { FaStar } from "react-icons/fa"; // Importamos el ícono de estrella
import { useUser } from "./Login/UserContext"; // Importa el UserProvider
import { faTwitter, faFacebook,faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { shareOnFacebook, shareOnTwitter, shareOnYoutube  } from "../Services/Share";
const H1 = styled.h1`
  text-align: center;
  margin-bottom: 15px;
  font-family: "innhernit";
  font-weight: "200";
`;

const StarRatingInteractive = ({ rating, onRatingChange }) => {
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            size={30}
            style={{ cursor: "pointer", marginRight: 5 }}
            color={index <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(null)}
            onClick={() => onRatingChange(index)}
          />
        );
      })}
    </div>
  );
};

const DetalleMision = () => {
  const { id } = useParams();
  const [Mision, SetMision] = useState({});
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState({
    usuario: "",
    comentario: "",
    valoracion: 0,
  });
  const [contador, setContador] = useState(0);

  useEffect(() => {
    Api.ObtenerMision(id)
      .then((response) => {
        SetMision(response);
      })
      .catch((error) => console.log(error));

    // Obtener las valoraciones enviando el id de la misión
    Api.ObtenerValoraciones(id)
      .then((response) => {
        setComentarios(response); // Asume que la API devuelve un array de valoraciones
      })
      .catch((error) => console.log(error));
  }, [id, contador]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoComentario({ ...nuevoComentario, [name]: value });
  };

  const handleRatingChange = (rating) => {
    setNuevoComentario({ ...nuevoComentario, valoracion: rating });
  };

  const formatFecha = (date) => {
    const isoString = date.toISOString();
    return (
      isoString.split("T")[0] + " " + isoString.split("T")[1].split(".")[0]
    );
  };

  const { usuario } = useUser();

  // Agregar un nuevo comentario
  const agregarComentario = (e) => {
    e.preventDefault();
    const comentarioConFecha = {
      id_mision: parseInt(id),
      usuario: usuario,
      comentario: nuevoComentario.comentario,
      fecha: formatFecha(new Date()), // Formato adecuado para MySQL
      valoracion: nuevoComentario.valoracion,
    };

    // Enviar el comentario a la API
    Api.EnviarValoracion(comentarioConFecha)
      .then((response) => {
        setComentarios([...comentarios, comentarioConFecha]); // Actualizamos el estado local
        setNuevoComentario({ email: "", comentario: "", valoracion: 0 });
        setContador(contador + 1);
      })
      .catch((error) => console.log(error));

    setContador(contador + 1); // Incrementamos el contador
  };

  console.log(Mision, "mision");

  return (
    <Container>
      {Mision.mission_name != null ? (
        <Row>
          {/* Columna izquierda: Detalles de la misión */}
          <Col sm={6}>
            <H1>Mission {Mision.mission_name}</H1>
            <Image
              src={Mision.links?.mission_patch}
              style={{ width: "300px", marginTop: "25px" }}
            />
            <p style={{ marginTop: "15px" }}>{Mision.details}</p>
            <Col xs={12}>
              <h4>Compartir en redes sociales</h4>
              <Row>
                <Col xs={12} md={12} lg={4}>
                  <Button
                    style={{ width: "200px",  border: "none" }}
                    onClick={() => shareOnFacebook(Mision.links.article_link)}
                  >
                    <FontAwesomeIcon icon={faFacebook} /> Facebook
                  </Button>
                </Col>
                <Col xs={12} md={12} lg={4}>
                  <Button style={{ width: "200px", backgroundColor: "black", border: "none" }} onClick={()=>shareOnTwitter(Mision.mission_name,Mision.details,Mision.links.article_link)}>
                    <FontAwesomeIcon icon={faTwitter} /> Twitter
                  </Button>
                </Col>

                <Col xs={12} md={12} lg={4}>
                  <Button style={{ width: "200px", backgroundColor: "red", border: "none" }} onClick={()=>shareOnYoutube(Mision.links.video_link)}>
                    <FontAwesomeIcon icon={faYoutube } /> Ver video
                  </Button>
                </Col>
              </Row>
            </Col>
          </Col>

          {/* Columna derecha: Comentarios */}
          <Col sm={6}>
            <h3>Comentarios</h3>
            <Col sm={6}>
              {comentarios && comentarios.length > 0 ? (
                <ul>
                  {comentarios && comentarios.length > 0 ? (
                    <ul>
                      {comentarios.map((comentario, index) => (
                        <li key={index} style={{ marginBottom: "15px" }}>
                          {/* Mostrar el email */}
                          <strong>Email:</strong> {comentario.email}
                          <br />
                          {/* Mostrar el comentario */}
                          <strong>Comentario:</strong> {comentario.comentario}
                          <br />
                          {/* Mostrar la valoración con las estrellas */}
                          <StarRatingInteractive
                            rating={comentario.valoracion}
                            onRatingChange={() => {}}
                          />
                          <br />
                          {/* Mostrar la fecha */}
                          <strong>Fecha:</strong>{" "}
                          {new Date(comentario.fecha).toLocaleDateString()}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No hay comentarios disponibles.</p>
                  )}
                </ul>
              ) : (
                <p>No hay comentarios disponibles.</p>
              )}
            </Col>

            {/* Formulario para agregar un nuevo comentario */}
            <h3>Agregar un comentario</h3>
            <Form onSubmit={agregarComentario}>
              {/* <Form.Group controlId="formUsuario">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type="text"
                  name="usuario"
                  value={nuevoComentario.usuario}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group> */}
              <Form.Group controlId="formComentario">
                <Form.Label>Comentario</Form.Label>
                <Form.Control
                  as="textarea"
                  name="comentario"
                  value={nuevoComentario.comentario}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              {/* Valoración interactiva con estrellas */}
              <Form.Group controlId="formValoracion">
                <Form.Label>Valoración</Form.Label>
                <StarRatingInteractive
                  rating={nuevoComentario.valoracion}
                  onRatingChange={handleRatingChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Enviar comentario
              </Button>
            </Form>
          </Col>
        </Row>
      ) : null}
    </Container>
  );
};

export default DetalleMision;
