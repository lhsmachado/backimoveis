import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';


import { DatabaseConfig } from './Database/Database';
import { routes } from './Routes';
dotenv.config();
DatabaseConfig.initialize();

const app = express();
app.use(cors({ origin: '*' })) 

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')

    next();
  });

app.use(express.json());

app.use(express.static('./src/photos'));
app.use(routes)


export { app }