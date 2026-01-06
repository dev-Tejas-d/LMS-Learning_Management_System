let teacherAuth = async(req, res, next)=>{
    let userRole = req.userRole;
    if(userRole!="teacher"){
        return res.status(401).send("Only teacher access this");
    }
    return next();
}

export default teacherAuth;