import express from "express";
import {
  AddUser,
  deleteUser,
  getAllUsers,
  successLogin,
  updateUser,
} from "../controllers/userControllers.js";

const router = express.Router();

// GET all users
router.get("/", getAllUsers);

// PUT update a user by ID
router.put("/:id", updateUser);

//authentification
router.post("/", AddUser);

router.post("/login", successLogin);

// DELETE a user by ID
router.delete("/:id", deleteUser);

export default router;
