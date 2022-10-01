const jwt = require('jsonwebtoken')
require('dotenv').config()
exports.auth= () => {
    return (req,res,next) =>{
        console.log('Access the Private Route!')
        const header = req.headers['authorization']
        const token = header && header.split(' ')[1]
        if(token == null) return res.status(401).send({ message: "Access denied!" });
            
        if(token == process.env.VALID_TOKEN){
            next()
        }
        else{
            return res.status(401).send({ message: "Access denied!" });
        }
    
    }
}

        