import * as dotenv from 'dotenv';
dotenv.config();
import  { Sequelize } from 'sequelize';

const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env

export const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  dialect: 'postgres', 
  native: false, 
})


export const seqConn = async ()=>{
  try {
    sequelize
    .authenticate()
    .then(()=>
    console.log("Authenticate has been successfull"))
  } catch (error) {
    console.log("Authenticate has not been succesfull", error)
  }
}

// Here I am CodigoJaguar