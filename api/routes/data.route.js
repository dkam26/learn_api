import express from 'express';
import DataController from '../controllers/data.handle';
const router = new express.Router();


router
    .post('/data', DataController.saveData)
    .get('/querydata', DataController.queryData)
    .delete('/deletedata', DataController.deleteData);

export default router;
