import { Router } from "express";
import workerController from "../controllers/WorkerController.js";

const workerRouter = Router()

workerRouter.post('/create', workerController.createWorker)
workerRouter.put('/update', workerController.updateSalary)
workerRouter.get('/get_all', workerController.getWorkers)
export default workerRouter

