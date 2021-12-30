
import dotenv from 'dotenv';
dotenv.config();

export default {
    port: process.env.PORT,
    env: process.env.NODE_ENV,
    apikey: process.env.API_KEY
}

export const resource = 'https://jsonplaceholder.typicode.com/users/1';