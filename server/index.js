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

const PORT = process.env.PORT || 5000;
const VERCEL_URL = process.env.VERCEL_URL;

(async function startServer(){
  try{
    server.listen(PORT, ()=> console.log(`Server running on http://localhost:${PORT}. or ${VERCEL_URL}`))
  }catch(error){
    console.log('Unable to initiate', error)
  }
})(); 

