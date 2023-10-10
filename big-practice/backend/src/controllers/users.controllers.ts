import { Request, Response } from 'express'

export const loginController = (req: Request, res: Response) => {
  res.send('login success')
}
