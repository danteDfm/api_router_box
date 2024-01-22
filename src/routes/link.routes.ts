import { Router  } from "express";
import { LinkController } from "../controllers/link.controller";
const router = Router();


router.post('/save', LinkController.routeSaveLink);
router.get('/find', LinkController.routeFindLink);


export default  router;

