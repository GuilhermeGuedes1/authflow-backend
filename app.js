import express from 'express'
import cors from 'cors'
import signUpRouter from './routers/signUp-routers.js'
import homeRoute from './routers/home-router.js'
import signInRouter from './routers/signIn-router.js'

const app = express()

app.use(express.json())
app.use(cors())


app.use(homeRoute)
app.use(signUpRouter)
app.use(signInRouter)



export default app