import express from 'express';
import {
  getAllPersons,
  getPersonById,
  createPerson,
  updatePerson,
  deletePerson,
  searchPersons,
  renderEditForm
} from '../controllers/personsController.js';

const router = express.Router();

router.get('/', getAllPersons);
router.post('/', createPerson);
router.get('/:id', getPersonById);
router.put('/:id', updatePerson);
router.delete('/:id', deletePerson);
router.get('/edit/:id', renderEditForm);
router.post('/search', searchPersons);

export default router;
