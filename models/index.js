const {TreeSeed,treeSeedData} = require("./tree_seeds.js")
const {Supplier,suppliersData} = require("./supplier.js");
const { Model } = require("sequelize");


Supplier.hasMany(TreeSeed);
TreeSeed.belongsTo(Supplier)
module.exports = {TreeSeed,treeSeedData,Supplier,suppliersData};

