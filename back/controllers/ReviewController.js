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

    async createOne(req, res){
        try {
            await reviewQuery.createOne()
            res.status(200).json()
        } catch (e) {
            console.error(e);
            res.status(404).end()
        }
        return res
    }

    async getReviews(req, res){
        try {
            const result = await reviewQuery.getReviews()
            res.status(200).json(result)
        } catch (e) {
            console.error(e);
            res.status(404).end()
        }
        return res
    }

    async getReviewByID(req, res){
        try {
            const {ID} = req.params
            const result = await reviewQuery.getReviewByID(ID)
            res.status(200).json(result)
        } catch (e) {
            console.error(e);
            res.status(404).end()
        }
        return res
    }
}
const reviewController = new ReviewController()
export default reviewController