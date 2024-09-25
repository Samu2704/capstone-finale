import 'dotenv/config'; // carica il file .env
import express from 'express';
import mongoose from 'mongoose';
import ProfileRouter from "./routes/profileRoutes.js";
import authenticationRouter from "./routes/authenticationRoutes.js";
import authorization from "./middleware/authorization.js"

const port = process.env.PORT || 5000;
const Host = process.env.HOST;
const server = express();
server.use(express.json())

await mongoose
    .connect(process.env.MONGODB_CONNECTION_URI)
    .then(() => console.log('connessione al db OK'))
    .catch((err) => console.log(err));

 
 server.use("/api/profiles", ProfileRouter);
 server.use("/api/auth", authenticationRouter); //rotta per l'autenticazione
server.use("api/prodotti", prodottoVendutoRouter);

server.listen(port, () => {
    console.log('server is on');
});