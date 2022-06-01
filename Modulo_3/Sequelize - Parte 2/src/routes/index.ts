import { Router, Request, Response } from "express"

import * as homeController from "../controllers/homeController";
import { exercicio } from "../controllers/homeController";
import { exercicioResponse } from "../controllers/homeController";

const router = Router()

router.get('/', homeController.home)

router.get('/exercicio', exercicio)

router.post('/exercicioResponse', exercicioResponse)

export default router;