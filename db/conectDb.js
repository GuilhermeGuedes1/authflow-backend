import dotenv from 'dotenv'
import mongose from 'mongoose'

dotenv.config()

const conectDb = async () => { 
    try {
        await mongose.connect(process.env.BASE_URI)
        return console.log('Banco de dados conectado!')
    } catch (error) {
        console.log(error)
        
    }
}

export default conectDb