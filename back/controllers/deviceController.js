import deviceQuery from "../query/device.js";

class DeviceController{
    async createDevice(req, res){
        try {
            let device = req.body;
            const Id = await deviceQuery.createDevice(device)
            res.status(200).json(Id)
        } catch (e) {
            console.error(e);
            res.status(404).end()
        }
        return res
    }

    async getDevices(req, res){
        try {
            const result = await deviceQuery.getDevices()
            res.status(200).json(result)
        } catch (e) {
            console.error(e);
            res.status(404).end()
        }
        return res
    }

    async deleteDeviceByID(req, res){
        try {
            const {ID} = req.params;
            await deviceQuery.deleteDeviceByID(ID)
            res.status(200).end()
        } catch (e) {
            console.error(e);
            res.status(404).end()
        }
        return res
    }
}
const deviceController = new DeviceController()
export default deviceController
