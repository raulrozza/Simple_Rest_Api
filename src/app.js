import dotenv from 'dotenv';
import express from 'express';
import { resolve } from 'path';
import cors from 'cors';
import helmet from 'helmet';

import './database/connection';
import userRoutes from './routes/user.routes';
import loginRoutes from './routes/login.routes';
import studentRoutes from './routes/student.routes';
import pictureRoutes from './routes/picture.routes';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, '../', 'uploads')));
  }

  routes() {
    this.app.use('/users', userRoutes);
    this.app.use('/login', loginRoutes);
    this.app.use('/students', studentRoutes);
    this.app.use('/pictures', pictureRoutes);
  }
}

export default new App().app;
