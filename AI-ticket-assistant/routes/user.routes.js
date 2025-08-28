import express from 'express';
import { getUsers, login, logout, signup, updateUser } from '../controllers/user.controller.js';
import { authenticate } from '../middlewares/auth.js';


const router = express.Router();

router.patch('/update-user', authenticate, updateUser) //Done
router.get('/users', authenticate, getUsers) //Done


router.post('/signup', signup);  //Done
router.post('/login', login); //Done
router.post('/logout', logout); //Done

export default router;