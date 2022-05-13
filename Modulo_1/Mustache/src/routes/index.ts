import { Router, Request, Response } from "express"

const router = Router()

router.get('/', (req: Request, res: Response )=> {
    let user = {
        name: 'Bonieky',
        age: 90
    }


    res.render('home', {
        user
    })
})

router.get('/sobre', (req: Request, res: Response )=> {
    res.send('Página institucional sobre a empresa')
})

export default router;