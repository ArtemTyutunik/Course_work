import { Router } from "express";
import workerController from "../controllers/WorkerController.js";

const workerRouter = Router()

workerRouter.post('/create', workerController.createWorker)
workerRouter.get('/get_all', workerController.getWorkers)
export default workerRouter

