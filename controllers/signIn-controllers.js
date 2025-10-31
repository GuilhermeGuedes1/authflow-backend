import userDb from '../models/userSchema.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'


dotenv.config()

const signIn =  async (req, res) => { 
    const { email, password } = req.body

    if(!email || !password) { 
        return res.status(400).json({message : 'Email and password obrigatory'})
    }

    try {

        const user = await userDb.findOne({email})
        if(!user){
            return res.status(400).json({message: 'User doenst exist'})
        }

        const passwordCorrect = bcrypt.compare(password, user.password)

        if(!passwordCorrect){ 
            return res.status(400).json({message: 'Wrong email or password'})
        }

        const token = jwt.sign({name: user.name, email: user.email}, process.env.JWT_SECRET, { expiresIn: '1d'})
        
        return res.status(200).json({message : 'User logged in successfully', token})

    } catch (error) {

        res.status(400).json({message : error.message})
        
    }

}

export default signIn