import {Router} from 'express';
//import usersRoute from './usersRoute';
//import usersRoute from './usersRoute';

const router = Router();

//router.use('/users', usersRoute)
// router.use('/adviser')
 
router.get("/", (req,res)=>{
    res.status(200).json({message : "Hola mundo"});
})


//const router = 'cambio de david ';

export default router;
