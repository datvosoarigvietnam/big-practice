import { ObjectId } from 'mongodb'

export interface IRefreshToken {
  _id?: ObjectId
  token: string
  create_at?: Date
  user_id: ObjectId
}

export default class RefeshToken {
  _id?: ObjectId
  token: string
  create_at: Date
  user_id: ObjectId
  constructor({ _id, token, create_at, user_id }: IRefreshToken) {
    ;(this._id = _id), (this.token = token), (this.create_at = create_at || new Date()), (this.user_id = user_id)
  }
}
