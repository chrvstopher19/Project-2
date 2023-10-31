import mongoose from "mongoose";

const Schema = mongoose.Schema

let DemonSchema = new Schema({
  name: {type: String},
  rank: {type: String},
  blood_demon_arts: {type: String},
  breathing_forms: []
 
})

export default mongoose.model("demons", DemonSchema)