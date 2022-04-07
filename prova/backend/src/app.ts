import express from 'express'
import { provaRouter } from './presentation/route/prova.route';


const app = express();

app.use(express.json())

app.get('/', (_, res) => {
    res.json({
        app: 'prova-server',
        version: '1.0.0'
    })
})

app.use('/api/prova', provaRouter)

app.listen(3333, () => {
    console.log('listening on localhost:3333')
})