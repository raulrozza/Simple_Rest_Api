import User from '../models/User';

class UserController {
  async store(req, res) {
    const { name, email, password } = req.body;

    try {
      await User.create({
        name,
        email,
        password,
      });
      return res.status(201).send();
    } catch (error) {
      return res.status(400).json({
        message: 'Your request has errors.',
        errors: error.errors.map(e => e.message),
      });
    }
  }

  async index(_, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'name', 'email'] });
      return res.json(users);
    } catch (error) {
      return res.status(500).send();
    }
  }

  async show(req, res) {
    const { id } = req.params;

    try {
      const user = await User.findByPk(id, {
        attributes: ['id', 'name', 'email'],
      });
      return res.json(user);
    } catch (error) {
      return res.status(500).send();
    }
  }

  async update(req, res) {
    const { id } = req.user;
    const { name, email, password } = req.body;

    try {
      if (!id) throw new Error();

      const user = await User.findByPk(id);

      if (!user) throw new Error();

      const updateDoc = {};
      if (name) updateDoc.name = name;
      if (email) updateDoc.email = email;
      if (password) updateDoc.password = password;

      await user.update(updateDoc);

      return res.status(204).send();
    } catch (error) {
      return res.status(500).send();
    }
  }

  async delete(req, res) {
    const { id } = req.user;

    try {
      if (!id) throw new Error();

      const user = await User.findByPk(id);

      if (!user) throw new Error();

      await user.destroy();

      return res.status(204).send();
    } catch (error) {
      return res.status(500).send();
    }
  }
}

const userController = new UserController();

export default userController;
