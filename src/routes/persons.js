import express from 'express';
import {
  getAllPersons,
  getPersonById,
} from '../controllers/personsController.js';

const router = express.Router();

router.get('/', getAllPersons);
router.get('/:id', getPersonById);

export default router;
