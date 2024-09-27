
import prodottoVendutoSchema from "../models/prodottoVenduto.schema.js";



export const getProdotti =  async (req, res) => {
    
// TODO GET /:userld/prodottiVenduti => ritorna TUTTE i prodotti 
    try {
      /** recupero dal database la scheda del profilo tramite l'id nella barra degli indirizzi */
     // const Profile = await ProfileSchema.findById(req.params.userId);
      /** controllo che il profilo esista */
      //if (!Profile) throw new Error({ message: "profile not found" });
      /** invio all'utente i prodotti del profilo */
      const tuttiProdotti = await prodottoVendutoSchema.find({})
      //tuttiProdotti.save(),
      res.send(tuttiProdotti);
      //console.log(tuttiProdotti)
    } catch (err) {
      console.log(err);
      res.send({ message: "get all products ERROR" });
    }
  };

