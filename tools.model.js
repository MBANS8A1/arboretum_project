const {DataTypes} = require("sequelize");

const toolsData = [
  {
   tool_name: "Traditional Dibber (5610DB)",
   dimensions_cm: "28.5 x 11 x 3.5cm",
   tool_cost_incl_VAT:  13.58,
   quantity: 10,
   contains_stainless_steel: true,
   description: "Can be used to make holes for seeds/seedlings to ensure they are buried in the soil without damage.",
   fsc_certified: false,
   weight_grams: 181.44,
   tool_image1: `${__dirname}/tools_photos/traditional_dibber_5610DB_1.jpg`,
   tool_image2: `${__dirname}/tools_photos/traditional_dibber_5610DB_2.jpg`,
   tool_image3: null,
   toolcompany_id: 2
   //images collected
  },
  {
    tool_name: "Stainless Steel Border Hand Trowel",
    dimensions_cm: "42.5 x 33.5 x 61 cm",
    tool_cost_incl_VAT: 13.00,
    quantity:8,
    contains_stainless_steel:true,
    description:"Can be used for breaking up the earth, small hole digging, planting, weeding and mixing in fertliser and other additives as needed.",
    fsc_certified:true,
    weight_grams: 480,
    tool_image1: `${__dirname}/tools_photos/stainless_steel_border_hand_trowel_1.jpg`,
    tool_image2: `${__dirname}/tools_photos/stainless_steel_border_hand_trowel_2.jpg`,
    tool_image3: null,
    toolcompany_id: 1
    //images collected
  },
  {
    tool_name: "4550DF Traditional Digging Fork",
    dimensions_cm: "90.5 x 18.5 x 12.5 cm",
    tool_cost_incl_VAT:26.00,
    quantity:9,
    contains_stainless_steel:true,
    description:"A traditional digging fork great for digging out loose/sand soil in the garden.",
    fsc_certified:false,
    weight_grams:1950,
    tool_image1:`${__dirname}/tools_photos/traditional_digging_fork_4550DF_1.jpg`,
    tool_image2: `${__dirname}/tools_photos/traditional_digging_fork_4550DF_2.jpg`,
    tool_image3: `${__dirname}/tools_photos/traditional_digging_fork_4550DF_3.jpg`,
    toolcompany_id: 2
    //images collected
  },
  {
    tool_name: "Ultralight digging spade",
    dimensions_cm: "100 x 18 x 6.5 cm",
    tool_cost_incl_VAT:34.10,
    quantity:13,
    contains_stainless_steel:true,
    description:"Perfect tool for planting and transplating. Can also be used to move and turn earth and slice through soil and roots.",
    fsc_certified:false,
    weight_grams:1190,
    tool_image1: `${__dirname}/tools_photos/ultralight_digging_spade_wilkinson1.jpg`,
    tool_image2: `${__dirname}/tools_photos/ultralight_digging_spade_wilkinson2.jpg`,
    tool_image3: `${__dirname}/tools_photos/ultralight_digging_spade_wilkinson3.jpg`,
    toolcompany_id: 3
    //images collected
  },
  {
    tool_name: "8110RS/09 Razorsharp Hedge Shears, Blue",
    dimensions_cm: "59.5L x 22.5W cm",
    tool_cost_incl_VAT:23.98,
    quantity:12,
    contains_stainless_steel:false,
    description:"Use this great hedge shearer for trimming and shaping your hedgerows, pruning your perrenials and for cutting down any overgrown plant stems.",
    fsc_certified:false,
    weight_grams:960,
    tool_image1: `${__dirname}/tools_photos/razorsharp_hedgeshears_1.jpg`,
    tool_image2: `${__dirname}/tools_photos/razorsharp_hedgeshears_2.jpg`,
    tool_image3: `${__dirname}/tools_photos/razorsharp_hedgeshears_3.jpg`,
    toolcompany_id: 2
    //images collected
  },
  {
    tool_name:"Darlac Lightweight Shear",
    dimensions_cm:"47 x 15.5 x 4 cm",
    tool_cost_incl_VAT:22.48,
    quantity:13,
    contains_stainless_steel:false,
    description:"An excellent set of shearers with carbon steel blades for precision hedge trimming and for all your topiary needs.",
    fsc_certified:false,
    weight_grams:578,
    tool_image1:`${__dirname}/tools_photos/darlac_lightweight_shears1.jpg`,
    tool_image2:`${__dirname}/tools_photos/darlac_lightweight_shears2.jpg`,
    tool_image3: null,
    toolcompany_id: 4
    //images collected
  },
  {
    tool_name:"Stand Up Weeder Hand Tool",
    dimensions_cm:"100.33 x 24.13 x 6.35 cm",
    tool_cost_incl_VAT:34.50,
    quantity:9,
    contains_stainless_steel:false,
    description:"This stainless steel weed removing tool has a handy foot pedal to create enough force for penetration into the ground to grab the whole weed (including its roots)",
    fsc_certified:false,
    weight_grams:453.59,
    tool_image1:`${__dirname}/tools_photos/standup_weed_puller1.jpg`,
    tool_image2:`${__dirname}/tools_photos/standup_weed_puller2.jpg`,
    tool_image3:`${__dirname}/tools_photos/standup_weed_puller3.jpg`,
    toolcompany_id: 5
    //images collected
  },
  {

    tool_name:"Scott's Evergreen Hand Spreader, Grass and Lawn Seed Spreader",
    dimensions_cm:"30 x 20 x 20 cm",
    tool_cost_incl_VAT:20.99,
    quantity:6,
    contains_stainless_steel:false,
    description:"This grass and lawn seed spreader will evenly distribute your grass seed to ensure you get a lawn that is neat and uniform without patches.",
    fsc_certified:false,
    weight_grams:9.07,
    tool_image1:`${__dirname}/tools_photos/scott_evergreen_seedlawn_spreader1.jpg`,
    tool_image2:`${__dirname}/tools_photos/scott_evergreen_seedlawn_spreader2.jpg`,
    tool_image3: null,
    toolcompany_id: 6
    //images collected
  },
  {
    tool_name:"Post Hole Digger CT1148",
    dimensions_cm:"13.5 x 23 x 140 cm",
    tool_cost_incl_VAT:29.45,
    quantity:14,
    contains_stainless_steel:false,
    description:"The ideal tool for creating ground holes for fencing.",
    fsc_certified:false,
    weight_grams:3310,
    tool_image1: `${__dirname}/tools_photos/post_hole_digger_ct1148_1.jpg`,
    tool_image2: null,
    tool_image3: null,
    toolcompany_id: 7
     //images collected
  },
  {
    tool_name:"Contour XT Electric Grass Trimmer 300W",
    dimensions_cm:"100L x 31W cm",
    tool_cost_incl_VAT:42.40,
    quantity:20,
    contains_stainless_steel:false,
    description:"This electric grass trimmer is ideal for trimming and contouring small lawns and designed with protective guard to prevent injury to nearby plants and shrubs. ",
    fsc_certified:false,
    weight_grams:2760,
    tool_image1: `${__dirname}/tools_photos/contour_xt_electric_grass_trimmer1.jpg`,
    tool_image2: `${__dirname}/tools_photos/contour_xt_electric_grass_trimmer2.jpg`,
    tool_image3: null,
    toolcompany_id: 8
    //images collected
  },
  {
    tool_name:"Traditional Soil Rake 4850SR",
    dimensions_cm:"30W x 129H cm",
    tool_cost_incl_VAT:30.90,
    quantity:16,
    contains_stainless_steel:true,
    description:"A rust-proof rake great for gathering up garden debris, spreading soil evenly.",
    fsc_certified:false,
    weight_grams:907,
    tool_image1: `${__dirname}/tools_photos/traditional_soil_rake_4850sr1.jpg`,
    tool_image2: `${__dirname}/tools_photos/traditional_soil_rake_4850sr2.jpg`,
    tool_image3: `${__dirname}/tools_photos/traditional_soil_rake_4850sr3.jpg`,
    toolcompany_id: 2
    //images collected
  },
  {
    tool_name:"Hand 3 Prong Cultivator",
    dimensions_cm:"18.5 x 35.5 x 66.5 cm",
    tool_cost_incl_VAT:9.75,
    quantity:13,
    contains_stainless_steel:true,
    description:"This stainless steel cultivator is excelelnt for hand-tilling the soil of your plant beds to provide aeration, cleaning debris from hard-to-reach places and mixing in compost",
    fsc_certified:true,
    weight_grams:110,
    tool_image1: `${__dirname}/tools_photos/hand_3_prong_cultivator1.jpg`,
    tool_image2: `${__dirname}/tools_photos/hand_3_prong_cultivator2.jpg`,
    tool_image3: null,
    toolcompany_id: 1
    //images collected
  },
  {
    tool_name:"Elements 3 Prong Cultivator",
    dimensions_cm:"159.5 x 13.5 x 10.5 cm",
    tool_cost_incl_VAT:28.99,
    quantity:10,
    contains_stainless_steel:false,
    description:"A great prong cultivator for breaking up heavy soil and stony ground. Efficiently cultivates surface soils and beds.",
    fsc_certified:false,
    weight_grams:1000,
    tool_image1: `${__dirname}/tools_photos/elements_prong_cultivator1.jpg`,
    tool_image2: `${__dirname}/tools_photos/elements_prong_cultivator2.jpg`,
    tool_image3: null,
    toolcompany_id: 2
    //images collected
  },
  {
    tool_name:"RHS Compost Scoop",
    dimensions_cm:"31 x 7.6 x 21.6 cm",
    tool_cost_incl_VAT:19.00,
    quantity:6,
    contains_stainless_steel:true,
    description:"The ideal hand-held stainless steel tool for scooping up compost, grit, fertiliser and even bird feeder food.",
    fsc_certified:true,
    weight_grams:210,
    tool_image1:`${__dirname}/tools_photos/rhs_compost_scoop1.jpg`,
    tool_image2:`${__dirname}/tools_photos/rhs_compost_scoop2.jpg`,
    tool_image3:null,
    toolcompany_id: 9
     //images collected
  },
  {
    tool_name:"Bulb Planter Tool",
    dimensions_cm:"44.29 x 21.8 x 12.2 cm",
    tool_cost_incl_VAT:28.99,
    quantity:8,
    contains_stainless_steel:false,
    description:"With this tool you can remove the guesswork involved in getting the right depth for planting your bulbs in the soil. A great tool for planting daffodils, irises and tulips.",
    fsc_certified:false,
    weight_grams:2260,
    tool_image1:`${__dirname}/tools_photos/long_handle_bulb_planter1.jpg`,
    tool_image2:`${__dirname}/tools_photos/long_handle_bulb_planter2.jpg`,
    tool_image3:`${__dirname}/tools_photos/long_handle_bulb_planter3.jpg`,
    toolcompany_id: 10
    //images collected
  },
  {
    tool_name:"Saw-Tooth Lawn Edger T-Grip Half Moon Lawn Edger",
    dimensions_cm:"40.4 x 27.3 x 6.9 cm",
    tool_cost_incl_VAT:27.99,
    quantity:14,
    contains_stainless_steel:false,
    description:"This lawn edger can assist you when it comes to edging out lawns and places for new flower beds along with borders between the grass and soil for new paths. No need for strenuous bending down.",
    fsc_certified:false,
    weight_grams:1840,
    tool_image1:`${__dirname}/tools_photos/saw-tooth_lawn_edger1.jpg`,
    tool_image2:`${__dirname}/tools_photos/saw-tooth_lawn_edger2.jpg`,
    tool_image3:`${__dirname}/tools_photos/saw-tooth_lawn_edger3.jpg`,
    toolcompany_id:10
    //images collected
  }

];
const tools = {
    tool_id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true

    },
    tool_name:{
      type: DataTypes.STRING(65),
      allowNull: false
    },
      dimensions_cm:{
        type: DataTypes.STRING(25),
        allowNull: false
    },
      tool_cost_incl_VAT:{
        type: DataTypes.DOUBLE(4,2),
        allowNull: false

    },
      quantity:{
      type: DataTypes.DOUBLE(4,2),
      allowNull: false

    },
      contains_stainless_steel:{
      type: DataTypes.BOOLEAN,
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
      weight_grams:{
      type: DataTypes.DOUBLE(6,2),
      allowNull: false

    },
    tool_image1:{
      type: DataTypes.BLOB,
      allowNull: false
    },
    tool_image2:{
      type: DataTypes.BLOB,
      allowNull: true
    },
    tool_image3:{
      type: DataTypes.BLOB,
      allowNull: true
    },
      toolcompany_id:{
      type: DataTypes.INTEGER

    }
}

//(300W),(500w)£54.95,650W(£69.49), Contour XT Electric Grass Trimmer

module.exports = {tools,toolsData};