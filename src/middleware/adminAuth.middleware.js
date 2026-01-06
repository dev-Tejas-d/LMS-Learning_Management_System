let adminAuth = (req, res, next)=>{
    let userRole = req.userRole;
    if(userRole!="admin"){
        return res.status(401).send("Only admin access this");
    }
    return next();
}

export default adminAuth;