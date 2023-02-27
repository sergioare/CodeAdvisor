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

(async function startServer(){
  try{
    server.listen(PORT, ()=> console.log(`Server running on :`))
  }catch(error){
    console.log('Unable to initiate', error)
  }
})(); 

