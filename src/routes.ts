import { Router } from 'express';
import Multer from 'multer';
import OrphanageController from './controllers/OrphanagesControllers';
import multer from 'multer';
import uploadConfig from './config/upload'

const routes = Router();
const upload = multer(uploadConfig);

routes.get("/orphanages", OrphanageController.index);
routes.get("/orphanages/:id", OrphanageController.show);
routes.post("/orphanages_create", upload.array('images') ,OrphanageController.create);

    

export default routes;