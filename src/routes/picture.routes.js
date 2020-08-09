import { Router } from 'express';

import pictureController from '../controllers/PictureController';

import loginRequired from '../middlewares/loginRequired';

const pictureRoutes = new Router();

pictureRoutes.post('/', loginRequired, pictureController.store);

export default pictureRoutes;
