const jwt = require('jsonwebtoken');

const fs = require('fs');
    const path = require('path');
    
    const filePath = path.join(__dirname, '../../jwt.evaluation.key');

const getSecret = () => fs.readFileSync(filePath, { encoding: 'utf-8' });

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '1d',
};

const createToken = (email, role) => {
  const payload = { email, role };
  const token = jwt.sign(payload, getSecret(), jwtConfig);
  return token;
};

const authenticateToken = (token) => {
  try {
    const validateToken = jwt.verify(token, getSecret());
    return validateToken;
  } catch (err) {
    return false;
  }
};

module.exports = {
  createToken,
  authenticateToken,
};
