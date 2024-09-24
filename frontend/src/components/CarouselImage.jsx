import Carousel from 'react-bootstrap/Carousel';


function CarouselImage () {
  return (
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-25"
        src="https://tse2.mm.bing.net/th?id=OIP.mHYFPwfI8snmoEgstYVRVgHaE7&pid=Api&P=0&h=180"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First Slide</h3>
        <p>This is the first slide.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-25"
        src="https://tse2.mm.bing.net/th?id=OIP.SrbJG1jwMCSCzCIA3bO92gHaE8&pid=Api&P=0&h=180"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Second Slide</h3>
        <p>This is the second slide.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-25"
        src="https://tse4.mm.bing.net/th?id=OIP.NfMFZZDz8tni5ZY5-p19JAHaE8&pid=Api&P=0&h=180"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Third Slide</h3>
        <p>This is the third slide.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
};

export default CarouselImage;
