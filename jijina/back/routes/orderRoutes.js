import express from "express";
import { createOrder, deleteOrder, getAllOrders, getOrderById, updateOrder } from "../controllers/orderControllers.js";


const router = express.Router();

// GET all orders
router.get('/', getAllOrders);

// GET a single order by ID
router.get('/:id', getOrderById);

// POST create a new order
router.post('/', createOrder);

// PUT update an order by ID
router.put('/:id', updateOrder);

// DELETE an order by ID
router.delete('/:id', deleteOrder);

export default router;