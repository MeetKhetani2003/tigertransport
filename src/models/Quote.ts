import mongoose from "mongoose";

const QuoteSchema = new mongoose.Schema({
  cargoType: { type: String, required: true },
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  weight: { type: String, required: true },
  businessName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
}, {
  timestamps: true,
});

export const Quote = mongoose.models.Quote || mongoose.model("Quote", QuoteSchema);
