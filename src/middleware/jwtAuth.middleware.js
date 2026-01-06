import jwt from "jsonwebtoken";

let jwtAuth = async(req, res, next)=>{
    let authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(400).send("Unauthorised!!!!");
    }
    let token = authHeader.split(" ")[1];
    let result = jwt.verify(token, process.env.JWT_KEY);
    if(!result){
        return res.status(401).send("Wrong auth token!!!!");
    }
    req.userId = result.userId;
    req.userRole = result.userRole;
    next();
}

export default jwtAuth;