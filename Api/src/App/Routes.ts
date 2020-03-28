import { Router } from 'express';
const routes = Router();

import OngController from './Controllers/OngController';
import IncidentController from './Controllers/IncidentController';
import ProfileController from './Controllers/ProfileController';
import SessionController from './Controllers/SessionController';

routes.get('/', (_, res) => res.json('ok'));

routes.post('/session', SessionController.create);
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

export default routes;
