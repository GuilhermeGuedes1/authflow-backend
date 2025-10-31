import jwt from 'jsonwebtoken'

const authMiddleware = (req, res, next) => {

    try {
        const userAuth = req.headers.authorization

        if(!userAuth){ 
            return res.status(401).json({message:  'Token not provided'})
        }

        const token = userAuth.split(" ")[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET )

        req.user = decoded

        next()
        
    } catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token' });

        
    }
    

}


export { authMiddleware }