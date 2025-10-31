import express from 'express'
import homeController from '../controllers/home-controllers.js'
import { authMiddleware } from '../middleware/authMiddleware.js'
import userController from '../controllers/user-controller.js'


const router = express.Router()


router.get('/home', authMiddleware, homeController)
router.get('/home/user', authMiddleware, userController)

export default router   