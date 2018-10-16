import express from 'express';

import UserController from '../controllers/user.handler';

const router = new express.Router();


router
    .post('/signup', UserController.create)
    .post('/login', UserController.login);

export default router;
