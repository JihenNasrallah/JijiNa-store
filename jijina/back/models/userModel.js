import mongoose from "mongoose";

const userScema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  adresse: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "User",
  },
});

const users = mongoose.model("User", userScema);

export default users;
