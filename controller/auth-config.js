exports.auth= () => {
    return (req,res) =>{
        console.log('Access the private route!');
        
        const token_value = req.headers["x-auth-token"]
        if (!token_value) return res.status(401).send({ message: "Access denied." })
            
        if(token_value == process.env.VALID_TOKEN){
            res.send({message:"API has been accessed!"})
        }
        else{
            return res.status(401).send({ message: "Access denied!" });
        }
                    
        }
}

        