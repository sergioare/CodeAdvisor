// const {Router} = require('express');
const express = require('express');
const {addStudent, 
    getAllStudents, 
    getStudent,
    updateStudent,
    deleteStudent
   } = require('../controllers/studentController');

const router = express.Router();


//router.use('/users', usersRoute)
// router.use('/adviser')


 
router.get("/", (req,res)=>{
    res.status(200).send('hola');
})


module.exports= router

// const Hardcodeo = [

//     { Username : "JuanDestroyer",
//      Password: "qwerty1",
//      Name: "Juan",
//      LastName: "Perez",
//      EstatusAsesor: true,
//      EstatusAdmin: false
//     },
    
//         { Username : "Elver777",
//         Password: "qwerty2",
//         Name: "Elver",
//         LastName: "Galarga",
//         EstatusAsesor: true,
//         EstatusAdmin: false
//     },
        
//     { "Username" : "Alma123",
//      "Password": "qwerty3",
//      "Name": "Alma",
//      "LastName": "Maria",
//      EstatusAsesor: true,
//      EstatusAdmin: false
//     }
    
//     ]
