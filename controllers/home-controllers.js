import userSchema from "../models/userSchema.js"

const homeController = async (req, res) => { 

    try {
        const users = await userSchema.find().select("-password")
        return res.status(200).json({users})
    } catch (error) {
        return res.status(400).json({message : error.message})
        
    }

}

export default homeController