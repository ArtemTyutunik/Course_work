import { Router } from "express";
import reviewController from "../controllers/ReviewController.js";

const reviewRouter = Router()

reviewRouter.post('/create', reviewController.createReview)
reviewRouter.post('/create_one', reviewController.createOne)
reviewRouter.get('/get_all', reviewController.getReviews)
reviewRouter.get('/get/:ID', reviewController.getReviewByID)
export default reviewRouter

