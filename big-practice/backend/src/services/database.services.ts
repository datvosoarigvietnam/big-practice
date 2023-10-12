import { MongoClient, Db, Collection } from 'mongodb'
<<<<<<< HEAD
=======
import { IAdmin } from '~/models/schemas/Admin.schema'
>>>>>>> efd3bb83e4c2059e3904e4512eaaa3270bbf82be
import { ITeacher } from '~/models/schemas/Teacher.schema'
const uri = 'mongodb+srv://datvodat288:chamlohochanh123@bigpractice.ywve0xf.mongodb.net/?retryWrites=true&w=majority'

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

class DatabaseService {
  private client: MongoClient
  private db: Db
  constructor() {
    this.client = new MongoClient(uri)
<<<<<<< HEAD
    this.db = this.client.db('big-pratice')
=======
    this.db = this.client.db('big-practice')
>>>>>>> efd3bb83e4c2059e3904e4512eaaa3270bbf82be
  }
  async connect() {
    try {
      // const db = this.client.db('admin')
      // Send a ping to confirm a successful connection
      await this.db.command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
<<<<<<< HEAD
    } finally {
      // Ensures that the client will close when you finish/error
      await this.client.close()
    }
  }
  get teacher(): Collection<ITeacher> {
    return this.db.collection('teacher')
=======
    } catch {
      // Ensures that the client will close when you finish/error
      // await this.client.close()
    }
  }
  get admin(): Collection<IAdmin> {
    return this.db.collection('admin')
>>>>>>> efd3bb83e4c2059e3904e4512eaaa3270bbf82be
  }
}
const databaseService = new DatabaseService()
export default databaseService
