import Admin from '~/models/schemas/Admin.schema'
import databaseService from './database.services'

export class AdminService {
  async register(payload: { email: string; password: string }) {
    const { email, password } = payload
    const result = await databaseService.admin.insertOne(new Admin({ school_email: email, password }))
    return result
  }
}
const adminService = new AdminService()
export default adminService
