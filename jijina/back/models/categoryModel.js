import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    require: true,
  },
  
},{timestamps:true});

const CategoryModel = mongoose.model("category", categorySchema);
export default CategoryModel;

