import connection from  "../index.js"

class CustomerQuery{
    async createCustomer(customer) {
        try {
            const query = 'INSERT INTO customers SET ?';
            const [results] = await connection.promise().query(query, customer);
            return results.insertId;
        } catch (error) {
            throw Error ("Error creating customer:" + error.message)
        }
    }

    async getCustomers() {
        try {
            const query = 'SELECT * FROM `customers`';
            const [results] = await connection.promise().query(query);
            return results;
        } catch (error) {
            throw Error ("Error getting review:" + error.message)
        }
    }
}
const customerQuery = new CustomerQuery()
export default customerQuery