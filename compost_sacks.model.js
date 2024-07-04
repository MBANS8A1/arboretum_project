const {DataTypes} = require("sequelize");

const compostSacksData = [
  {
    sack_name:"Compostable Wheeled Bin Liner/Garden Waste Compost Sack",
    litres:240,
    roll_unit_count:10,
    is_biodegradable:true,
    colour:"green",
    sack_cost_incl_VAT:15.00,
    description:"Biodegradable green liner for food waster.",
    stock_quantity:13,
    sack_weight: 58,
    compost_sack_image1: `${__dirname}/compost_sack_photos/alina_compostable_wheeled_liner1.jpg`,
    compost_sack_image2: `${__dirname}/compost_sack_photos/alina_compostable_wheeled_liner2.jpg`,
    compost_sack_image3: null,
    sackcompany_id:11
    //images collected
  },
  {

    sack_name:"Compostable Handle Bags",
    litres:6,
    roll_unit_count:140,
    is_biodegradable:true,
    colour:"green",
    sack_cost_incl_VAT:10.50,
    description:"These food waste bags contain no polyethylene and contain biodegradable plant starches.",
    stock_quantity:14,
    sack_weight: 880,
    compost_sack_image1: `${__dirname}/compost_sack_photos/grefusion_compostable_handle_bag1.jpg`,
    compost_sack_image2: `${__dirname}/compost_sack_photos/grefusion_compostable_handle_bag2.jpg`,
    compost_sack_image3: null,
    sackcompany_id:12
    //images collected
  },
  {
    sack_name:"Garden Waste Bag - Heavy Duty with Handles",
    litres:272,
    roll_unit_count:1,
    is_biodegradable:false,
    colour:"green",
    sack_cost_incl_VAT:15.05,
    description:"High capacity garden bags for leaf debris and other plant waste. Is water repellant and UV stable too.",
    stock_quantity:9,
    sack_weight: 440,
    compost_sack_image1: `${__dirname}/compost_sack_photos/heavy_duty_gardenwaste_bag.jpg`,
    compost_sack_image2: null,
    compost_sack_image3: null, 
    sackcompany_id:13
    //images collected

  },
  {
    sack_name:"Jute Leaf Composting Sacks",
    litres:null,
    roll_unit_count:2,
    is_biodegradable:true,
    colour:"light-brown",
    sack_cost_incl_VAT:5.99,
    description:"An eco-friendly bag excellent for composting leaves easily.",
    stock_quantity:12,
    sack_weight: null,
    compost_sack_image1: `${__dirname}/compost_sack_photos/jute_leaf_composting_sack1.jpeg`,
    compost_sack_image2: `${__dirname}/compost_sack_photos/jute_leaf_composting_sack2.jpeg`,
    compost_sack_image3: null,
    sackcompany_id:14
  }
  //images collected
];


const compostSacks = {
    sack_id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true

    },
      sack_name:{
        type: DataTypes.STRING(190),
        allowNull: false
    },
      litres:{
        type: DataTypes.INTEGER,
        allowNull: true

    },
      roll_unit_count:{
      type: DataTypes.INTEGER,
      allowNull: false

    },
      is_biodegradable:{
      type: DataTypes.BOOLEAN,
      allowNull: false

    },
      colour:{
      type: DataTypes.STRING(30),
      allowNull: false

    },
      sack_cost_incl_VAT:{
        type: DataTypes.DOUBLE(4,2),
        allowNull: false
    },
      description:{
        type: DataTypes.TEXT,
        allowNull: false
    },
      stock_quantity:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
      sack_weight:{
        type: DataTypes.DOUBLE(6,2),
        allowNull: false
    },
    compost_sack_image1:{
      type: DataTypes.BLOB,
      allowNull: false
    },
    compost_sack_image2:{
      type: DataTypes.BLOB,
      allowNull: true
    },
    compost_sack_image3:{
      type: DataTypes.BLOB,
      allowNull: true
    },
      sackcompany_id:{
        type: DataTypes.INTEGER,
       
    }
    
}

module.exports = {compostSacks,compostSacksData};