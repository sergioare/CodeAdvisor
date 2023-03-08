/*****************************************\
|            ⣠⣴⣶⣿⠿⢿⣶⣶⣦⣄
|          ⣼⡿⠋⠁     ⢀⣈⠙⢿⣷⡄
|         ⢸⣿⠁   ⢀⣴⣿⠿⠿⠿⠿⠿⢿⣷⣄ 
|    ⢀⣀⣠⣾⣿⡇   ⣾⣿⡄          ⠹⣧ 
|   ⣾⡿⠉⠉⣿ ⡇   ⠸⣿⡌⠓⠶⠤⣤⡤⠶⢚⣻⡟ 
|   ⣿⣧⠖⠒⣿ ⡇    ⠙⢿⣷⣶⣶⣶⣶⣶⢿⣿  
|   ⣿⡇  ⣿⡇⢰        ⠈⠉⠉⠉⠁  ⣿ 
|   ⣿⡇  ⣿⡇⠈⡄           ⢀⣿  ⣿  
|   ⣿⣷  ⣿⡇ ⠘⠦⣄⣀⣀⣀⣀⣀⡤⠊   ⣿  
|   ⢿⣿⣤⣀⣿⡇   ⢀⣀⣉⡉⠁⣀⡀   ⣾⡟  
|     ⠉⠛⠛⣿⡇    ⣿⡟⣿⡟⠋   ⢰⣿⠃     
|         ⣿⣧   ⢀⣿⠃⣿⣇   ⢀⣸⡯       
|         ⠹⢿⣶⣶⣶⠿⠃ ⠈⠛⠛⠛⠛⠁  
\******************************************/

const server = require('./src/server.js');
const dotenv = require('dotenv');
dotenv.config();


const PORT = process.env.PORT || 3002;
const VERCEL_URL = process.env.VERCEL_URL || "https://code-advisor-hy1v.vercel.app/";
// const VERCEL_URL = 'http://localhost:3002/';

/**
* Inicie el servidor en el puerto 8080 y registra cualquier error en la consola.
*/
(async function startServer(){
  try{
    server.listen(PORT, ()=> console.log(`Server running on http://localhost:${PORT}.`))
  }catch(error){
    console.log('Unable to initiate', error)
  }
})(); 

