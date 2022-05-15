// this file is the database connection

import dotenv from 'dotenv';
import {Pool} from 'pg';

dotenv.config();//to Loads .env file contents into `process.env`

const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_TEST_DB,
    ENV
} = process.env; //Object distruction.

// const database = new Pool({ //Pool is just a connection to the database.
//     host : POSTGRES_HOST,
//     database : POSTGRES_DB,
//     user : POSTGRES_USER,
//     password : POSTGRES_PASSWORD
// });

let client:any ;
console.log(ENV)

if(ENV === 'test'){
  console.log('Connceted to test db...');
  client  = new Pool({
    host:POSTGRES_HOST , 
    database : POSTGRES_TEST_DB,
    user:POSTGRES_USER,
    password:POSTGRES_PASSWORD
  })
}

if(ENV === 'dev'){
  console.log('Connceted to dev db...');
  client = new Pool({
    host : POSTGRES_HOST,
    database: POSTGRES_DB,
    user:POSTGRES_USER , 
    password : POSTGRES_PASSWORD
  })
}
// export default database;

export default client;

