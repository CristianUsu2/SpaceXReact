import { Container, Row, Col, Spinner, Form, Button } from "react-bootstrap"
import { useEffect, useState, useCallback } from "react";
import Tarjeta from "./Tarjeta"
import Api from "../Services/Api"
import InfiniteScroll from "react-infinite-scroll-component"
import debounce from "lodash.debounce";


const ListaMisiones = () => {
  const [Data, SetData] = useState([])
  const [Paginador, SetPaginador] = useState(0)
  const [SearchText, SetSearchText] = useState('')
  const [SearchYear, SetSearchYear] = useState('')
  const [HasMore, SetHasMore] = useState(true)

  const fetchMissions = (paginador, searchText, searchYear, isNewSearch = false) => {
    Api.ObtenerInformacion(paginador).then(response => {
      const filteredData = response.filter(e => {
        const matchesText = e.mission_name.toLowerCase().includes(searchText.toLowerCase());
        const matchesYear = searchYear ? new Date(e.launch_date_utc).getFullYear() == parseInt(searchYear) : true;
        return e.links.mission_patch != null && matchesText && matchesYear;
      });
  
      const uniqueData = [...new Map([...Data, ...filteredData].map(item => [item.flight_number, item])).values()];
  
      if (isNewSearch) {
        SetData(uniqueData);
      } else {
        SetData(prevData => uniqueData);
      }
  
      if (filteredData.length === 0 || uniqueData.length >= 109) {
        SetHasMore(false);
      }
    }).catch(error => console.log(error));
  };

  // Debounce para evitar ejecutar búsqueda con cada cambio de input
  const debounceSearch = useCallback(debounce((text, year) => {
    SetPaginador(0);  // Reiniciar paginador
    fetchMissions(0, text, year, true);  // Búsqueda nueva
  }, 500), []);

  // Cuando cambian los filtros, usar debounce
  useEffect(() => {
    debounceSearch(SearchText, SearchYear);
  }, [SearchText, SearchYear]);

  // Al cambiar el paginador, cargar más datos
  useEffect(() => {
    if (Paginador > 0) {
      fetchMissions(Paginador, SearchText, SearchYear);
    }
  }, [Paginador]);

  const handleSearch = () => {
    debounceSearch(SearchText, SearchYear);
  };

  console.log(Data)
  return (
    <>
      <Container>
        <Form>
          <Row>
            <Col sm={6}>
              <Form.Group controlId="searchText">
                <Form.Label>Buscar por nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese el nombre de la misión"
                  value={SearchText}
                  onChange={(e) => SetSearchText(e.target.value)} // Actualiza el texto de búsqueda
                />
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group controlId="searchYear">
                <Form.Label>Buscar por año</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ingrese el año"
                  value={SearchYear}
                  onChange={(e) => SetSearchYear(e.target.value)} // Actualiza el año de búsqueda
                />
              </Form.Group>
            </Col>
            <Col sm={2} className="d-flex align-items-end">
              <Button variant="primary" onClick={handleSearch}>Buscar</Button> {/* Resetear búsqueda */}
            </Col>
          </Row>
        </Form>
      </Container>
      <InfiniteScroll
        dataLength={Data.length}
        hasMore={Data.length == 109 ? false : true}
        next={() => SetPaginador(prev => prev + 1)}
        loader={<Spinner animation="border" variant="primary" style={{ margin: "30px" }} />}
      >
        <Container>

          <Row>
            {Data.map(e =>
              <Col sm={4} mb="3" key={`${e.flight_number}-${e.mission_name}`}>
                <Tarjeta datos={e}></Tarjeta>
              </Col>)}
          </Row>

        </Container>
      </InfiniteScroll>
    </>
  )
}

export default ListaMisiones