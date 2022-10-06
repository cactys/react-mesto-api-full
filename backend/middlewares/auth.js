const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/unauthorized-error');

module.exports = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    throw new UnauthorizedError(`Какое-то-сообщение-1 ${token}`);
  }

  let payload;

  try {
    payload = jwt.verify(token, 'some-secret-key');
  } catch (err) {
    throw new UnauthorizedError(`Какое-то-сообщение-2 ${token}`);
  }

  req.user = payload;

  next();
  return null;
};
