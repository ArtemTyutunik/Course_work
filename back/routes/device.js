import { Router } from "express";
import deviceController from "../controllers/deviceController.js";

const deviceRouter = Router()

deviceRouter.post('/create', deviceController.createDevice)
deviceRouter.get('/get_all', deviceController.getDevices)
deviceRouter.delete('/delete/:ID', deviceController.deleteDeviceByID)

export default deviceRouter

