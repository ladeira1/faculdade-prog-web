import express from 'express'
import { MongoHelper } from './infra/database/mongo-helper';
import { provaRouter } from './presentation/route/prova.route';


const app = express();

app.use(express.json())

MongoHelper.connect(process.env.DATABASE_URL).then(async () => {
    app.get('/', (_, res) => {
        res.json({
            app: 'prova-server',
            version: '1.0.0'
        })
    })
    
    app.use('/api/prova', provaRouter)
    
    app.listen(3333, () => {
        console.log('listening at localhost:3333')
    })
}).catch(err => console.log('Error connection to database', err))

