import express from 'express'
import signIn from '../controllers/signIn-controllers.js'

const router = express.Router()

router.post('/home/sign-in', signIn)

export default router