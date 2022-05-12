import express, {Request, Response} from "express";
import mainRoutes from './routes/index'
import painelRoutes from './routes/painel'

const server = express()

server.use('/', mainRoutes)

server.use('/painel', painelRoutes)

server.use((req: Request, resp: Response) => {
    resp.status(404).send('Página não encontrada')
})


server.listen(80)