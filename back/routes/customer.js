import { Router } from "express";
import customerController from "../controllers/CustomerController.js";

const customerRouter = Router()

customerRouter.post('/create', customerController.createCustomer)
customerRouter.post('/create_one', customerController.createOne)
customerRouter.get('/get_all', customerController.getCustomers)


export default customerRouter