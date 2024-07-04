const {DataTypes, Model} = require("sequelize");

const sequelize = require("../config/sequelize.js")

const treeSeedData = [
    {
      common_name:"Common Hazel/Cob-Nut",
      species_name:"Corylus avellana",
      family:"Betulaceae",
      seed_cost_incl_VAT:2.18,
      quantity_in_stock:14,
      seed_number_per_pack:8,
      colour:"mixed",
      hardiness:"hardy",
      soil_type:"chalk/sand/loam",
      soil_acidity:"alkaline/neutral",
      description:"A small shrubby tree found in mixed woodlands and hedgerows known for its long yellow catkins that appear in Spring and then produces hazelnuts in Summer. It is native to the UK.",
      tree_image1:`${__dirname}/tree_photos/hazel1.png`,
      tree_image2:`${__dirname}/tree_photos/hazel2.jng`,
      tree_image3:`${__dirname}/tree_photos/hazel3.jng`,
      seedcompany_id:15
      //image(s) collected
    },
    {
      common_name:"Common Alder",
      species_name:"Alnus glutinosa",
      family:"Betulaceae",
      seed_cost_incl_VAT:3.22,
      quantity_in_stock:10,
      seed_number_per_pack:234,
      colour:"green",
      hardiness:"hardy",
      soil_type:"clay/chalk/loam",
      soil_acidity:"alkaline/neutral/acid",
      description:"Common in wetland forests, fens and riversides. It can improve soil fertility with its ability to fix nitrogen. Used to make timber veneers, pulp and plywood.",
      tree_image1:`${__dirname}/tree_photos/alnus_glutinosa1.jpg`,
      tree_image2:`${__dirname}/tree_photos/alnus_glutinosa2.jpg`,
      tree_image3: null,
      seedcompany_id:15
       //image(s) collected
    },
    {
      common_name:"Silver Birch",
      species_name:"Betula pendula",
      family:"Betulaceae",
      seed_cost_incl_VAT:2.75,
      quantity_in_stock:6,
      seed_number_per_pack:1680,
      colour:"mixed",
      hardiness:"hardy",
      soil_type:"chalk/sand/loam/clay",
      soil_acidity:"alkaline/neutral/acid",
      description:"It is native to Northern Europe and is found on light and dry soils. Woodpeackers commonly nest in the trunks of this tree. It is a hardwood used in plywood production, toys and wooden back of brushes.",
      tree_image1:`${__dirname}/tree_photos/betula_pendula1.jpg`,
      tree_image2:`${__dirname}/tree_photos/betula_pendula2.jpg`,
      tree_image3:`${__dirname}/tree_photos/betula_pendula3.jpg`,
      seedcompany_id:16
      //image(s) collected
    },
    {
      common_name:"Cherry Dogwood/Cornelian Cherry",
      species_name:"Cornus mas",
      family:"Cornaceae",
      seed_cost_incl_VAT:3.20,
      quantity_in_stock:7,
      seed_number_per_pack:19,
      colour:"yellow/orange",
      hardiness:"hardy",
      soil_type:"chalk/sand/loam/clay",
      soil_acidity:"alkaline/neutral/acid",
      description:"It is a multi-stemmed shrub/tree that is notable for being disease-resistant. The fruit produced has skin that is unpleasant with a grainy and bitter taste. They are native to North America, Asia and Europe. It is strong and sturdy and these properties make it a good building material.",
      tree_image1:`${__dirname}/tree_photos/cornus_mas1.jpg`,
      tree_image2:`${__dirname}/tree_photos/cornus_mas2.jpg`,
      tree_image3:`${__dirname}/tree_photos/cornus_mas3.jpg`,
      seedcompany_id:17
      //image(s) collected
    },
    {
      common_name:"Sugar Maple",
      species_name:"Acer sacchurum",
      family:"Aceraceae",
      seed_cost_incl_VAT:2.99,
      quantity_in_stock:20,
      seed_number_per_pack:18,
      colour:"mixed",
      hardiness:"hardy",
      soil_type:"sand/loam/clay",
      soil_acidity:"alkaline/neutral/acid",
      description:"The leaf of the tree is the national emblem of Canada; known for producing a sweet maple syrup and is native to eastern North America. Leaves have three to five lobes and show various shades of gold to scarlet in autumn. It produces greenish yellow flowers in Spring.",
      tree_image1:`${__dirname}/tree_photos/acer_saccharum1.jpg`,
      tree_image2:`${__dirname}/tree_photos/acer_saccharum2.jpg`,
      tree_image3: null,
      seedcompany_id:18
      //image(s) collected
    },
    {
      common_name:"Black Mulberry",
      species_name:"Morus nigra",
      family:"Moraceae",
      seed_cost_incl_VAT:2.65,
      quantity_in_stock:20,
      seed_number_per_pack:288,
      colour:"mixed",
      hardiness:"hardy",
      soil_type:"chalk/sand/loam/clay",
      soil_acidity:"alkaline/neutral/acid",
      description:"A species native to west Asia that is cultivated for its fruit. It produces dark-green heart shaped leaves and is deciduous. It is low maintenance, attracts pollinators and improves soil health.",
      tree_image1: `${__dirname}/tree_photos/morus_nigra1.jpg`,
      tree_image2: `${__dirname}/tree_photos/morus_nigra2.jpg`,
      tree_image3: `${__dirname}/tree_photos/morus_nigra3.jpg`,
      seedcompany_id:18
      //image(s) collected
    },
    {
      common_name:"Lemonade Tree/Baobob",
      species_name:"Adansonia digitata",
      family:"Bombacaceae",
      seed_cost_incl_VAT:3.10,
      quantity_in_stock:15,
      seed_number_per_pack:6,
      colour:"green",
      hardiness:"tender",
      soil_type:"sand/loam",
      soil_acidity:"alkaline/neutral/acid",
      description:"This tree produces short stubby branches from the top of a swollen water-containing trunk. They grow in 32 African countries and can live up to 5000 years. Its pendulous flowers are pollinated by bush babies and bats, its young leaves are edible and produces a woody fruit.",
      tree_image1:`${__dirname}/tree_photos/boabab1.jpg`,
      tree_image2:`${__dirname}/tree_photos/boabab2.jpg`,
      tree_image3:null,
      seedcompany_id:17
      //image(s) collected
    },
    {
      common_name:"Common Hornbeam",
      species_name:"Carpinus betulus",
      family:"Betulaceae",
      seed_cost_incl_VAT:2.85,
      quantity_in_stock:20,
      seed_number_per_pack:27,
      colour:"mixed",
      hardiness:"hardy",
      soil_type:"chalk/sand/loam/clay",
      soil_acidity:"alkaline/neutral/acid",
      description:"Found in southern and easter England; it produces catkins in late Spring and winged seeds can be spotted in autumn and are dispersed by the wind.It has a twisted trunk with tooth-edged leaves. Commonly it is used for flooring and furniture.",
      tree_image1:`${__dirname}/tree_photos/carpinus_betulus1.jpg`,
      tree_image2:`${__dirname}/tree_photos/carpinus_betulus_catkins2.jpg`,
      tree_image3:null,
      seedcompany_id:17
      //image(s) collected
    },
    {
      common_name:"Argyle Apple/Mealy Stringybark",
      species_name:"Eucalyptus cinerea",
      family:"Myrtaceae",
      seed_cost_incl_VAT:2.90,
      quantity_in_stock:16,
      seed_number_per_pack:26,
      colour:"greyish-white",
      hardiness:"hardy",
      soil_type:"chalk/sand/loam/clay",
      soil_acidity:"neutral/acid",
      description:"This is an evergreen tree with a striking canopy of blue-silver foliage. It is tolerant to UK climate, prefers slightly acidic soil and is used as an astringent and antiseptic.",
      tree_image1:`${__dirname}/tree_photos/eucalyptus_cinerea1.jpg`,
      tree_image2:`${__dirname}/tree_photos/eucalyptus_cinerea2.jpg`,
      tree_image3:null,
      seedcompany_id:19
      //image(s) collected
    },
    {
      common_name:"Dawn Redwood",
      species_name:"Metasequoia glyptostroboides",
      family:"Pinaceae",
      seed_cost_incl_VAT:3.30,
      quantity_in_stock:13,
      seed_number_per_pack:70,
      colour:"mixed",
      hardiness:"hardy",
      soil_type:"chalk/sand/loam/clay",
      soil_acidity:"alkaline/neutral/acid",
      description:"A native tree of China but grows comfortably in UK climates. Mostly planted as an ornamental tree and is a fast growing deciduous tree with needle-like green leaves that turn copper-red when shed in autumn.",
      tree_image1:`${__dirname}/tree_photos/dawn_redwood1.jpg`,
      tree_image2:`${__dirname}/tree_photos/dawn_redwood2.jpg`,
      tree_image3:`${__dirname}/tree_photos/dawn_redwood3.jpg`,
      seedcompany_id:18
      //image(s) collected
    },
    {
      common_name:"Norway Maple",
      species_name:"Acer platanoides",
      family:" Aceraceae",
      seed_cost_incl_VAT:1.92,
      quantity_in_stock:10,
      seed_number_per_pack:20,
      colour:"yellow/orange",
      hardiness:"hardy",
      soil_type:"sand/loam/clay",
      soil_acidity:"alkaline/neutral/acid",
      description:"This tree is found expansively across Europe and Asia and is a common ornamental landscape plant. When they grow they produce a lot of shade that makes it hard for plants and grass underneath to grow.",
      tree_image1:`${__dirname}/tree_photos/acer_platanoides1.jpg`,
      tree_image2:`${__dirname}/tree_photos/acer_platanoides2.jpg`,
      tree_image3:`${__dirname}/tree_photos/acer_platanoides3.jpg`,
      seedcompany_id:20
    },
    {
      common_name:"Cootamundra Wattle",
      species_name:"Acacia baileyana",
      family:"Leguminosae/Fabaceae",
      seed_cost_incl_VAT:1.34,
      quantity_in_stock:26,
      seed_number_per_pack:24,
      colour:"yellow",
      hardiness:"hardy/half-hardy",
      soil_type:"sand/loam",
      soil_acidity:"neutral/acid",
      description:"This is a tree/shrub with smooth grey-to-brown bark and blue-grey foliage. It is planted in parks and gardens as a wind-break and shading tree.",
      tree_image1:`${__dirname}/tree_photos/acacia_baileyana1.jpg`,
      tree_image2:`${__dirname}/tree_photos/acacia_baileyana2.jpg`,
      tree_image3: null,
      seedcompany_id:20
      //image(s) collected
    },
  ];

