import orderQuery from "../query/order.js";

class OrderController{
    async createOrder(req, res){
        try {
            let order = req.body;
            const Id = await orderQuery.createOrder(order)
            res.status(200).json(Id)
        } catch (e) {
            console.error(e);
            res.status(404).end()
        }
        return res
    }
}
const orderController = new OrderController()
export default orderController