const { authenticateToken } = require('../auth/jwtFunctions');

const verifyToken = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const token = authenticateToken(authorization);
    req.user = token;

    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: 'Invalid token' });
  }
};

const verifyAdminToken = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const token = authenticateToken(authorization);
    if (token.role !== 'administrator') {
      return res.status(403).json({ message: 'Not authorized' });
    }

    req.user = token;

    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = { verifyToken, verifyAdminToken };
