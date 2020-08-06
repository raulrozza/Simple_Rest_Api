import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [0, 255],
              msg: 'Field name must have between 0 and 255 characters',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            isEmail: {
              msg: 'Invalid e-mail',
            },
          },
        },
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: '',
          validate: {
            len: {
              args: [6, 24],
              msg: 'Password must have between 6 and 24 characters',
            },
          },
        },
      },
      { sequelize },
    );

    this.addHook('beforeSave', async user => {
      if (user.password)
        user.password_hash = await bcryptjs.hash(user.password, 8);
    });

    return this;
  }
}
