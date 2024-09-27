import Carousel from "./CarouselImage"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Description from "./Description";


import { getAllprodottiVenduti } from "../fetchUrls";
import { useEffect, useContext,useState } from "react";
import { UserContext } from "./contexts/UserContextProvider"; // Importa il contesto

function Main() {

  const [data, setData] = useState([]);
  const { token } = useContext(UserContext); // Accedi al token dal contesto

  useEffect(() => {
    if (token) {
      getAllprodottiVenduti().then((getAllprodottiVendutiDati) => setData(getAllprodottiVendutiDati));
      // const fetchData = async () => {
      //   try {
      //     const response = await fetch(
      //       `https://striveschool-api.herokuapp.com/api/profile/`,
      //       {
      //         headers: {
      //           Authorization: apiKey
      //         },
      //       }
      //     );
      //     const result = await response.json();
      //     setData(result);
      //   } catch (error) {
      //     console.error("Error fetching data:", error);
      //   }
      // };
      // fetchData();
    }
  }, [token]); // Eseguo fetch solo se c'è il token
  return (
    <>
      <Carousel />
      <Container>
        <Row>
          <Col sm={12} md={4}>111111111111111111 of 2
          
          
      
          </Col>
          
          <Col sm={12} md={8}>2222222222222222 of 1</Col>
        </Row>
        <Description />
      </Container>;

    </>
        )
      }
export default Main