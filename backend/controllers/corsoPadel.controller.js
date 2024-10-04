import  corsoPadelSchema from "../models/corsoPadel.schema.js"


export const getCorsi =  async (req, res) => {
    
    // TODO GET /:userld/prodottiVenduti => ritorna TUTTE i prodotti 
        try {
          /** recupero dal database la scheda del profilo tramite l'id nella barra degli indirizzi */
         // const Profile = await ProfileSchema.findById(req.params.userId);
          /** controllo che il profilo esista */
          //if (!Profile) throw new Error({ message: "profile not found" });
          /** invio all'utente i prodotti del profilo */
          const tuttiCorsi = await corsoPadelSchema.find({})
          //tuttiProdotti.save(),
          res.send(tuttiCorsi);
         // console.log(tuttiProdotti)
        } catch (err) {
          console.log(err);
          res.send({ message: "get all courses ERROR" });
        }
      };

      export const createCorsi =async (req, res) =>{
        try {
          const corsPadel = new corsoPadelSchema(req.body);
          const creaCorsiPadel= await corsPadel.save();
          res.status(201).send(creaCorsiPadel);
        } catch (err) {
          console.log(err);
          res.status(400).send(err);
        }
      }
    
    