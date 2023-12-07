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
    generateRandomPhoneNumber() {
        const areaCode = Math.floor(Math.random() * (999 - 100 + 1) + 100);
        const firstPart = Math.floor(Math.random() * (999 - 100 + 1) + 100);
        const secondPart = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
        return `+1-${areaCode}-${firstPart}-${secondPart}`;
    }

    generateRandomName() {
        const firstNames = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry"]; // Список имён
        const lastNames = ["Adams", "Brown", "Clark", "Davis", "Edwards", "Ford", "Garcia", "Harris"]; // Список фамилий

        const randomFirstNameIndex = Math.floor(Math.random() * firstNames.length);
        const randomLastNameIndex = Math.floor(Math.random() * lastNames.length);

        const firstName = firstNames[randomFirstNameIndex];
        const lastName = lastNames[randomLastNameIndex];

        return `${firstName} ${lastName}`;
    }

    async createOne() {
        try {
            const customer_name = this.generateRandomName()
            const customer = {
                customer_name: customer_name,
                customer_email: customer_name.replace(/\s/g, '') + "@gmail.com",
                customer_phone_number: this.generateRandomPhoneNumber()
            }
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
            throw Error ("Error getting customers:" + error.message)
        }
    }

    async getLastID() {
        try {
            const query = 'SELECT * FROM customers ORDER BY customer_id DESC LIMIT 1';
            const [results] = await connection.promise().query(query);
            return (results[0])
        } catch (error) {
            throw Error ("Error getting: " + error.message)
        }
    }
}
const customerQuery = new CustomerQuery()
export default customerQuery