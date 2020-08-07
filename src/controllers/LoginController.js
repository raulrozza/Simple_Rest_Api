import User from '../models/User';
import jwt from 'jsonwebtoken';

class LoginController {
  async store(req, res) {
    const { email, password } = req.body;

    try {
      if (!email || !password) throw new Error();

      const user = await User.findOne({ where: { email } });

      if (!user || !(await user.passwordIsValid(password))) throw new Error();

      const token = jwt.sign(
        {
          id: user.id,
          email,
        },
        process.env.TOKEN_SECRET,
        {
          expiresIn: process.env.TOKEN_EXP,
        },
      );

      return res.json({ token });
    } catch (error) {
      return res.status(400).send({
        message: 'There was an error with your request.',
      });
    }
  }
}

const loginController = new LoginController();

export default loginController;
