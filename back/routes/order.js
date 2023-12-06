import { Router } from "express";
import orderController from "../controllers/orderController.js";

const orderRouter = Router()

orderRouter.post('/create', orderController.createOrder)
orderRouter.get('/get_all', orderController.getOrders)
orderRouter.get('/get/:ID', orderController.getOrderByID)
orderRouter.put('/update/:ID', orderController.updateOrderByID)
export default orderRouter

