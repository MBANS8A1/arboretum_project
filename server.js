const sequelize = require("./config/sequelize.js")
const {TreeSeed,Supplier,treeSeedData,suppliersData} = require("./models")

//here is connection the database
// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch(error) {
//   console.error('Unable to connect to the database:', error);
// }
// sequelize.authenticate().then(() => {
//    console.log('Connection has been established successfully.');
// }).catch((error) => {
//    console.error('Unable to connect to the database: ', error);
// });

// sequelize.sync().then(()=>{
// })

const authenticate = async () => {
   try{
      await sequelize.authenticate();
      console.log("authentication successful")
   }catch(error){
      console.error('Unable to connect to the database:',error)
   }
}
authenticate();
const makeModels = async () => {
   try{
      await sequelize.sync();
      console.log("All models made")
   }catch(error){
      console.error('Unable to connect to make tables:',error)
   }
};
makeModels();

const insertSuppliers = async () =>{
   try{
     const records = await Supplier.bulkCreate(suppliersData,{returning:true})
     console.log("Suppliers data successfully inserted:",records)
   }catch(error){
      console.error("Could not insert supplier records")
   }
};
insertSuppliers();

const insertTreeSeed = async () =>{
   try{
    const records = await TreeSeed.bulkCreate(treeSeedData,{returning: true})

     console.log("Treeseed data successfully inserted",records)
   }catch(error){
      console.error("Could not insert tree seed records")
   }
}
insertTreeSeed();


const findAllSeedRecords = async () =>{
   try{
     const seedList = await TreeSeed.findAll({
      include:[{
         model: Supplier
      }]
     })
     console.log("All tree seeds: ",JSON.stringify(seedList,null,2))
   }catch(error){
      console.error("Could not retrieve tree seed records")

   }
}

findAllSeedRecords();

// const findAllSupplierRecords = async () =>{
//    try{
//      const supplierList = await Supplier.findAll()
//      console.log("All tree seeds: ",JSON.stringify(supplierList,null,2))
//    }catch(error){
//       console.error("Could not retrieve supplier records")

//    }
// }

// findAllSupplierRecords();
















// const Sequelize = require("sequelize");

// const environment = process.env.NODE_ENV || 'development' ;
// const pathToEnvFile = `${__dirname}/.env.${environment}`;
// require("dotenv").config({path: pathToEnvFile})
// const {tree_seeds, treeSeedData} = require("./tree_seeds.model.js") //done
// const {tools,toolsData} = require("./tools.model.js")
// const {suppliers,suppliersData} = require("./supplier.model.js") //done
// const {gift_cards,giftCardsData} = require("./gift_cards.model.js")
// const {fertilisers,fertiliserData} = require("./fertilisers.model.js")
// const {compost_sacks,compostSacksData} = require("./compost_sacks.model.js");


// const optionsObj = {}
// let db_name;
// let db_username;
// let db_password;
// const dialect = "dialect", host = "host", max = "max", acquire = "acquire", idle = "idle", timezone = "timezone", port = "port"
// //dialect is the same regardless of the environment (development/testing)
// optionsObj[dialect] =  "mysql"
// if(environment === 'development'){
//   db_name = process.env.DEV_MYSQLDATABASE 
//   db_username = process.env.DEV_USERNAME
//   db_password = process.env.DEV_PASSWORD 
//   optionsObj[host] = process.env.DEV_HOST
//   optionsObj[max] = process.env.DEV_MAX
//   optionsObj[acquire] = process.env.DEV_ACQUIRE
//   optionsObj[idle] = process.env.DEV_IDLE
//   optionsObj[timezone] = process.env.DEV_TIMEZONE 
//   optionsObj[port] =  process.env.DEV_PORT 

// }else{
//     db_name = process.env.TEST_MYSQLDATABASE
//     db_username = process.env.TEST_USERNAME
//     db_password = process.env.TEST_PASSWORD 
//     optionsObj[host] = process.env.TEST_HOST
//     optionsObj[max] = process.env.TEST_MAX
//     optionsObj[acquire] = process.env.TEST_ACQUIRE 
//     optionsObj[idle] = process.env.TEST_IDLE
//     optionsObj[timezone] = process.env.TEST_TIMEZONE 
//     optionsObj[port] =  process.env.TEST_PORT 
//     optionsObj[freezeTableName] =  process.env.TEST_FREEZE 

