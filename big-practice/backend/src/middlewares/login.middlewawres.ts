import { checkSchema } from 'express-validator'
import adminService from '~/services/admin.services'
import databaseService from '~/services/database.services'
import { hashPassword } from '~/utils/crypto'
import { validate } from '~/utils/validation'

export const loginValidator = validate(
  checkSchema({
    emailSchool: {
      isEmail: {
        errorMessage: 'Invalid Email'
      },
      custom: {
        options: async (value: string, { req }) => {
          const user = await databaseService.admin.findOne({
            school_email: value,
            password: hashPassword(req.body.password)
          })

          if (user === null) {
            throw new Error('Email or password is incorrect!')
          }
          req.user = user
          return true
        }
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
    }
  })
)
