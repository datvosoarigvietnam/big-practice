import Admin from '~/models/schemas/Admin.schema'
import databaseService from './database.services'
import { hashPassword } from '~/utils/crypto'
import { signToken } from '~/utils/jwts'
import { TokenType } from '~/constants/enum'

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
  private async signAccessToken(user_id: string) {
    return signToken({
      payload: {
        user_id,
        type: TokenType.AccessToken
      },
      options: {
        expiresIn: '2h'
      }
    })
  }
  private async signRefreshToken(user_id: string) {
    return signToken({
      payload: {
        user_id,
        type: TokenType.RefeshToken
      }
    })
  }
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
        password: hashPassword(password),
        admin_name: adminName,
        school_name: schoolName,
        school_address: schoolAddress,
        number_staff: parseInt(numberOfStaff)
      })
    )
    const user_id = result.insertedId.toString()
    const [access_token, refresh_token] = await Promise.all([
      this.signAccessToken(user_id),
      this.signRefreshToken(user_id)
    ])
    return {
      access_token,
      refresh_token
    }
  }
  async checkEmailExist(email: string) {
    const user = await databaseService.admin.findOne({ school_email: email })
    return Boolean(user)
  }
}
const adminService = new AdminService()
export default adminService
