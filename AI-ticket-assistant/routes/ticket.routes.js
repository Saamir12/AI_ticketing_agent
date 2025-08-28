import express from 'express';
import { authenticate } from '../middlewares/auth.js';
import { createTicket, getTickets, getTicket } from '../controllers/ticket.controller.js';

const router = express.Router();

router.get('/', authenticate, getTickets); //Done
router.get('/:id', authenticate, getTicket); //Done
router.post('/', authenticate, createTicket); //Done

export default router;