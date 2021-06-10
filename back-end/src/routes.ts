/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import AnswerController from '../src/controllers/answer.controller';

const routes = Router();
routes.post('/answer', AnswerController.create);
routes.get('/answer', AnswerController.read);
routes.delete('/answer', AnswerController.delete);
export default routes;
