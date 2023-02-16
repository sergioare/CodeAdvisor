const firebase = require('../db/db');
const {Data, Autor} = require('../models/database');
const firestore = firebase.firestore();


const getAllData = async (req, res, next) => {
    try {
        const fire = await firestore.collection('Data');
        const data = await fire.get();
        const fireArray = [];
        if(data.empty) {
            res.status(404).send('base de datos vacia');
        }else {
            data.forEach(element => {
                console.log(element.data());
            });
            res.send(fireArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addData = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('Data').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAutores = async (req, res, next) => {
    try {
        const fire = await firestore.collection('Autores');
        const data = await fire.get();
        const autorArray = [];
        if(data.empty) {
            res.status(404).send('base de datos de Autores vacia');
        }else {
            data.forEach(element => {
                const yo = new Autor(
                    element.id,
                    element.data().name      || "not found",
                    element.data().img       || "not found",
                    element.data().ocupation || "not found",
                    element.data().about     || "not found",
                    element.data().linkedin  || "not found",
                    element.data().gitHub    || "not found",
                    element.data().email     || "not found",
                    element.data().phone     || "not found",
                )
                autorArray.push(yo)
            });
            res.status(200).send(autorArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateAutor = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        console.log("yo", id);
        const autor =  await firestore.collection('Autores').doc(id);
        await autor.update(data);
        res.send(`Autor con id: ${id}, ha sido modificado`);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateData = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const user =  await firestore.collection('User').doc(id);
        await user.update(data);
        res.send('User record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteData = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('User').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}
/*
const infoUs = [
    {
        name: "-Yoel Preza",
        img:"https://avatars.githubusercontent.com/u/110656227?v=4",
        ocupation: "Full Stack Web Developer/ Pedagogue/ Commercial Relations ",
        about:"I am a curious person who love new chalenges ",
        linkedin: <a href="https://www.linkedin.com/in/yoel-preza-8031b51a6/"><i class="fa-brands fa-linkedin"></i></a>,
        gitHub: <a href="https://github.com/YoelPreza" > <i class="fa-brands fa-github"></i> </a>,
        email: <a href="mailto:prezayoel@gmail.com" > <i class="fa-regular fa-envelope"></i> </a>,
        // phone: <i class="fa-sharp fa-solid fa-phone"> 5532900753 </i> 

    },
    { 
        name: "-Teresa Moron",
        img:"https://ca.slack-edge.com/TPRS7H4PN-U047QFFGLBF-2334a5f23be7-512",
        ocupation: "Full Stack Developer/ Civil engineering",
        about:" I am an honest and respectful person; I am also responsible and every day I strive to learn new things to achieve my goals.",
        linkedin: <a href="https://www.linkedin.com/in/yoel-preza-8031b51a6/"><i class="fa-brands fa-linkedin"></i></a>,
        gitHub: <a href="https://github.com/YoelPreza" ><i class="fa-brands fa-github"></i></a>,
        email: <a href="mailto:mtmd027@gmail.com" > <i class="fa-regular fa-envelope"></i> </a>,

    },
    {
        name: "-Santander Mendoza",
        img:"https://ca.slack-edge.com/TPRS7H4PN-U048SLW8J3Y-00f0c80615c1-512",
        ocupation: "Back End Developer/ Mechanical designer",
        about:"I am un tipazo",
        linkedin: <a href="https://www.linkedin.com/in/israel-santander-mendoza-ba%C3%B1uelos-a0024b202"><i class="fa-brands fa-linkedin"></i></a>,
        gitHub: <a href="https://github.com/CodigoJaguar" ><i class="fa-brands fa-github"></i></a>,
        email: <a href="mailto:israel.mz.banuelos@gmail.com" > <i class="fa-regular fa-envelope"></i> </a>,

    },
    {
        name: "-Sergio",
        img:"https://avatars.githubusercontent.com/u/112988417?v=4",
        ocupation: "Back End Developer, Mechanical designer",
        about:"I am a dedicated, honest individual. I am a good timekeeper, always willing to learn new skills. I am friendly, helpful and polite, have a good sense of humour.",
        linkedin: <a href="https://www.linkedin.com/in/sergio-arevalo-ba4523254/"><i class="fa-brands fa-linkedin"></i></a>,
        gitHub: <a href="https://github.com/sergioare" ><i class="fa-brands fa-github"></i></a>,
        email: <a href="mailto:sergioarevalo301@gmail.com" > <i class="fa-regular fa-envelope"></i> </a>,

       
    },
    {
        name: "-Nico Bisellach",
        img:"https://ca.slack-edge.com/TPRS7H4PN-U04JLPWAHJQ-fa0e67bb611e-512",
        ocupation: "Full Stack Web Developer",
        about:"Aqui va tu about",
        linkedin: <a href="https://www.linkedin.com/in/nico-bisellach-93228a220/"><i class="fa-brands fa-linkedin"></i></a>,
        gitHub: <a href="https://github.com/nicobise" ><i class="fa-brands fa-github"></i></a>,
        email: <a href="mailto:bisellachnico@gmail.com" > <i class="fa-regular fa-envelope"></i> </a>,
    },
    {
        name: "-David Morales",
        img:"https://media.licdn.com/dms/image/C4E03AQHhRz6QOkbHlg/profile-displayphoto-shrink_800_800/0/1650996322743?e=1681948800&v=beta&t=5fSVeVzHa6mvFsMeDD0t-crKv7TBbU7_lol61XJ31GQ",
        ocupation: "Full Stack Web Developer",
        about:"Aqui va tu about",
        linkedin: <a href="https://www.linkedin.com/in/david-morales-developer/"><i class="fa-brands fa-linkedin"></i></a>,
        gitHub: <a href="https://github.com/DavidMoralesDeveloper" ><i class="fa-brands fa-github"></i></a>,
        email: <a href="mailto:david.morales.developer.01@gmail.com" > <i class="fa-regular fa-envelope"></i> </a>,
    },
    {
        name: "-Angel Auriel Peñaloza",
        img:"https://ca.slack-edge.com/TPRS7H4PN-U03L4NGHAGZ-9144d7d07785-512",
        ocupation: "Full Stack Web Developer",
        about:"Aqui va tu about",
        linkedin: <a href="www.linkedin.com/in/angel-villamizar-407900214"><i class="fa-brands fa-linkedin"></i></a>,
        gitHub: <a href="https://github.com/Angel-pv" ><i class="fa-brands fa-github"></i></a>,
        email: <a href="mailto:angel.villamizar.p@gmail.com" > <i class="fa-regular fa-envelope"></i> </a>,
    },
  
]
*/
module.exports = {
    getAllData,
    addData,
    getAutores,
    updateAutor,
    updateData,
    deleteData
}