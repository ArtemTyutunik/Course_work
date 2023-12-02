import { Router } from "express";
import workerController from "../controllers/WorkerController.js";

const workerRouter = Router()

workerRouter.post('/create', workerController.createWorker)

export default workerRouter

