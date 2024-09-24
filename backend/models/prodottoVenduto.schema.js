import { Schema, model } from "mongoose";

const prodottoVendutoSchema = new Schema(
  {
  avatar: {
  type: String,
},
  price: {
  type: String,
},
  brand: {
  type: String,
},
  },
  {
    collection: "prodottiVenduti",
  })

  const prodottoVenduto = model("prodottoVenduto", prodottoVendutoSchema );

export default prodottoVenduto;