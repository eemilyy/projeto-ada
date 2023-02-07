import express from 'express';
import * as projectController from '../controllers/Project.controller';
export const router = express.Router();

router.post('/new', projectController.create);
router.get('/:id', projectController.show);
router.delete('/:id', projectController.destroy);
//router.post('/:id/newstudent', projectController.addStudent);
router.get('/', projectController.index);