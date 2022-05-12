import express, {Request, Response} from 'express'
import path from 'path'
import mainRouts from './routes/index'

const server = express()

server.use(express.static(path.join(__dirname, '../public')))

server.use(mainRouts)

server.use((req: Request, resp: Response) => {
    resp.status(404).send('Página não encontrada')
})

server.listen(80)