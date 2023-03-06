const { authenticateToken } = require('../auth/jwtFunctions');

const verifyToken = async (req, res, next) => {
const { authorization } = req.headers;

if (!authorization) {
  return res.status(401).json({ message: 'Token not found' });
}

try {
  const email = authenticateToken(authorization);
  req.user = email;
  
  next();
} catch (err) {
    console.log(err);
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = verifyToken;