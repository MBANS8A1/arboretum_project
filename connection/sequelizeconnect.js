const environment = process.env.NODE_ENV || 'development' ;
const pathToEnvFile = `${__dirname}/../.env.${environment}`;
require("dotenv").config({path: pathToEnvFile})
const { Sequelize } = require('sequelize') ;

let database;
let user;
let password;
const dialect = "dialect", host = "host"
let connectionOptions = {}
connectionOptions[dialect] = 'mysql'


if(environment === 'development'){
  database = process.env.DEV_MYSQLDATABASE 
  user = process.env.DEV_USERNAME
  password = process.env.DEV_PASSWORD 
  connectionOptions[host] = process.env.DEV_HOST

}else if(environment === 'production'){
  database = process.env.PROD_MYSQLDATABASE 
  user = process.env.PROD_USERNAME
  password = process.env.PROD_PASSWORD 
  connectionOptions[host] = process.env.PROD_HOST

}
else{
    database = process.env.TEST_MYSQLDATABASE
    user = process.env.TEST_USERNAME
    password = process.env.TEST_PASSWORD 
    connectionOptions[host] = process.env.TEST_HOST
}

const sequelize = new Sequelize(
  database,
  user,
  password,
  connectionOptions
);



module.exports = sequelize;