class TreeSeed extends Model {
  
    
}
TreeSeed.init({
    
    seed_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique : true,
        allowNull: false,
        field: 'seed_id'
    },
    common_name:{
        type: DataTypes.STRING(45),
        unique: true,
        allowNull: false
    },
    species_name:{
        type: DataTypes.STRING(45),
        unique:true,
        allowNull: false
    },
    family:{
        type: DataTypes.STRING(45),
        allowNull: false
    },
    seed_cost_incl_VAT:{
        type: DataTypes.DOUBLE(4,2),
        allowNull: false
    },
    quantity_in_stock:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    seed_number_per_pack:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    colour:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    hardiness:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    soil_type:{
        type: DataTypes.STRING(60),
        allowNull: false
    },
    soil_acidity:{
        type: DataTypes.STRING(60),
        allowNull: false
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    tree_image1:{
        type: DataTypes.BLOB,
        allowNull: false
    },
    tree_image2:{
        type: DataTypes.BLOB,
        
    },
    tree_image3:{
        type: DataTypes.BLOB,       
    },
    seedcompany_id:{
        type: DataTypes.INTEGER,
        references:{
           model: 'Supplier',
           key: 'supplier_id'
        }
    }
    }

    ,{
     sequelize,
     timestamps: false,
     freezeTableName: true

})
 

