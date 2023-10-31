import mongoose from "mongoose";

const Schema = mongoose.Schema;

let SlayerSchema = new Schema({
  name: { type: String },
  ranks: { type: String },
  breathing_forms: []
});

export default mongoose.model("slayers", SlayerSchema);
