import connection from  "../index.js"

class ReviewQuery{
    async createReview(review) {
        try {
            const query = 'INSERT INTO `review` SET ?';
            const [results] = await connection.promise().query(query, review);
            return results.insertId;
        } catch (error) {
            throw Error ("Error creating order:" + error.message)
        }
    }
}
const reviewQuery = new ReviewQuery()
export default reviewQuery