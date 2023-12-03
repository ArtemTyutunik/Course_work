import { Router } from "express";
import orderController from "../controllers/orderController.js";

const orderRouter = Router()

orderRouter.post('/create', orderController.createOrder)
orderRouter.get('/get_all', orderController.getOrders)
orderRouter.get('/get', orderController.getOrderByID)
export default orderRouter

