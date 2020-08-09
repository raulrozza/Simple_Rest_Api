import Sequelize, { Model } from 'sequelize';
import appDefaults from '../config/appDefaults';

export default class Picture extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Field cannot be empty',
            },
          },
        },
        filename: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Field cannot be empty',
            },
          },
        },
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${appDefaults.url}/images/${this.getDataValue('filename')}`;
          },
        },
      },
      { sequelize },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id' });
  }
}
