import { Router } from "express";
import CardsController from "../controllers/CardsController.js";
import cookieJwtAuth from "../middleware/cookieJwtAuth.js";

const router = Router()

router.get('/list', cookieJwtAuth, CardsController.getAllCards)

export default router