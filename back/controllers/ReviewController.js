import reviewQuery from "../query/review.js";

class ReviewController{
    async createReview(req, res){
        try {
            let review = req.body;
            const Id = await reviewQuery.createReview(review)
            res.status(200).json(Id)
        } catch (e) {
            console.error(e);
            res.status(404).end()
        }
        return res
    }
}
const reviewController = new ReviewController()
export default reviewController