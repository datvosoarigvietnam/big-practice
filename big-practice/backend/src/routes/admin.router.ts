import express from 'express'
import { loginController, registerController } from '~/controllers/admin.controllers'
import { registerValidator, testLogin } from '~/middlewares/login.middlewares'

const adminRouter = express.Router()

adminRouter.get('/', testLogin, loginController)
adminRouter.post('/', registerValidator, registerController)

export default adminRouter
