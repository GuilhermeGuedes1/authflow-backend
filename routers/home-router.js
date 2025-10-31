import express from 'express'
import homeController from '../controllers/home-controllers.js'
import { authMiddleware } from '../middleware/authMiddleware.js'


const router = express.Router()


router.get('/home', authMiddleware, homeController)

export default router   