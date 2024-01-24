import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'


import { DatabaseConfig } from './Database/Database';
import { routes } from './Routes';
dotenv.config();
DatabaseConfig.initialize();

const app = express();
app.use(cors({ origin: '*' })) 

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.use(express.json());
app.use(express.static('./src/photos'));
app.use(routes)


export { app }