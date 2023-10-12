import { Request, Response, NextFunction } from 'express'
import adminService from '~/services/admin.services'

export const registerController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      name: { adminName, emailSchool, schoolName },
      password,
      numberOfStaff,
      schoolAddress
    } = req.body

    const result = await adminService.register({
      name: { adminName, emailSchool, schoolName },
      password,
      numberOfStaff,
      schoolAddress
    })

    return res.json({
      message: 'Register Success',
      data: result
    })
  } catch (error) {
    next(error)
  }
}
export const checkemailController = (req: Request, res: Response) => {
  return res.json({
    message: 'Email is already'
  })
}
