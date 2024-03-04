import mongoose from "mongoose";

const articleSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
  availability: {
    type: Boolean,
  },
  image: {
    type: String,
    require: true,
  },
});

const Article = mongoose.model("article", articleSchema);
export default Article;
