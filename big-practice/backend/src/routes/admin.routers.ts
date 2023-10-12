import express from 'express'
import { registerController, checkemailController, loginController } from '~/controllers/admin.controllers'
import { loginValidator } from '~/middlewares/login.middlewawres'
import { registerValidator, emailValidator } from '~/middlewares/register.middlewares'

const adminRouter = express.Router()

// adminRouter.get('/', testLogin, loginController)
adminRouter.post('/register', registerValidator, registerController)
adminRouter.post('/login', loginValidator, loginController)
adminRouter.post('/checkemail', emailValidator, checkemailController)
export default adminRouter
