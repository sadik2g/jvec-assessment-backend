import mongoose, { Document } from 'mongoose';

export interface IContact extends Document {
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

const contactSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
});

const Contact = mongoose.model<IContact>('Contact', contactSchema);

export default Contact;
