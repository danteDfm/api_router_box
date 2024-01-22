import { Application } from "express";
import linkRouter from './link.routes';
import { Router } from "express";

function apiRouter(app:Application){

    const router = Router();
    app.use('/api/v1',router);
    router.use('/link', linkRouter);

}

export default apiRouter;