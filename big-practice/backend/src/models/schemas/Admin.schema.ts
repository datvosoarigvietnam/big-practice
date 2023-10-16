import { ObjectId } from 'mongodb'
export interface IAdmin {
  _id?: ObjectId
  admin_name?: string
  school_name?: string
  school_email: string
  password: string
  number_staff?: number
  school_address?: string
  role?: string
}

class Admin {
  _id: ObjectId
  admin_name: string
  school_name: string
  school_email: string
  password: string
  number_staff: number
  school_address: string
  role: string
  constructor(admin: IAdmin) {
    this._id = admin._id || new ObjectId()
    this.admin_name = admin.admin_name || ''
    this.school_email = admin.school_email
    this.school_name = admin.school_name || ''
    this.password = admin.password
    this.number_staff = admin.number_staff || 0
    this.school_address = admin.school_address || ''
    this.role = 'ADMIN'
  }
}

export default Admin
