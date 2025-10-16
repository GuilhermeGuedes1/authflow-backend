import joi from 'joi'

const userValidation = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().min(3).required().email(),
    password: joi.string().min(4).max(8).required()
})


export default userValidation