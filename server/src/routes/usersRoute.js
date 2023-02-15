import {Router} from 'express';
import { getUsersHandler, getUserHandler} from '../handlers/usersHandlers';

const usersRoute = Router();

usersRoute.get('/',getUsersHandler)
usersRoute.get('/:id',getUserHandler)


export default usersRoute;