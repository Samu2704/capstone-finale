import express from 'express';
import * as prodottoVenduto from "../controllers/prodottoVenduto.controller.js"

const prodottoRouter = express.Router();

Router.get("/", prodottoVenduto.getProdotti())