import Carousel from "./CarouselImage"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Description from "./Description";

function Main(){
return(
<>
<Carousel/>
    <Container>
      <Row>
        <Col sm={12} md={4}>111111111111111111 of 2</Col>
        <Col sm={12} md={8}>2222222222222222 of 1</Col>
      </Row>
      <Description/>
    </Container>;
    
</>
)
}
export default Main