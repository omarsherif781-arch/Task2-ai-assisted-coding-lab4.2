import express from 'express';
import * as evaluationController from '../controllers/evaluationController.js';

const router = express.Router();

// Summary must be defined before :id to avoid conflict
router.get('/summary', evaluationController.getEvaluationSummary);
router.get('/', evaluationController.getAllEvaluations);
router.post('/', evaluationController.createEvaluation);
router.get('/:id', evaluationController.getEvaluation);

export default router;
