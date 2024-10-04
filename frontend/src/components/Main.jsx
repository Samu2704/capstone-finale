import Carousel from "./CarouselImage"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Description from "./Description";
import "./Main.css"

import { getAllprodottiVenduti } from "../fetchUrls";
import { useEffect, useContext, useState } from "react";
import { UserContext } from "./contexts/UserContextProvider"; // Importa il contesto


function Main() {

  const [data, setData] = useState([]);
  const { token } = useContext(UserContext); // Accedi al token dal contesto

  useEffect(() => {
    //if (token) {
    getAllprodottiVenduti().then((getAllprodottiVendutiDati) => { setData(getAllprodottiVendutiDati); console.log(getAllprodottiVendutiDati) });
    //}
  }, [token])
    ; // Eseguo fetch solo se c'è il token

    const [isFormOpen, setIsFormOpen] = useState(false);

    // Stati per il form
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    
    // Stato per salvare i dati inseriti
    const [productData, setProductData] = useState(null);
  
    // Funzione per gestire il submit del form
    const handleSubmit = (e) => {
      e.preventDefault(); // Evita il refresh della pagina
  
      // Salva i dati inseriti
      setProductData({ brand, price, image });
  
      // Resetta i campi del form
      setBrand('');
      setPrice('');
      setImage('');
  
      // Chiudi il form dopo l'invio
      setIsFormOpen(false);
    }
  return (
    <>
      <Carousel />
      <Container>
        <Row>
          <Col className="racchette" sm={12} md={4}><h5>I più votati</h5>
            {data.map(prodotto => <div>
              <div className="d-flex">
                <img className="mb-2" src={prodotto.avatar} alt=""/>
                <div> <h6>brand: {prodotto.brand} </h6>
                  <p>price: {prodotto.price} $</p>
                </div>
              </div>
            </div>)}
            <div>
      <button 
       onClick={() => setIsFormOpen(!isFormOpen)}
         style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer', borderRadius: "15px", marginBottom:"1rem", height:"45px", }}>
        {isFormOpen ? 'Chiudi Form' : 'Aggiungi Prodotto'}
      </button>

      {isFormOpen && (
        <form onSubmit={handleSubmit}>
          <div>
            <label className="mb-2">Brand :</label>
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="mb-2">Prezzo:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Immagine (URL):</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          <button type="submit"
            style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer', borderRadius: "15px", marginBottom:"1rem", marginTop:"1rem", height:"45px"}}
          >
          
          Invia</button>
        </form>
      )}

      {/* Stampa a video i dati inseriti */}
      {productData && (
        <div>
          <h3>Dati Prodotto Inseriti:</h3>
          <p><strong>Brand:</strong> {productData.brand}</p>
          <p><strong>Prezzo:</strong> €{productData.price}</p>
          <img src={productData.image} alt={productData.brand} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
        </div>
      )}
    </div>
  
          </Col>

          <Col sm={12} md={8}><h5>I nostri corsi</h5>
            
          </Col>
        </Row>
        <Description />
      </Container>;

    </>
  )
}

export default Main