import connection from  "../index.js"

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
}
const deviceQuery = new DeviceQuery()
export default deviceQuery