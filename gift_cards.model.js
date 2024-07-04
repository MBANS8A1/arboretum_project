const {DataTypes} = require("sequelize");

const giftCardsData = [
  {
    card_name:"This Card Plants A Woodland Tree",
    dimensions_cm:"21 x 14.9 x 0.3 cm",
    weight_grams:47,
    card_cost_incl_VAT:10.10,
    quantity_in_stock:16,
    description:"description",
    fsc_certified:true,
    card_image1: `${__dirname}/gift_card_photos/card_plants_a_woodland_tree1.jpg`,
    card_image2: `${__dirname}/gift_card_photos/card_plants_a_woodland_tree2.jpg`,
    card_image3: null,
    cardcompany_id: 23
    //images collected
  },
  {
    card_name:"Male/Female General Greeting Card - Beautiful Bluebell Woods",
    dimensions_cm:"16 x 16 x 0.03 cm",
    weight_grams:20,
    card_cost_incl_VAT:3.60,
    quantity_in_stock:13,
    description:"description",
    fsc_certified:false,
    card_image1: `${__dirname}/gift_card_photos/beautiful_bluebell_woods.jpg`,
    card_image2: null,
    card_image3: null,
    cardcompany_id: 24
    
    //images collected
  },
  {
    card_name:"Old Tree Forest Nature Oak-Celebration Anniversary",
    dimensions_cm:"14.8 x 14.4 x 0.2 cm",
    weight_grams:20,
    card_cost_incl_VAT:4.99,
    quantity_in_stock:4,
    description:"description",
    fsc_certified:false,
    card_image1: `${__dirname}/gift_card_photos/greeting_card_tree_forest_nature_anniversary1.jpg`,
    card_image2: `${__dirname}/gift_card_photos/greeting_card_tree_forest_nature_anniversary2.jpg`,
    card_image3: null,
    cardcompany_id:25
    //images collected
  },
  {
    card_name:"Woodmansterne National Trust Nature Blank/Birthday Card-Sissinghurst Castle Garden",
    dimensions_cm:"17.3 x 16.7 x 0.03 cm",
    weight_grams:30,
    card_cost_incl_VAT:4.80,
    quantity_in_stock:5,
    description:"description",
    fsc_certified:false,
    card_image1: `${__dirname}/gift_card_photos/sissinghurst_castle_garden.jpg`,
    card_image2: null,
    card_image3: null,
    cardcompany_id:26
    //images collected
  },
  {
    card_name:"Reflected Trees Buttermere The Lake District Birthday Card BBC Countryfile Range",
    dimensions_cm:"16 x 16 x 0.03 cm",
    weight_grams:40,
    card_cost_incl_VAT:4.49,
    quantity_in_stock:14,
    description:"description",
    fsc_certified:true,
    card_image1: `${__dirname}/gift_card_photos/buttermere_lake_district_1.jpg`,
    card_image2: `${__dirname}/gift_card_photos/buttermere_lake_district_2.jpg`,
    card_image3: null,
    cardcompany_id:27
    //images collected
  },
  {
    card_name:"Yorkshire Dales Narrow Countryside Lane BBC Countryfile Range",
    dimensions_cm:"16 x 16 x 0.03 cm",
    weight_grams:40,
    card_cost_incl_VAT:3.95,
    quantity_in_stock:11,
    description:"description",
    fsc_certified:true,
    card_image1: `${__dirname}/gift_card_photos/yorkshire_dales_card1.jpg`,
    card_image2: `${__dirname}/gift_card_photos/yorkshire_dales_card2.jpg`,
    card_image3: null,
    cardcompany_id:27
    //images collected
  },
  {
    card_name:"Yggdrasil Tree of Life Greeting Card",
    dimensions_cm:"14.7 x 14.7 x 0.1 cm",
    weight_grams:10,
    card_cost_incl_VAT:3.99,
    quantity_in_stock:10,
    description:"description",
    fsc_certified:false,
    card_image1: `${__dirname}/gift_card_photos/yggdrasil_greeting_card1.jpg`,
    card_image2: `${__dirname}/gift_card_photos/yggdrasil_greeting_card2.jpg`,
    card_image3: `${__dirname}/gift_card_photos/yggdrasil_greeting_card3.jpg`,
    cardcompany_id:28
  }
];
const gift_cards = {
    card_id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true

    },
      card_name:{
        type: DataTypes.STRING(190),
        allowNull: false
    },
      dimensions_cm:{
        type: DataTypes.STRING(40),
        allowNull: false

    },
      weight_grams:{
      type: DataTypes.DOUBLE(6,2),
      allowNull: false

    },
      card_cost_incl_VAT:{
        type: DataTypes.DOUBLE(4,2),
        allowNull: false

    },
      quantity_in_stock:{
      type: DataTypes.INTEGER,
      allowNull: false

    },
      description:{
      type: DataTypes.TEXT,
      allowNull: false

    },
      fsc_certified:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
      card_image1:{
        type: DataTypes.BLOB,
        allowNull: false
      },
      card_image2:{
        type: DataTypes.BLOB,
        allowNull: true
      },
      card_image3:{
        type: DataTypes.BLOB,
        allowNull: true
      },
      cardcompany_id:{
      type: DataTypes.INTEGER,
      
    }   
}

module.exports = {gift_cards,giftCardsData};