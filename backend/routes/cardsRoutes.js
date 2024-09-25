import { Router } from "express";
import CardsController from "../controllers/CardsController.js";

const router = Router()

router.get('/list', CardsController.getAllCards)

export default router