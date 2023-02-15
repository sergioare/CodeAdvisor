import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import router from './routes/index.js';


console.log(router)
const server = express();

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(cookieParser());

server.use(router);

  
export default server;