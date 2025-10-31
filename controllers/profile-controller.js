import userSchema from "../models/userSchema.js"

const profileController = async (req, res) => {

    try {
        const userId = req.user.id
        const user = await userSchema.findById(userId).select("-password")

        if(!user){ 
            return res.status(401).json({message: "User doenst exist"})
        }
        
        return res.status(200).json({user})

        
    } catch (error) {
        return res.status(400).json({message : error.message})
        
    }
    
}

export { profileController }