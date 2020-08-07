import jwt, { JsonWebTokenError } from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  try {
    if (!authorization) return new JsonWebTokenError();

    const [, token] = authorization.split(' ');

    const { id, email } = jwt.verify(token, process.env.TOKEN_SECRET);

    const userValid = await User.findOne({ where: { id, email } });
    if (!userValid) throw new JsonWebTokenError();

    req.user = { id, email };

    return next();
  } catch (error) {
    if (error instanceof JsonWebTokenError)
      return res.status(401).json({ message: 'Unauthorized access.' });

    return res.status(500).json({ message: 'Oops. Something went wrong.' });
  }
};
