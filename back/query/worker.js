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

    async getWorkers() {
        try {
            const query = 'SELECT * FROM `workers`';
            const [results] = await connection.promise().query(query);
            return results;
        } catch (error) {
            throw Error ("Error getting workers:" + error.message)

        }
    }

    async updateSalary() {
        try {
            const min = 10000;
            const max = 100000;
            const newSalary = Math.floor(Math.random() * (max - min + 1)) + min;
            const workers = await this.getWorkers()
            let {worker_id} = workers[workers.length - 1]
            if (worker_id === 2) worker_id--;
            const query = `UPDATE workers SET worker_salary = ${newSalary} WHERE worker_id = ${worker_id}`;
            const [results] = await connection.promise().query(query);
            return results;
        } catch (error) {
            throw Error ("Error updating worker:" + error.message)
        }
    }

}
const workerQuery = new WorkerQuery()
export default workerQuery