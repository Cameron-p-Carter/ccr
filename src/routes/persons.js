import express from 'express';
import {
  getFirstPerson,
  getNextPerson,
  getPreviousPerson,
} from '../controllers/personsController.js';

const router = express.Router();

router.get('/first', getFirstPerson);
router.get('/next', getNextPerson);
router.get('/previous', getPreviousPerson);

export default router;
