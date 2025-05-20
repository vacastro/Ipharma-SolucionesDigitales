import routes from './routes';
import express from 'express'
import cors from 'cors';

import { setupSwagger } from './swagger';



const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', routes);

setupSwagger(app); 

app.get('/api/ping', (_req, res) => {
  res.json({ message: 'pong' })
})

export default app
