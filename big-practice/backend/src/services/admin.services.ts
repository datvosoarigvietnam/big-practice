import Admin from '~/models/schemas/Admin.schema'
import databaseService from './database.services'

interface IPayload {
  name: {
    adminName: string
    emailSchool: string
    schoolName: string
  }
  password: string
  numberOfStaff: string
  schoolAddress: string
}
export class AdminService {
  async register(payload: IPayload) {
    const {
      name: { adminName, emailSchool, schoolName },
      password,
      numberOfStaff,
      schoolAddress
    } = payload

    const result = await databaseService.admin.insertOne(
      new Admin({
        school_email: emailSchool,
        password: password,
        admin_name: adminName,
        school_name: schoolName,
        school_address: schoolAddress,
        number_staff: parseInt(numberOfStaff)
      })
    )
    return result
  }
  async checkEmailExist(email: string) {
    console.log('email', email)
    const user = await databaseService.admin.findOne({ school_email: email })
    console.log('user', user)
    return Boolean(user)
  }
}
const adminService = new AdminService()
export default adminService
