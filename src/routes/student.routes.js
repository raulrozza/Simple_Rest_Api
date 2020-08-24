import { Router } from 'express';
import studentController from '../controllers/StudentController';
import loginRequired from '../middlewares/loginRequired';

const studentRoutes = new Router();

studentRoutes.get('/', studentController.index);
studentRoutes.get('/:id', loginRequired, studentController.show);
studentRoutes.post('/', loginRequired, studentController.store);
studentRoutes.put('/:id', loginRequired, studentController.update);
studentRoutes.delete('/:id', loginRequired, studentController.delete);

export default studentRoutes;
