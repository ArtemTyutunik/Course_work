import orderQuery from "../query/order.js";

class OrderController{
    async createOrder(req, res){
        try {
            const order = req.body;
            const Id = await orderQuery.createOrder(order)
            res.status(200).json(Id)
        } catch (e) {
            console.error(e);
            res.status(404).end()
        }
        return res
    }

    async getOrders(req, res){
        try {
            const result = await orderQuery.getOrders()
            res.status(200).json(result)
        } catch (e) {
            console.error(e);
            res.status(404).end()
        }
        return res
    }

    async getOrderByID(req, res){
        try {
            const {ID} = req.params;
            const result = await orderQuery.getOrderByID(ID)
            res.status(200).json(result)
        } catch (e) {
            console.error(e);
            res.status(404).end()
        }
        return res
    }

    async updateOrderByID(req, res){
        try {
            const {ID} = req.params;
            const changedOrder = req.body;
            await orderQuery.updateOrderByID(changedOrder, ID)
            res.status(200).json()
        } catch (e) {
            console.error(e);
            res.status(404).end()
        }
        return res
    }
}
const orderController = new OrderController()
export default orderController