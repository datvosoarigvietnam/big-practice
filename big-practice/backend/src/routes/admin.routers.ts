import express from 'express'
import { registerController, checkemailController } from '~/controllers/admin.controllers'
import { registerValidator, emailValidator } from '~/middlewares/register.middlewares'

const adminRouter = express.Router()

// adminRouter.get('/', testLogin, loginController)
adminRouter.post('/', registerValidator, registerController)
adminRouter.post('/checkemail', emailValidator, checkemailController)
export default adminRouter
