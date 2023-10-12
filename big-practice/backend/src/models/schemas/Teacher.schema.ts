import { ObjectId } from 'mongodb'

enum EGender {
  MALE = 'Male',
  FEMALE = 'Female',
  Other = 'Other'
}

export interface ITeacher {
  _id: ObjectId
  full_name: string
  email: string
  password: string
  gender: EGender
  class: string
  subject: string[]
  phone_number: string
}

class Teacher {
  _id: ObjectId
  full_name: string
  email: string
  password: string
  gender: EGender
  class: string
  subject: string[]
  phone_number: string
  constructor(user: ITeacher) {
    this._id = user._id
    this.full_name = user.full_name
    this.email = user.email
    this.password = user.password
    this.gender = user.gender
    this.class = user.class
    this.subject = user.subject
    this.phone_number = user.phone_number
  }
}

export default Teacher
