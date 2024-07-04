const {DataTypes} = require("sequelize");

const fertiliserData = [
  {
    fertiliser_name:"Peat Free Plant & Grow (compost for all plants)",
    litres:10,
    fcost_incl_VAT:11.99,
    quantity_in_stock:5,
    description:"Great general all-round compost that provides nutrients and beneficial soil structure to promote the growth of most plants.",
    fertiliser_image1: `${__dirname}/fertiliser_photos/plant_and_grow_compost.jpg`,
    fertiliser_image2: null,
    fertilisercompany_id: 21
    //images collected
  },
  {
    fertiliser_name:"Peat Free Premium Azalea, Camellia, Rhododendron (Ericaceous Plants Compost)",
    litres:10,
    fcost_incl_VAT:11.99,
    quantity_in_stock:3,
    description:"Compost with pH and adjusted nutrient ratios for Azalea, Camellia, Rhododendron and other members of the Ericaceae family.",
    fertiliser_image1: `${__dirname}/fertiliser_photos/azalea_camellia_rhododendron_miraclegrow1.jpg`,
    fertiliser_image2: null,
    fertilisercompany_id: 21
    //images collected
  },
  {
    fertiliser_name:"Peat Free Premium All Purpose (Compost for all plants)",
    litres:10,
    fcost_incl_VAT:11.99,
    quantity_in_stock:2,
    description:"Premium grade compost with the correct balance of green and brown material to supply the right amount of nitrogen and carbon for plant grwoing needs.",
    fertiliser_image1: `${__dirname}/fertiliser_photos/premium_all_purpose_compost.jpg`,
    fertiliser_image2: null,
    fertilisercompany_id: 21
    //images collected
  },
  {
    fertiliser_name:"Peat Free Premium Cactus Succulent & Bonsai (Special Plants Compost)",
    litres:10,
    fcost_incl_VAT:11.99,
    quantity_in_stock:5,
    description:"A great compost mix for potted succulents and bonsai with adjusted pH and naturient ratios.",
    fertiliser_image1: `${__dirname}/fertiliser_photos/cactus_succulent_bonsai_specialplant_compost.jpg`,
    fertiliser_image2: null,
    fertilisercompany_id: 21
    
     //images collected
  },
  {
    fertiliser_name:"Peat Free Premium Houseplant Potting Mix", 
    litres:10,
    fcost_incl_VAT:11.99,
    quantity_in_stock:5,
    description:"description",
    fertiliser_image1: `${__dirname}/fertiliser_photos/houseplant_potting_mix.jpg`,
    fertiliser_image2: null,
    fertilisercompany_id: 21   
    //images collected
  },
  {
    fertiliser_name:"Peat Free Premium Mediterranean & Citrus (Special Plants Compost)",
    litres:10,
    fcost_incl_VAT:11.99,
    quantity_in_stock:6,
    description:"Compost with pH and adjusted nutrient ratios for citrus plants that grow oranges, mandarins, lemons, grapefruits, pomelos, and limes. Also good for Mediterranean plants like Cypress and Agapanthus.",
    fertiliser_image1: `${__dirname}/fertiliser_photos/premium_mediterranean_citrus_compost.jpg`,
    fertiliser_image2: null,
    fertilisercompany_id: 21 
    //images collected
  },
  {
    fertiliser_name:"Multi Purpose Compost With Added John Innes (Special Plants Compost)",
    litres:60,
    fcost_incl_VAT:18.99,
    quantity_in_stock:4,
    description:"This compost has added John Innes compost which provides good absroption of water and nutrients; especially important for plants kept in a pot/container for more than one growing season.",
    fertiliser_image1: `${__dirname}/fertiliser_photos/jamieson_multipurpose_compost_johninnes1.jpg`,
    fertiliser_image2: `${__dirname}/fertiliser_photos/jamieson_multipurpose_compost_johninnes2.jpg`,
    fertilisercompany_id: 22
  }
];
const fertilisers = {
    fertiliser_id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true

    },
      fertiliser_name:{
        type: DataTypes.STRING(190),
        allowNull: false
    },
      litres:{
        type: DataTypes.INTEGER,
        allowNull: false

    },
      fcost_incl_VAT:{
        type: DataTypes.DOUBLE(4,2),
        allowNull: false

    },
      quantity_in_stock:{
      type: DataTypes.BOOLEAN,
      allowNull: false

    },
      description:{
      type: DataTypes.TEXT,
      allowNull: false

    },
    fertiliser_image1:{
      type: DataTypes.BLOB,
      allowNull: false
    },
    fertiliser_image2:{
      type: DataTypes.BLOB,
      allowNull: true
    },
      fertilisercompany_id:{
        type: DataTypes.INTEGER,
       
    },   
}

module.exports = {fertilisers,fertiliserData};