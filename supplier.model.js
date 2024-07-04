const {DataTypes} = require("sequelize");

const suppliersData = [
  {
    supplier_name: "Kent & Stowe" //1
  },
  {
    supplier_name: "Spear & Jackson" //2
  },
  {
    supplier_name: "Wilkinson Sword" //3
  },
  {
    supplier_name: "Darlac Ltd" //4
  },
  {
    supplier_name: "Walensee" //5
  },
  {
    supplier_name: "Evergreen Garden Care Ltd" //6
  },
  {
    supplier_name: "Neilsen" //7
  },
  {
    supplier_name: "Flymo" //8
  },
  {
    supplier_name: "Burgon & Ball" //9
  },
  {
    supplier_name: "Colwelt" //10
  },
  {
    supplier_name: "Alina" //11
  },
  {
    supplier_name: "GreFusion" //12
  },
  {
    supplier_name: "GardenGloss" //13
  },
  {
    supplier_name: "Nutscene" //14
  },
  {
    supplier_name: "Gracey Seed-Co Ltd" //15
  },
  {
    supplier_name: "Fothergill Seeds Ltd" //16
  },
  {
    supplier_name: "Chiltern Seeds" //17
  },
  {
    supplier_name: "D.T. Brown Seeds" //18
  },
  {
    supplier_name: "Kings Seeds" //19
  },
  {
    supplier_name: "Moles Seeds Ltd" //20
  },
  {
    supplier_name: "Miracle Gro" //21
  },
  {
    supplier_name: "Jamieson Brothers" //22
  },
  {
    supplier_name: "Tree Appeal" //23
  },
  {
    supplier_name: "Noel Tatt" //24
  },
  {
    supplier_name: "DV Design" //25
  },
  {
    supplier_name: "Woodmansterne" //26
  },
  {
    supplier_name: "Abacus Cards" //27
  },
  {
    supplier_name: "Nokular Limited" //28
  },
  {
    supplier_name: "Purple Fox" //29
  },

]

const suppliers = {
    supplier_id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
     
     },
      supplier_name:{
      type: DataTypes.STRING(60),
        unique: true,
        allowNull: false
    }
}

module.exports = {suppliers,suppliersData};