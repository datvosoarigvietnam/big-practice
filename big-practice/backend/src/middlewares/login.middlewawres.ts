import { checkSchema } from 'express-validator'
import adminService from '~/services/admin.services'
import databaseService from '~/services/database.services'
import { hashPassword } from '~/utils/crypto'
import { verifyToken } from '~/utils/jwts'
import { validate } from '~/utils/validation'

export const loginValidator = validate(
  checkSchema(
    {
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
    },
    ['body']
  )
)
export const accessTokenValidator = validate(
  checkSchema(
    {
      Authorization: {
        notEmpty: {
          errorMessage: 'Access is required'
        },
        custom: {
          options: async (value, { req }) => {
            const access_token = value.replace('Bearer ', '')
            if (access_token === '') {
              throw new Error('Access token is valid')
            }
            const decode_authorization = await verifyToken(access_token)
            req.decode_authorization = decode_authorization
            return true
          }
        }
      }
    },
    ['headers']
  )
)
