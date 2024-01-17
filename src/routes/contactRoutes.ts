import express from 'express';
import { authenticateToken } from '../middleware/authMiddleware';
import {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact,
} from '../controllers/contactController';

const router = express.Router();

router.get('/', authenticateToken, getContacts);
router.get('/:id', authenticateToken, getContact);
router.post('/', authenticateToken, createContact);
router.put('/:id', authenticateToken, updateContact);
router.delete('/:id', authenticateToken, deleteContact);

export default router;
