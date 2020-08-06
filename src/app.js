import dotenv from 'dotenv';
import express from 'express';
import homeRoutes from './routes/home.routes';
import userRoutes from './routes/user.routes';
import './database/connection';

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
    this.app.use('/', homeRoutes);
    this.app.use('/users', userRoutes);
  }
}

export default new App().app;
