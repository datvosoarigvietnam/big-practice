import { Request, Response } from 'express'
import adminService from '~/services/admin.services'

export const loginController = (req: Request, res: Response) => {
  res.send('login success')
}

export const registerController = async (req: Request, res: Response) => {
  const { email, password } = req.body
  try {
    const result = await adminService.register({ email, password })
    return res.json({
      message: 'Register Success',
      data: result
    })
  } catch (error) {
    return res.status(400).json({
      message: 'Register Error'
    })
  }
}
