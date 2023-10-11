import { Request, Response, NextFunction } from 'express'
import { checkSchema } from 'express-validator'
import databaseService from '~/services/database.services'
import { validate } from '~/utils/validation'

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
export const registerValidator = validate(
  checkSchema({
    email: {
      notEmpty: true,
      trim: true,
      isEmail: true,
      errorMessage: 'Invalid Email',
      custom: {
        options: (value) => {
          return databaseService.admin.findOne({ school_email: value }).then((user) => {
            if (user) {
              return Promise.reject('Email already in use')
            }
          })
        }
      }
    },
    password: {
      notEmpty: {
        errorMessage: 'Password field is required!'
      },
      isLength: {
        options: {
          min: 6,
          max: 20
        },
        errorMessage: 'Min,Max length are 6,20'
      }
    }
  })
)
