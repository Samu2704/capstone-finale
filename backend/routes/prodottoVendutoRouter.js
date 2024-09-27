import express from 'express';
import * as prodottoVenduto from "../controllers/prodottoVenduto.controller.js"

const prodottiRouter = express.Router();

prodottiRouter.get("/prodottiVenduti", prodottoVenduto.getProdotti)

export default prodottiRouter