import jwt, { JsonWebTokenError } from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  try {
    if (!authorization) return new JsonWebTokenError();

    const [, token] = authorization.split(' ');

    const data = jwt.verify(token, process.env.TOKEN_SECRET);

    const userValid = await User.findOne({ where: data });
    if (!userValid) throw new JsonWebTokenError();

    req.user = data;

    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized access.' });
  }
};
