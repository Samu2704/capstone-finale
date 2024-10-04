import { Schema, model} from "mongoose";

const corsoPadelSchema = new Schema({
  avatar: {
  type: String,
},
  price: {
  type: String,
},
  descrizioneCorso: {
  type: String,
},
userId: {
  type: String,
  //required: true,
},
  },
  {collection: "corsiPadel"}
)
const corsoPadel = model("corsiPadel",corsoPadelSchema)
export default corsoPadel;