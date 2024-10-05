import Carousel from 'react-bootstrap/Carousel';
import "./Carouselimage.css"

function CarouselImage () {
  return (
    <Carousel className='carousel'>
    <Carousel.Item>
      <img
        className="w-100" style={{height:"30rem", objectFit: "contain" }}
        src="https://tse2.mm.bing.net/th?id=OIP.mHYFPwfI8snmoEgstYVRVgHaE7&pid=Api&P=0&h=180"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Usiamo la migliore attrezzatura</h3>
        
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="w-100" style={{ height:"30rem",objectFit: "contain" }}
        src="https://tse2.mm.bing.net/th?id=OIP.SrbJG1jwMCSCzCIA3bO92gHaE8&pid=Api&P=0&h=180"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Corsi di gruppo</h3>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="w-100" style={{ height:"30rem",objectFit: "contain"}}
        src="https://tse4.mm.bing.net/th?id=OIP.NfMFZZDz8tni5ZY5-p19JAHaE8&pid=Api&P=0&h=180"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Strutture efficienti</h3>
        
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
};

export default CarouselImage;
