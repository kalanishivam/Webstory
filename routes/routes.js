import express from 'express';
import { homePage, nextBtn, prevBtn } from '../controllers/newsController.js';

const router = express.Router();

router.get('/' , homePage)

router.get('/next' , nextBtn);
router.get('/prev' , prevBtn);

export default router;