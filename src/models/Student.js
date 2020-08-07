import Sequelize, { Model } from 'sequelize';

export default class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        firstname: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [0, 255],
              msg: 'Field name must have between 0 and 255 characters',
            },
          },
        },
        lastname: {
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
          unique: {
            msg: 'E-mail already exists',
          },
          validate: {
            isEmail: {
              msg: 'Invalid e-mail',
            },
          },
        },
        age: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {
              msg: 'Age must be a number',
            },
          },
        },
        height: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Age must be a number',
            },
          },
        },
      },
      { sequelize },
    );
    return this;
  }
}
