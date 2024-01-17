import { Request, Response } from 'express';
import Contact from '../models/Contact';

export const getContacts = async (req: Request, res: Response) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        res.status(500).send(error.message);
    }
};


