import formidable from 'formidable';
import fs from 'fs';
import { connectToDatabase } from '../../lib/db';

export const config = {
    api: {
        bodyParser: false
    }
};

export default async (req, res) => {
    if (req.method === 'POST') {
        const form = new formidable.IncomingForm();
        form.uploadDir = './public/schoolImages';
        form.keepExtensions = true;

        form.parse(req, async (err, fields, files) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to parse form data' });
            }

            const { name, address, city, state, contact, email_id } = fields;
            const image = files.image.path.split('/').pop();

            const db = await connectToDatabase();

            const query = 'INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)';
            await db.execute(query, [name, address, city, state, contact, image, email_id]);

            return res.status(201).json({ message: 'School added successfully' });
        });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
