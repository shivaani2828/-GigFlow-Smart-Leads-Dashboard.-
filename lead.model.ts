import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema({
  name: String,
  email: String,
  status: {
    type: String,
    enum: ["New", "Contacted", "Qualified", "Lost"]
  },
  source: {
    type: String,
    enum: ["Website", "Instagram", "Referral"]
  }
}, { timestamps: true });

export default mongoose.model("Lead", LeadSchema);