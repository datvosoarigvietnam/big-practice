import { MongoClient, Db, Collection } from 'mongodb'
import { IAdmin } from '~/models/schemas/Admin.schema'
import { IRefreshToken } from '~/models/schemas/RefreshToken.schema'
// import { ITeacher } from '~/models/schemas/Teacher.schema'
const uri = 'mongodb+srv://datvodat288:chamlohochanh123@bigpractice.ywve0xf.mongodb.net/?retryWrites=true&w=majority'

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

class DatabaseService {
  private client: MongoClient
  private db: Db
  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db('big-practice')
  }
  async connect() {
    try {
      // Send a ping to confirm a successful connection
      await this.db.command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } catch {
      await this.client.close()
    }
  }
  get admin(): Collection<IAdmin> {
    return this.db.collection('admin')
  }
  get refreshToken(): Collection<IRefreshToken> {
    return this.db.collection('refresh_token')
  }
}
const databaseService = new DatabaseService()
export default databaseService
