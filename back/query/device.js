import connection from  "../index.js"
import orderQuery from "./order.js";

class DeviceQuery{
    async createDevice(device) {
        try {
            const query = 'INSERT INTO devices SET ?';
            const [results] = await connection.promise().query(query, device);
            return results.insertId;
        } catch (error) {
            throw Error ("Error creating device:" + error.message)
        }
    }

    async getDevices() {
        try {
            const query = 'SELECT * FROM `devices`';
            const [results] = await connection.promise().query(query);
            return results;
        } catch (error) {
            throw Error ("Error getting device:" + error.message)
        }
    }

    async deleteDeviceByID(ID) {
        try {
            await orderQuery.updateOrderChangingDeviceID(ID)
            const query = 'DELETE FROM `devices` WHERE device_id = ?';
            const [results] = await connection.promise().query(query, ID);
            console.log(results);
        } catch (error) {
            throw Error ("Error deleting device:" + error.message)
        }
    }




}
const deviceQuery = new DeviceQuery()
export default deviceQuery