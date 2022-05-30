import { Router, Request, Response } from "express"

import * as homeController from "../controllers/homeController";
import * as info  from "../controllers/infoController";
import * as user from "../controllers/userController";

const router = Router()

router.get('/', homeController.home)

router.get('/contato', info.contato )
router.get('/sobre', info.sobre)

router.get('/nome', user.nome)
router.get('/idade', user.idadeForm)
router.post('/idade-resultado', user.idadeAction)

export default router;