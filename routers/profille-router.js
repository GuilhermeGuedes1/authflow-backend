import express from 'express'
import { profileController } from '../controllers/profile-controller.js'
import { authMiddleware}  from '../middleware/authMiddleware.js'

const router = express.Router()

router.get("/home/profile", authMiddleware, profileController)

export default router


