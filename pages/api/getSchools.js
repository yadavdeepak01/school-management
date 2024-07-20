import { connectToDatabase } from '../../lib/db';

export default async (req, res) => {
    if (req.method === 'GET') {
        const db = await connectToDatabase();

        const query = 'SELECT id, name, address, city, image FROM schools';
        const [rows] = await db.execute(query);

        res.status(200).json(rows);
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
