import express from 'express';

import UserController from '../controllers/user.handler';

const router = new express.Router();


router.route('/signup')
    .post(UserController.create);

export default router;
