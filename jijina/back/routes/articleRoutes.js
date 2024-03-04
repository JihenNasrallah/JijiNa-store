import express from "express";
import { addArticle, deleteArticle, getArticle, getArticles, updateArticle,  } from "../controllers/articleControllers.js";

const router = express.Router();

router.get("/", getArticles);
router.get("/:id", getArticle);
router.post("/", addArticle);
router.put("/:id", updateArticle);
router.delete("/:id", deleteArticle);

export default router;
