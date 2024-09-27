import { Schema, model} from "mongoose";

const prodottoVendutoSchema = new Schema({
  avatar: {
  type: String,
},
  price: {
  type: String,
},
  brand: {
  type: String,
},
userId: {
  type: String,
  required: true,
},
  },
  {collection: "prodottiVenduti"}
)
const prodottoVenduto = model("prodottiVenduti",prodottoVendutoSchema)
export default prodottoVenduto;