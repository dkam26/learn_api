import express from 'express';
import SearchController from '../controllers/search.handle';
const router = new express.Router();


router
    .post('/search', SearchController.getCoordinates);

export default router;