// }

// const sequelize = new Sequelize(
//     db_name,
//     db_username,
//     db_password,
//     optionsObj
// );

// //here is connection the database
// sequelize.authenticate().then(() => {
//    console.log('Connection has been established successfully.');
// }).catch((error) => {
//    console.error('Unable to connect to the database: ', error);
// });

// const Supplier = sequelize.define("suppliers",suppliers, {timestamps: false});
// const TreeSeeds = sequelize.define("tree_seeds",tree_seeds,{ timestamps: false });

// // sequelize.sync({force: true}).then(() => {
// //   console.log('suppliers table created successfully!');
// // }).catch((error) => {
// //   console.error('Unable to create suppliers table : ', error);
// // });


// //1st association
// //supplier has can supply and sell many seed types
// TreeSeeds.belongsTo(Supplier);
// sequelize.sync({force: true}).then(() => {
//   Supplier.bulkCreate(suppliersData,{validate:true}).then(()=>{
//     TreeSeeds.bulkCreate(treeSeedData,{validate:true}).then(()=>{
//       console.log("tree seed data inserted successfully")
//      }).catch((error) => {
//       console.error('Unable to insert tree_seeds data : ', error);
//     });
//     console.log("suppliers data inserted sucessfully")
//    }).catch((error) => {
//     console.error('Unable to insert suppliers data : ', error);
//   });
//   console.log('tree_seeds table created successfully!');
// }).catch((error) => {
//   console.error('Unable to create tree_seeds table : ', error);
// });
// Supplier.hasMany(TreeSeeds, {
//   foreignKey: 'supplier_id'
// })



// //2nd association
// //supplier has can sell many tool types
// const Tools = sequelize.define("tools",tools,{ timestamps: false });
// Supplier.hasMany(Tools)
// Tools.belongsTo(Supplier);
// sequelize.sync({force: true}).then(() => {
//   Tools.bulkCreate(toolsData,{validate:true}).then(()=>{
//     console.log("tools data inserted")
//    }).catch((error) => {
//     console.error('Unable to insert tools data : ', error);
//   });
//   console.log('tools table created successfully!');
// }).catch((error) => {
//   console.error('Unable to create tools table : ', error);
// });


// //3rd association
// //supplier has can sell many gift cards
// const GiftCards = sequelize.define("gift_cards",gift_cards);
// Supplier.hasMany(GiftCards)
// GiftCards.belongsTo(Supplier)
// sequelize.sync({force: true}).then(() => {
//   GiftCards.bulkCreate(giftCardsData,{validate:true}).then(()=>{
//     console.log("gift cards data inserted")
//    }).catch((error) => {
//     console.error('Unable to insert gift cards data : ', error);
//   });
//   console.log('gift_cards table created successfully!');
// }).catch((error) => {
//   console.error('Unable to create gift_cards table : ', error);
// });

// //4th association
// //supplier has can sell many fertiliser types
// const Fertilisers = sequelize.define("fertilisers",fertilisers);
// Supplier.hasMany(Fertilisers)
// Fertilisers.belongsTo(Supplier)
// sequelize.sync({force: true}).then(() => {
//   Fertilisers.bulkCreate(fertiliserData,{validate:true}).then(()=>{
//     console.log("fertiliser data inserted")
//    }).catch((error) => {
//     console.error('Unable to insert fertiliser data : ', error);
//   });
//   console.log('fertilisers table created successfully!');
// }).catch((error) => {
//   console.error('Unable to create fertilisers table : ', error);
// });

// //5th association
// //supplier has can sell many compost sacks
// const CompostSacks= sequelize.define("compost_sacks",compost_sacks);
// Supplier.hasMany(CompostSacks)
// CompostSacks.belongsTo(Supplier)
// sequelize.sync({force: true}).then(() => {
//   CompostSacks.bulkCreate(compostSacksData,{validate:true}).then(()=>{
//     console.log("compost sack data inserted")
//    }).catch((error) => {
//     console.error('Unable to insert compost sack data : ', error);
//   });
//   console.log('compost sacks table created successfully!');
// }).catch((error) => {
//   console.error('Unable to create compost sacks table : ', error);
// });
