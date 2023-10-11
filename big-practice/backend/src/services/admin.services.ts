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
    // return true
    console.log('result in admin service', result)

    return result
  }
}
const adminService = new AdminService()
export default adminService
