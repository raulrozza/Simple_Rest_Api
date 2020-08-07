import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const userRoutes = new Router();

userRoutes.get('/', userController.index);
userRoutes.get('/:id', userController.show);
userRoutes.post('/', userController.store);
userRoutes.put('/', loginRequired, userController.update);
userRoutes.delete('/', loginRequired, userController.delete);

export default userRoutes;
