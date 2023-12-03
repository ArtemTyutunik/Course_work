import { Router } from "express";
import deviceController from "../controllers/deviceController.js";

const deviceRouter = Router()

deviceRouter.post('/create', deviceController.createDevice)
deviceRouter.get('/get_all', deviceController.getDevices)

export default deviceRouter

