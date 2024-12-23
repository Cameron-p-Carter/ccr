import express from 'express';
import { renderHomepage } from '../controllers/homeController.js';

const router = express.Router();

router.get('/', renderHomepage);

export default router;
