import express, {Request, Response} from 'express'
import path from 'path'
import mustacheExpress from 'mustache-express'
import dotenv from "dotenv";
import mainRouts from './routes/index'

dotenv.config()

const server = express()

server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustacheExpress())

server.use(express.static(path.join(__dirname, '../public')))

server.use(express.urlencoded({extended: true}))

server.use(mainRouts)

server.use((req: Request, resp: Response) => {
    resp.status(404).send('Página não encontrada')
})

server.listen(process.env.PORT)