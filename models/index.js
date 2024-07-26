const {TreeSeed,treeSeedData} = require("./tree_seeds.js")
const {Supplier,suppliersData} = require("./supplier.js");
const { Model } = require("sequelize");


Supplier.hasMany(TreeSeed,{
    foreignKey: 'seedcompany_id'
});
TreeSeed.belongsTo(Supplier,{
    foreignKey: 'seedcompany_id'
})
module.exports = {TreeSeed,treeSeedData,Supplier,suppliersData};

