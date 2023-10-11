import { Request, Response, NextFunction } from 'express'
import { checkSchema } from 'express-validator'
import adminService from '~/services/admin.services'
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
    'name.adminName': {
      notEmpty: {
        errorMessage: 'Admin Name is required'
      }
    },
    'name.emailSchool': {
      isEmail: {
        errorMessage: 'Invalid Email'
      },
      custom: {
        options: async (value) => {
          return databaseService.admin.findOne({ school_email: value }).then((user) => {
            if (user) {
              console.log('Is Here??')
              return Promise.reject('Email already in use')
            }
          })
        }
      }
    },
    'name.schoolName': {
      notEmpty: {
        errorMessage: 'School Name is required'
      }
    },
    numberOfStaff: {
      isNumeric: {
        errorMessage: 'Number of Staff must be numeric'
      }
    },
    password: {
      notEmpty: {
        errorMessage: 'Password is required'
      },
      isLength: {
        options: { min: 6, max: 20 },
        errorMessage: 'Password must be between 6 and 20 characters'
      }
    },
    schoolAddress: {
      notEmpty: {
        errorMessage: 'School Address is required'
      }
    }
  })
)
