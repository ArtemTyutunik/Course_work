import connection from  "../index.js"

class ReviewQuery{
    async createReview(review) {
        try {
            const query = 'INSERT INTO `review` SET ?';
            const [results] = await connection.promise().query(query, review);
            return results.insertId;
        } catch (error) {
            throw Error ("Error creating review:" + error.message)
        }
    }

    async getReviews() {
        try {
            const query = 'SELECT * FROM `review`';
            const [results] = await connection.promise().query(query);
            return results;
        } catch (error) {
            throw Error ("Error getting reviews:" + error.message)
        }
    }

    async getReviewByID(ID) {
        try {
            const query = 'SELECT text, rate, customer_name, customer_email, customer_phone_number FROM review LEFT JOIN customers USING(customer_id) WHERE review.review_id = ?';
            const [results] = await connection.promise().query(query, ID);
            return results;
        } catch (error) {
            throw Error ("Error getting review:" + error.message)
        }
    }
}
const reviewQuery = new ReviewQuery()
export default reviewQuery