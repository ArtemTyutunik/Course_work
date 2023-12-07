import connection from  "../index.js"
import orderQuery from "./order.js";
import customerQuery from "./customer.js";

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

     generateRandomDeviceModel() {
        const brands = ["Apple", "Samsung", "Google", "Huawei"];
        const adjectives = ["Pro", "Ultra", "Max", "Lite", "Plus", "X"];

        const randomBrand = brands[Math.floor(Math.random() * brands.length)];
        const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];

        return `${randomBrand} ${randomAdjective}`.trim();
    }

    async getLastTypeID() {
        try {
            const query = 'SELECT * FROM device_types ORDER BY type_id DESC LIMIT 1';
            const [results] = await connection.promise().query(query);
            return (results[0])
        } catch (error) {
            throw Error ("Error getting:" + error.message)
        }
    }

    async createOne() {
        try {
            const {type_id} = await this.getLastTypeID()
            const {customer_id} = await customerQuery.getLastID()
            const device = {
                device_type: type_id,
                device_model: this.generateRandomDeviceModel(),
                customer_id
            }
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