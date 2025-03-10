import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    organizer: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);
