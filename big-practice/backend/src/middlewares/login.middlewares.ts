import { Request, Response, NextFunction } from 'express'

export const testLogin = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body)
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(404).json({
      message: 'Missing email or password'
    })
  }
  next()
}
