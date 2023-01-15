import  jwt  from "jsonwebtoken";

export const verifyToken = ( req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader)
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.status(401).json({message: "Authorization failed!"});
    // jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decode) => {
    //     console.log(err)
    //     if(err) return res.sendStatus(403);
    //     req.email = decode.email;
    // })
    next();
}

// import jwt from "jsonwebtoken";

// export const verifyToken = (req, res, next) => {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];
//     if(token == null) return res.sendStatus(401);
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decode) => {
//         if(err) return res.sendStatus(403);
//         req.email = decode.email;
//         next();
//     })
// }
// export default verifyToken;