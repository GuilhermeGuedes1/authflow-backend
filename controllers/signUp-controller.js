import bcrypt from 'bcrypt'
import userValidation from "../userValidation/userValidation.js"
import userDb from '../models/userSchema.js'


const signUp = async (req, res) => { 
    const newUser = req.body
    const { value, error  } = userValidation.validate(newUser)
    const salt = await bcrypt.genSalt(10)

    if(error){ 
        return res.status(400).send(error.message)
    }

    const email = value.email

    try {

        const emailExist = await userDb.findOne({email})

        if(emailExist){ 
            return res.status(401).json({message: 'Email ja cadastrado'})
        }

        const hashedPassword = await bcrypt.hash(value.password, salt)
        
        await userDb.create({...value, password: hashedPassword})

        return res.status(200).send('Usuario criado com sucesso!')
        
    } catch (error) {
        return res.status(401).json({message: error.message})
    }

}

export default signUp