import customerQuery from "../query/customer.js";

class CustomerController{
    async createCustomer(req, res){
        try {
            let customer = req.body;
            const Id = await customerQuery.createCustomer(customer)
            res.status(200).json(Id)
        } catch (e) {
            console.error(e);
            res.status(404).end()
        }
        return res
    }

    async getCustomers(req, res){
        try {
            const result = await customerQuery.getCustomers()
            res.status(200).json(result)
        } catch (e) {
            console.error(e);
            res.status(404).end()
        }
        return res
    }
}
const customerController = new CustomerController()
export default customerController
