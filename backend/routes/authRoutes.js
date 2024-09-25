import { Router } from "express";
import { registerValidation, loginValidation } from "../validations.js"
import validationErrors from "../middleware/validationErrors.js";
import AuthConroller from "../controllers/AuthController.js"

const router = Router()

router.post('/register', registerValidation, validationErrors, AuthConroller.register)
router.post('/login', loginValidation, validationErrors, AuthConroller.login)

export default router