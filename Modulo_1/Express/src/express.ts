/*
import express, {Request, Response} from 'express'

const server = express()

server.get('/', (req, res) => {
    res.send('Olá Mundo')
})

server.get('/contato', (req, res) => {
    res.send('Página de contato')
})

server.get('/noticia/:slug', (req, res) => {
    let slug: string = req.params.slug
    res.send(`Página de noticia: ${slug}`)
})

server.get('/voo/:origem-:destino', (req, res) => {
    let {origem, destino} = req.params
    res.send(`Procurando voo de ${origem.toUpperCase()} até ${destino.toUpperCase()}`)
})

server.listen(3000)

//GET -> manda as informações pela URL
//POST -> manda as informações internamente

*/