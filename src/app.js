import dotenv from 'dotenv';
import express from 'express';

import './database/connection';
import userRoutes from './routes/user.routes';
import loginRoutes from './routes/login.routes';
import studentRoutes from './routes/student.routes';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/users', userRoutes);
    this.app.use('/login', loginRoutes);
    this.app.use('/students', studentRoutes);
  }
}

export default new App().app;
