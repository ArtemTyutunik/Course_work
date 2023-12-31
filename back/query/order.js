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
            throw Error ("Error creating:" + error.message)
        }
    }

    async getOrders() {
        try {
            const query = 'SELECT * FROM `order`';
            const [results] = await connection.promise().query(query);
            return results;
        } catch (error) {
            throw Error ("Error getting orders:" + error.message)
        }
    }
    async getOrderByID(ID) {
        try {
            const query =
                'SELECT\n' +
                '    `order`.order_started,\n' +
                '    `order`.order_completed,\n' +
                '    `order`.order_start_date,\n' +
                '    `order`.order_complete_date,\n' +
                '    `device_types`.`type`,\n' +
                '    `devices`.device_model,\n' +
                '    `customers`.customer_name, \n' +
                '    `customers`.customer_email,\n' +
                '    `customers`.customer_phone_number \n' +
                'FROM `order`\n' +
                'JOIN `devices` ON `order`.device_id = `devices`.device_id\n' +
                'LEFT JOIN `device_types` ON `devices`.device_type = `device_types`.type_id\n' +
                'LEFT JOIN `customers` ON `order`.customer_id = `customers`.customer_id WHERE `order`.order_id = ?';
            const [results] = await connection.promise().query(query, ID);
            return results;
        } catch (error) {
            throw Error ("Error getting order:" + error.message)
        }
    }

    async updateOrderByID(changedOrder, ID){
        try {
            const columnsToUpdate = Object.keys(changedOrder);
            const setValues = columnsToUpdate.map(column => `${column} = ?`).join(', ');
            const values = Object.values(changedOrder);
            const query = `UPDATE \`order\` SET ${setValues} WHERE order_id = ?`;
            const updateValues = [...values, ID];
            await connection.promise().query(query, updateValues);
        } catch (error) {
            throw Error ("Error changing order:" + error.message)
        }
    }

    async updateOrderChangingDeviceID(ID) {
        try {
            const query = ' UPDATE `order` SET device_id = 1 WHERE device_id = ?';
            const [results] = await connection.promise().query(query, ID);
            return results;
        } catch (error) {
            throw Error ("Error changing orders:" + error.message)
        }
    }

    async getLastID() {
        try {
            const query = 'SELECT * FROM `order` ORDER BY order_id DESC LIMIT 1';
            const [results] = await connection.promise().query(query);
            return (results[0])
        } catch (error) {
            throw Error ("Error getting:" + error.message)
        }
    }
}
const orderQuery = new OrderQuery()
export default orderQuery


