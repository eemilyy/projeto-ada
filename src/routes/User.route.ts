import express from 'express';
import * as userController from '../controllers/User.controller';
export const router = express.Router();

router.post('/signup', userController.create);
router.post('/login', userController.login);
router.get('/:id', userController.show);
router.delete('/:id', userController.destroy);