import { checkSchema } from 'express-validator'
import adminService from '~/services/admin.services'
import { validate } from '~/utils/validation'

export const registerValidator = validate(
  checkSchema({
    'name.adminName': {
      notEmpty: {
        errorMessage: 'Admin name is required'
      }
    },
    'name.emailSchool': {
      isEmail: {
        errorMessage: 'Invalid Email'
      },
      custom: {
        options: async (value: string) => {
          const result = await adminService.checkEmailExist(value)
          console.log(result)

          if (!result) {
            throw new Error('Email already exits')
          }
          return true
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
export const emailValidator = validate(
  checkSchema({
    emailSchool: {
      isEmail: {
        errorMessage: 'Invalid Email'
      },
      custom: {
        options: async (value: string) => {
          const result = await adminService.checkEmailExist(value)
          console.log('result', result)

          if (result) {
            throw new Error('Email already exits')
          }
          return true
        }
      }
    }
  })
)
