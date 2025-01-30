import dotenv from 'dotenv'
import mysql from 'mysql2'


dotenv.config();

export const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
})

export const connectDB = (): void => {
    connection.connect((error) => {
        if (error) {
            console.log('Error getting connection to DB: ', error);
            process.exit(1);
        } else {
            console.log('Connected correctly to MySQL')
        }
    })
}

export default connection.promise();