import express from 'express';
import DataController from '../controllers/data.handle';
const router = new express.Router();


router
    .post('/data', DataController.saveData)
    .get('/querydata', DataController.queryData);

export default router;
