import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  date: {
    type: Date,
    default: new Date(toString()),
  },
  prixTotal: {
    type: Number,
    required: true,
  },
  order: [
    {
      article: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Article",
        required: true,
      },
      quantity: { type: Number, required: true },
      prix: { type: Number, required: true },
    },
  ],
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const order = mongoose.model("order", orderSchema);
export default order;
