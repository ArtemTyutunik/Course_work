import connection from  "../index.js"

class WorkerQuery{
    async createWorker(worker) {
        try {
            const query = 'INSERT INTO workers SET ?';
            const [results] = await connection.promise().query(query, worker);
            return results.insertId;
        } catch (error) {
            throw Error ("Error creating worker:" + error.message)

        }
    }
}
const workerQuery = new WorkerQuery()
export default workerQuery