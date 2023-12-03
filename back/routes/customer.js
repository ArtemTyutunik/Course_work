import { Router } from "express";
import customerController from "../controllers/CustomerController.js";

const customerRouter = Router()

customerRouter.post('/create', customerController.createCustomer)
customerRouter.get('/get_all', customerController.getCustomers)


export default customerRouter