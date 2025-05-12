import mongoose from "mongoose";

const PlantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  careInstructions: {
    type: String,
    required: true,
  },
  minDry: {
    type: Number,
    required: true,
  },
  maxDry: {
    type: Number,
    required: true,
  },
  minNormal: {
    type: Number,
    required: true,
  },
  maxNormal: {
    type: Number,
    required: true,
  },
  minFlooded: {
    type: Number,
    required: true,
  },
  maxFlooded: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.Plant || mongoose.model("Plant", PlantSchema);
