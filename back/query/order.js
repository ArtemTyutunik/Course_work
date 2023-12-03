import connection from  "../index.js"

class OrderQuery{
    async createOrder(order) {
        try {
            const query = 'INSERT INTO `order` SET ?';
            const [results] = await connection.promise().query(query, order);
            const {worker_id, order_id = results.insertId} = order
            await this.createM2M({worker_id, order_id})
            return results.insertId;
        } catch (error) {
            throw Error ("Error creating order:" + error.message)
        }
    }

    async createM2M(order){
        try {
            const query = 'INSERT INTO `m2m_workers_orders` SET ?';
            await connection.promise().query(query, order);
        } catch (error) {
            throw Error ("Error creating order:" + error.message)
        }
    }
}
const orderQuery = new OrderQuery()
export default orderQuery