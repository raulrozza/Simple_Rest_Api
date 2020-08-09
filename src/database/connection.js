import Sequelize from 'sequelize';
import database from '../config/database';
import Student from '../models/Student';
import Picture from '../models/Picture';
import User from '../models/User';

const models = [Student, User, Picture];

const connection = new Sequelize(database);

models.forEach(model => model.init(connection));
models.forEach(model => model.associate && model.associate(connection.models));
