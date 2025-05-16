import routes from './routes';
import express from 'express'
import cors from 'cors'


const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', routes);

app.get('/api/ping', (_req, res) => {
  res.json({ message: 'pong' })
})

export default app
