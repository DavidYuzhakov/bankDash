import { body } from "express-validator";

export const registerValidation = [
  body('fullName', 'The name must be at least 5 char').isLength({ min: 5 }),
  body('email', 'Invalid email format').isEmail(),
  body('password', 'The password must be at least 8 char').isLength({ min: 8 }),
  body('avatar', 'The avatar must be url').isURL().optional()
]

export const loginValidation = [
  body('email', 'Invalid email format').isEmail(),
  body('password', 'The password must be at least 8 char').isLength({ min: 8 })
]