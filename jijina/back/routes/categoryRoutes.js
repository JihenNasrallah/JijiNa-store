import express  from "express";
import { createCategory, deleteCategory, getAllCategories, getCategoryById, updateCategory } from "../controllers/categoryControllers.js";


const router = express.Router();

//////////GET all categories///////////
router.get('/',getAllCategories);

////////GET a single category by ID///////////
router.get('/:id', getCategoryById);

//////POST create a new category/////////
router.post('/', createCategory);

///////PUT update a category by ID////////////
router.put('/:id', updateCategory);

///////DELETE a category by ID//////////
router.delete('/:id', deleteCategory);


export default router;