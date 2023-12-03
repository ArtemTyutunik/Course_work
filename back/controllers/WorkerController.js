import workerQuery from "../query/worker.js";

class WorkerController{
    async createWorker(req, res){
        try {
            let worker = req.body;
            const Id = await workerQuery.createWorker(worker)
            res.status(200).json(Id)
        } catch (e) {
            console.error(e);
            res.status(404).end()
        }
        return res
    }


    async getWorkers(req, res){
        try {
            const result = await workerQuery.getWorkers()
            res.status(200).json(result)
        } catch (e) {
            console.error(e);
            res.status(404).end()
        }
        return res
    }
}
const workerController = new WorkerController()
export default workerController