import express from "express"
import * as corsoPadel from "../controllers/corsoPadel.controller.js"

const corsiPadelRouter = express.Router();

corsiPadelRouter.get("/corsoPadel",corsoPadel.getCorsi )
corsiPadelRouter.post("/corsoPadel",corsoPadel.createCorsi )


export  default corsiPadelRouter