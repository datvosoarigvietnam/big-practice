import express from 'express'
import { loginController } from '~/controllers/users.controllers'
import { testLogin } from '~/middlewares/login.middlewares'

const adminRouter = express.Router()

adminRouter.get('/', testLogin, loginController)

export default adminRouter
