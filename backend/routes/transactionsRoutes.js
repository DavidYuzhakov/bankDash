import { Router } from "express";
import transactionsController from "../controllers/transactionsController.js";

const router = Router()

router.get('/recent', transactionsController.getRecent)

export default router