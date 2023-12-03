import { Router } from "express";
import reviewController from "../controllers/ReviewController.js";

const reviewRouter = Router()

reviewRouter.post('/create', reviewController.createReview)

export default reviewRouter

