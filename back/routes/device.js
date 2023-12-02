import { Router } from "express";
import deviceController from "../controllers/deviceController.js";

const deviceRouter = Router()

deviceRouter.post('/create', deviceController.createDevice)

export default deviceRouter

