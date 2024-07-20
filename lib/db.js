import mysql from 'mysql2/promise';

export const connectToDatabase = async () => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12345678',
        database: 'school_db'
    });
    return connection;
};
