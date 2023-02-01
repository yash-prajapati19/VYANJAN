const jwt = require('jsonwebtoken');


const verifyJWT = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        res.send('We need a token, please give it to us next time!');
    } else {
        jwt.verify(token, process.env.JWT_SECRET , (err, decoded) => {
            if (err) {
                res.json({ auth: false, message: 'You failed to authenticate!' });
            } else {
                req.userId = decoded.id;
                next();
            }
        });
    }
}