module.exports = {TreeSeed,treeSeedData};

// @Attribute(DataTypes.INTEGER)
// @PrimaryKey
// @AutoIncrement
// id;

// @Attribute(DataTypes.STRING)
// @NotNull
// firstName;

// @Attribute(DataTypes.STRING)
// lastName;
// }

// // const tree_seeds = {
// //     seed_id:{
// //       type: DataTypes.INTEGER,
// //       autoincrement: true,
// //       primaryKey: true,
// //       allowNull: false,
// //       validate: {
// //         notNull: true
// //       }
      
// //     },
// //       common_name:{
// //         type: DataTypes.STRING(45),
// //         allowNull: false
// //     },
// //       species_name:{
// //         type: DataTypes.STRING(45),
// //         allowNull: false

// //     },
// //       family:{
// //       type: DataTypes.STRING(40),
// //       allowNull: false

// //     },
// //       seed_cost_incl_VAT:{
// //       type: DataTypes.DOUBLE(4,2),
// //       allowNull: false

// //     },
// //       quantity_in_stock:{
// //       type: DataTypes.INTEGER,
// //       allowNull: false

// //     },
// //       seed_number_per_pack:{
// //       type: DataTypes.INTEGER,
// //       allowNull: false

// //     },
// //       colour:{
// //       type: DataTypes.STRING(20),
// //       allowNull: false

// //     },
// //       hardiness:{
// //       type: DataTypes.STRING(20),
// //       allowNull: false

// //     },
// //       soil_type:{
// //       type: DataTypes.STRING(60),
// //       allowNull: false

// //     },
// //       soil_acidity:{
// //       type: DataTypes.STRING(60),
// //       allowNull: false

// //     },
// //     description:{
// //       type: DataTypes.TEXT,
// //       allowNull: false

// //     },
// //     tree_image1:{
// //       type: DataTypes.BLOB,
// //       allowNull: false
// //     },
// //     tree_image2:{
// //       type: DataTypes.BLOB,
// //       allowNull: true
// //     },
// //     tree_image3:{
// //       type: DataTypes.BLOB,
// //       allowNull: true
// //     },
// //       seedcompany_id:{
// //       type: DataTypes.INTEGER,
// //       references:{
// //         model: 'suppliers',
// //         key: 'supplier_id'
// //       }
// //     }
// // }