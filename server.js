import dotenv from 'dotenv'
import app from './app.js'
import conectDb from './db/conectDb.js'

dotenv.config()
conectDb()

const PORT  = process.env.PORT

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))