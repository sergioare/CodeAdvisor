const {Router} = require('express');



const router = Router();

//router.use('/users', usersRoute)
// router.use('/adviser')

const Hardcodeo = [

{ Username : "JuanDestroyer",
 Password: "qwerty1",
 Name: "Juan",
 LastName: "Perez",
 EstatusAsesor: true,
 EstatusAdmin: false
},

	{ Username : "Elver777",
    Password: "qwerty2",
    Name: "Elver",
    LastName: "Galarga",
    EstatusAsesor: true,
    EstatusAdmin: false
},
	
{ "Username" : "Alma123",
 "Password": "qwerty3",
 "Name": "Alma",
 "LastName": "Maria",
 EstatusAsesor: true,
 EstatusAdmin: false
}

]
 
router.get("/", (req,res)=>{
    res.status(200).json(Hardcodeo);
})


module.exports = router;
