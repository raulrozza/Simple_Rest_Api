import { Router } from 'express';
import loginController from '../controllers/LoginController';

const loginRoutes = new Router();

loginRoutes.post('/', loginController.store);

export default loginRoutes;
