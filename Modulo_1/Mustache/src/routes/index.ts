import { Router, Request, Response } from "express"

const router = Router()

router.get('/', (req: Request, res: Response )=> {
    res.send('Olá mundo')
})

router.get('/sobre', (req: Request, res: Response )=> {
    res.send('Página institucional sobre a empresa')
})

export default router;