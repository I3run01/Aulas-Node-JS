import express, {Request, Response} from 'express'
import path from 'path'
import mustacheExpress from 'mustache-express'
import mainRouts from './routes/index'

const server = express()

server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustacheExpress())

server.use(express.static(path.join(__dirname, '../public')))

server.use(mainRouts)

server.use((req: Request, resp: Response) => {
    resp.status(404).send('Página não encontrada')
})

server.listen(80)