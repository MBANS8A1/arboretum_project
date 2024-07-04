const {Sequelize} = require("sequelize");
const { isOmittedExpression } = require("typescript");
const environment = process.env.NODE_ENV || 'development' ;
const pathToEnvFile = `${__dirname}/../.env.${environment}`;
require("dotenv").config({path: pathToEnvFile})


const optionsObj = {}
let db_name;
let db_username;
let db_password;
const dialect = "dialect", host = "host", max = "max", acquire = "acquire", idle = "idle", timezone = "timezone", port = "port", define = "define", omitNull = "omitNull"
//dialect is the same regardless of the environment (development/testing)
optionsObj[dialect] =  "mysql"
// optionsObj[omitNull] =  true
// optionsObj[define] =  {
//   noPrimaryKey: true
// }
if(environment === 'development'){
  db_name = process.env.DEV_MYSQLDATABASE 
  db_username = process.env.DEV_USERNAME
  db_password = process.env.DEV_PASSWORD 
  optionsObj[host] = process.env.DEV_HOST
  optionsObj[max] = process.env.DEV_MAX
  optionsObj[acquire] = process.env.DEV_ACQUIRE
  optionsObj[idle] = process.env.DEV_IDLE
  optionsObj[timezone] = process.env.DEV_TIMEZONE 
  optionsObj[port] =  process.env.DEV_PORT 

}else{
    db_name = process.env.TEST_MYSQLDATABASE
    db_username = process.env.TEST_USERNAME
    db_password = process.env.TEST_PASSWORD 
    optionsObj[host] = process.env.TEST_HOST
    optionsObj[max] = process.env.TEST_MAX
    optionsObj[acquire] = process.env.TEST_ACQUIRE 
    optionsObj[idle] = process.env.TEST_IDLE
    optionsObj[timezone] = process.env.TEST_TIMEZONE 
    optionsObj[port] =  process.env.TEST_PORT 

}

const sequelize = new Sequelize(
    db_name,
    db_username,
    db_password,
    optionsObj
   
);

module.exports = sequelize;