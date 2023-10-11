import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import adminRouter from './routes/admin.routers'
import databaseService from './services/database.services'

const app = express()

app.use(
  cors({
    credentials: true
  })
)
app.use(bodyParser.json())

app.use('/admin', adminRouter)

app.get('/', (req, res) => {
  res.send('asdasdasdsd')
})
databaseService.connect()
app.listen(8080, () => {
  console.log('Server is runing on Port 8080')
})
