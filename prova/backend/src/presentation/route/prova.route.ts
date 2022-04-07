import express from 'express'

const provaRouter = express.Router()

provaRouter.get('/', (_, res) => {
    res.send('prova Get OK')
})

provaRouter.post('/', (_, res) => {
    res.send('prova Post OK')
})

export { provaRouter }