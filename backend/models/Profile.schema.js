import { Schema, model } from "mongoose";
import prodottoVendutoSchema from "./prodottoVenduto.schema.js";


const ProfileSchema = new Schema(
  {
    googleId: String,
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      // required: true,
      select: false
    },
    approved: Boolean,
    verifiedAt: Date,
    //prodottiVenduti:[prodottoVendutoSchema]
  },
  {
    collection: "profiles",
  }
);

const Profile = model("Profile", ProfileSchema);

export default Profile;