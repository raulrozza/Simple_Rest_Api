import { Router } from 'express';
import userController from '../controllers/UserController';

const userRoutes = new Router();

userRoutes.get('/', userController.index);
userRoutes.get('/:id', userController.show);
userRoutes.post('/', userController.store);
userRoutes.put('/:id', userController.update);
userRoutes.delete('/:id', userController.delete);

export default userRoutes;
