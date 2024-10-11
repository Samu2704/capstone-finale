import Carousel from "./CarouselImage"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Description from "./Description";
import "./Main.css"
import { getAllCorsiPadel, getAllprodottiVenduti } from "../fetchUrls";
import { useEffect, useContext, useState } from "react";
import { UserContext } from "./contexts/UserContextProvider"; // Importa il contesto


function Main() {

  const [data, setData] = useState([]);
  const { token } = useContext(UserContext); // Accedi al token dal contesto
  const [corsoData, setCorsoData] = useState([])


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
  const [avatar, setAvatar] = useState('');
  // Stato per salvare i dati inseriti
  const [productData, setProductData] = useState(null);


  const [descrizioneCorso, setDescrizioneCorso] = useState('');
  const [priceCorso, setPriceCorso] = useState('');
  const [avatarCorso, setAvatarCorso] = useState('');
  const [isFormCorsoOpen, setIsFormCorsoOpen] = useState(false);
  const [productDataCorso, setProductDataCorso] = useState(null);

  // Funzione per gestire il submit del form
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita il refresh della pagina


    // Salva i dati inseriti
    setProductData({ brand, price, avatar });

    // Resetta i campi del form
    setBrand('');
    setPrice('');
    setAvatar('');

    // Chiudi il form dopo l'invio
    setIsFormOpen(false);
  }


  //CORSI PADELLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
useEffect(() => {
    getAllCorsiPadel().then((getAllcorsiPadelDati) => { setCorsoData(getAllcorsiPadelDati); console.log(getAllcorsiPadelDati) });
  }, [token]);

  // Funzione per gestire il submit del form
  const handleSubmitCorso = (ev) => {
    ev.preventDefault(); // Evita il refresh della pagina

    // Salva i dati inseriti
    setProductDataCorso({ descrizioneCorso, priceCorso, avatarCorso });

    // Resetta i campi del form
    setDescrizioneCorso('');
    setPriceCorso('');
    setAvatarCorso('');

    // Chiudi il form dopo l'invio
    setIsFormCorsoOpen(false);

  }

  return (
    <>
      <Carousel />
      <Container>
        <Row>
          <Col className="racchette" sm={12} md={4}><h5 className="mt-3 mb-5">Le più richieste</h5>
            {data.map(prodotto => <div>
              <div className="d-flex transform ms-2">
                <img className="mb-5" src={prodotto.avatar} alt="" />
                <div> <h6>brand: {prodotto.brand} </h6>
                  <p>price: {prodotto.price} €</p>
                </div>
              </div>
            </div>)}

            <div>
              <button className="mt-3 ms-3"
                onClick={() => setIsFormOpen(!isFormOpen)}
                style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer', borderRadius: "15px", marginBottom: "1rem", height: "45px", }}>
                {isFormOpen ? 'Chiudi Form' : 'Crea la tua racchetta'}
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
                    <label className="mb-2">Price:</label>
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
                      value={avatar}
                      onChange={(e) => setAvatar(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit"
                    style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer', borderRadius: "15px", marginBottom: "1rem", marginTop: "1rem", height: "45px" }}
                  >

                    Invia</button>
                </form>
              )}

              {/* Stampa a video i dati inseriti */}
              {productData && (
                <div>
                  <h5>Dati Prodotto Inseriti:</h5>
                  <div className="d-flex mb-2 ms-4">
                    <img className="me-4" src={productData.avatar} alt={productData.avatar} style={{ width: '110px', height: '110px', objectFit: 'cover' }} />
                    <div>
                      <h6 className="me-2">Brand: {productData.brand}</h6>
                      <p>Price: {productData.price}€</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </Col>






          <Col className="" sm={12} md={8}><h5 className="ms-4 mt-3 mb-4">I nostri corsi</h5>
            {corsoData.map(corso => <div>
              <div className="d-flex ms-4 transform ">
                <img className="mb-4 me-4 ms-3" src={corso.avatar} alt="" />
                <div> <h6>descrizione corso: {corso.descrizioneCorso} </h6>
                  <p>price: {corso.price} €</p>
                </div>
              </div>
            </div>)}

            <div>
              <button className="ms-4"
                onClick={() => setIsFormCorsoOpen(!isFormCorsoOpen)}
                style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer', borderRadius: "15px", marginBottom: "1rem", height: "45px", }}>
                {isFormCorsoOpen ? 'Chiudi Form' : 'Crea il tuo corso'}
              </button>

              {isFormCorsoOpen && (
                <form onSubmit={handleSubmitCorso}>
                  <div>
                    <label className="mb-2">Descrizione corso :</label>
                    <input
                      type="text"
                      value={descrizioneCorso}
                      onChange={(ev) => setDescrizioneCorso(ev.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-2">Price:</label>
                    <input
                      type="number"
                      value={priceCorso}
                      onChange={(ev) => setPriceCorso(ev.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label>Immagine (URL):</label>
                    <input
                      type="text"
                      value={avatarCorso}
                      onChange={(ev) => setAvatarCorso(ev.target.value)}
                      required
                    />
                  </div>
                  <button type="submit"
                    style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer', borderRadius: "15px", marginBottom: "1rem", marginTop: "1rem", height: "45px" }}
                  >

                    Invia</button>
                </form>
              )}

              {/* Stampa a video i dati inseriti */}
              {productDataCorso && (
                <div >
                  <h5>Dati Corso Inseriti:</h5>
                  <div className="d-flex mb-2 ms-4">
                    <img className="me-4" src={productDataCorso.avatarCorso} alt={""} style={{ width: '110px', height: '110px', objectFit: 'cover' }} />
                    <div>
                      <h6 className="me-2">Descrizione Corso: {productDataCorso.descrizioneCorso}</h6>
                      <p>Price: {productDataCorso.priceCorso}€</p>
                    </div>
                  </div>
                </div>
              )}
            </div>


          </Col>
        </Row>
        <Description />
      </Container>;

    </>
  )
}

export default Main