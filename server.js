const sequelize = require("./connection/sequelizeconnect.js")
const {DataTypes} = require("sequelize")
const {createSupplierRef,addSupplierIdToModel} = require("./utility_funcs/utilities.js")

//validate and connect to the database (development, test or production)

sequelize
.authenticate()
.then(()=> console.log("Successfully connected to the Database."))
.catch((error)=> console.log("Failed to connect to the database:",error))

//treeSeed definition
const TreeSeed = sequelize.define("treeseed",{
   // id: { type: DataTypes.INTEGER, primaryKey:true, allowNull: false},
   commonName:{ type: DataTypes.STRING(45)},
   speciesName:{type: DataTypes.STRING(45)},
   family:{type: DataTypes.STRING(45)},
   seedcostInclVAT:{type: DataTypes.DOUBLE(4,2)},
   quantityInStock:{type: DataTypes.INTEGER},
   seedNumberPerPack:{type: DataTypes.INTEGER},
   colour:{type: DataTypes.STRING(20)},
   hardiness:{type: DataTypes.STRING(20)},
   soilType:{type: DataTypes.STRING(60)},
   soilAcidity:{type: DataTypes.STRING(60)},
   description:{type: DataTypes.TEXT},
   treeImage1:{type: DataTypes.BLOB},
   treeImage2:{type: DataTypes.BLOB},
   treeImage3:{type: DataTypes.BLOB}
},{timestamps:false})

//treeSeed list
const treeSeedData = [
  {
    commonName:"Common Hazel/Cob-Nut",
    speciesName:"Corylus avellana",
    family:"Betulaceae",
    seedcostInclVAT:2.18,
    quantityInStock:14,
    seedNumberPerPack:8,
    colour:"mixed",
    hardiness:"hardy",
    soilType:"chalk/sand/loam",
    soilAcidity:"alkaline/neutral",
    description:"A small shrubby tree found in mixed woodlands and hedgerows known for its long yellow catkins that appear in Spring and then produces hazelnuts in Summer. It is native to the UK.",
    treeImage1:`${__dirname}/tree_photos/hazel1.png`,
    treeImage2:`${__dirname}/tree_photos/hazel2.jng`,
    treeImage3:`${__dirname}/tree_photos/hazel3.jng`,
    supplierName:"Gracey Seed-Co Ltd" 
    //image(s) collected
  },
  {
    commonName:"Common Alder",
    speciesName:"Alnus glutinosa",
    family:"Betulaceae",
    seedcostInclVAT:3.22,
    quantityInStock:10,
    seedNumberPerPack:234,
    colour:"green",
    hardiness:"hardy",
    soilType:"clay/chalk/loam",
    soilAcidity:"alkaline/neutral/acid",
    description:"Common in wetland forests, fens and riversides. It can improve soil fertility with its ability to fix nitrogen. Used to make timber veneers, pulp and plywood.",
    treeImage1:`${__dirname}/tree_photos/alnus_glutinosa1.jpg`,
    treeImage2:`${__dirname}/tree_photos/alnus_glutinosa2.jpg`,
    treeImage3: null,
    supplierName:"Gracey Seed-Co Ltd" 
     //image(s) collected
  },
  {
    commonName:"Silver Birch",
    speciesName:"Betula pendula",
    family:"Betulaceae",
    seedcostInclVAT:2.75,
    quantityInStock:6,
    seedNumberPerPack:1680,
    colour:"mixed",
    hardiness:"hardy",
    soilType:"chalk/sand/loam/clay",
    soilAcidity:"alkaline/neutral/acid",
    description:"It is native to Northern Europe and is found on light and dry soils. Woodpeackers commonly nest in the trunks of this tree. It is a hardwood used in plywood production, toys and wooden back of brushes.",
    treeImage1:`${__dirname}/tree_photos/betula_pendula1.jpg`,
    treeImage2:`${__dirname}/tree_photos/betula_pendula2.jpg`,
    treeImage3:`${__dirname}/tree_photos/betula_pendula3.jpg`,
    supplierName:"Fothergill Seeds Ltd"
    //image(s) collected
  },
  {
    commonName:"Cherry Dogwood/Cornelian Cherry",
    speciesName:"Cornus mas",
    family:"Cornaceae",
    seedcostInclVAT:3.20,
    quantityInStock:7,
    seedNumberPerPack:19,
    colour:"yellow/orange",
    hardiness:"hardy",
    soilType:"chalk/sand/loam/clay",
    soilAcidity:"alkaline/neutral/acid",
    description:"It is a multi-stemmed shrub/tree that is notable for being disease-resistant. The fruit produced has skin that is unpleasant with a grainy and bitter taste. They are native to North America, Asia and Europe. It is strong and sturdy and these properties make it a good building material.",
    treeImage1:`${__dirname}/tree_photos/cornus_mas1.jpg`,
    treeImage2:`${__dirname}/tree_photos/cornus_mas2.jpg`,
    treeImage3:`${__dirname}/tree_photos/cornus_mas3.jpg`,
    supplierName:"Chiltern Seeds"
    //image(s) collected
  },
  {
    commonName:"Sugar Maple",
    speciesName:"Acer sacchurum",
    family:"Aceraceae",
    seedcostInclVAT:2.99,
    quantityInStock:20,
    seedNumberPerPack:18,
    colour:"mixed",
    hardiness:"hardy",
    soilType:"sand/loam/clay",
    soilAcidity:"alkaline/neutral/acid",
    description:"The leaf of the tree is the national emblem of Canada; known for producing a sweet maple syrup and is native to eastern North America. Leaves have three to five lobes and show various shades of gold to scarlet in autumn. It produces greenish yellow flowers in Spring.",
    treeImage1:`${__dirname}/tree_photos/acer_saccharum1.jpg`,
    treeImage2:`${__dirname}/tree_photos/acer_saccharum2.jpg`,
    treeImage3: null,
    supplierName:"D.T. Brown Seeds"
    //image(s) collected
  },
  {
    commonName:"Black Mulberry",
    speciesName:"Morus nigra",
    family:"Moraceae",
    seedcostInclVAT:2.65,
    quantityInStock:20,
    seedNumberPerPack:288,
    colour:"mixed",
    hardiness:"hardy",
    soilType:"chalk/sand/loam/clay",
    soilAcidity:"alkaline/neutral/acid",
    description:"A species native to west Asia that is cultivated for its fruit. It produces dark-green heart shaped leaves and is deciduous. It is low maintenance, attracts pollinators and improves soil health.",
    treeImage1: `${__dirname}/tree_photos/morus_nigra1.jpg`,
    treeImage2: `${__dirname}/tree_photos/morus_nigra2.jpg`,
    treeImage3: `${__dirname}/tree_photos/morus_nigra3.jpg`,
    supplierName:"D.T. Brown Seeds"
    //image(s) collected
  },
  {
    commonName:"Lemonade Tree/Baobob",
    speciesName:"Adansonia digitata",
    family:"Bombacaceae",
    seedcostInclVAT:3.10,
    quantityInStock:15,
    seedNumberPerPack:6,
    colour:"green",
    hardiness:"tender",
    soilType:"sand/loam",
    soilAcidity:"alkaline/neutral/acid",
    description:"This tree produces short stubby branches from the top of a swollen water-containing trunk. They grow in 32 African countries and can live up to 5000 years. Its pendulous flowers are pollinated by bush babies and bats, its young leaves are edible and produces a woody fruit.",
    treeImage1:`${__dirname}/tree_photos/boabab1.jpg`,
    treeImage2:`${__dirname}/tree_photos/boabab2.jpg`,
    treeImage3:null,
    supplierName:"Chiltern Seeds" 
    //image(s) collected
  },
  {
    commonName:"Common Hornbeam",
    speciesName:"Carpinus betulus",
    family:"Betulaceae",
    seedcostInclVAT:2.85,
    quantityInStock:20,
    seedNumberPerPack:27,
    colour:"mixed",
    hardiness:"hardy",
    soilType:"chalk/sand/loam/clay",
    soilAcidity:"alkaline/neutral/acid",
    description:"Found in southern and easter England; it produces catkins in late Spring and winged seeds can be spotted in autumn and are dispersed by the wind.It has a twisted trunk with tooth-edged leaves. Commonly it is used for flooring and furniture.",
    treeImage1:`${__dirname}/tree_photos/carpinus_betulus1.jpg`,
    treeImage2:`${__dirname}/tree_photos/carpinus_betulus_catkins2.jpg`,
    treeImage3:null,
    supplierName:"Chiltern Seeds" 
    //image(s) collected
  },
  {
    commonName:"Argyle Apple/Mealy Stringybark",
    speciesName:"Eucalyptus cinerea",
    family:"Myrtaceae",
    seedcostInclVAT:2.90,
    quantityInStock:16,
    seedNumberPerPack:26,
    colour:"greyish-white",
    hardiness:"hardy",
    soilType:"chalk/sand/loam/clay",
    soilAcidity:"neutral/acid",
    description:"This is an evergreen tree with a striking canopy of blue-silver foliage. It is tolerant to UK climate, prefers slightly acidic soil and is used as an astringent and antiseptic.",
    treeImage1:`${__dirname}/tree_photos/eucalyptus_cinerea1.jpg`,
    treeImage2:`${__dirname}/tree_photos/eucalyptus_cinerea2.jpg`,
    treeImage3:null,
    supplierName:"Kings Seeds"
    //image(s) collected
  },
  {
    commonName:"Dawn Redwood",
    speciesName:"Metasequoia glyptostroboides",
    family:"Pinaceae",
    seedcostInclVAT:3.30,
    quantityInStock:13,
    seedNumberPerPack:70,
    colour:"mixed",
    hardiness:"hardy",
    soilType:"chalk/sand/loam/clay",
    soilAcidity:"alkaline/neutral/acid",
    description:"A native tree of China but grows comfortably in UK climates. Mostly planted as an ornamental tree and is a fast growing deciduous tree with needle-like green leaves that turn copper-red when shed in autumn.",
    treeImage1:`${__dirname}/tree_photos/dawn_redwood1.jpg`,
    treeImage2:`${__dirname}/tree_photos/dawn_redwood2.jpg`,
    treeImage3:`${__dirname}/tree_photos/dawn_redwood3.jpg`,
    supplierName:"D.T. Brown Seeds" 
    //image(s) collected
  },
  {
    commonName:"Norway Maple",
    speciesName:"Acer platanoides",
    family:"Aceraceae",
    seedcostInclVAT:1.92,
    quantityInStock:10,
    seedNumberPerPack:20,
    colour:"yellow/orange",
    hardiness:"hardy",
    soilType:"sand/loam/clay",
    soilAcidity:"alkaline/neutral/acid",
    description:"This tree is found expansively across Europe and Asia and is a common ornamental landscape plant. When they grow they produce a lot of shade that makes it hard for plants and grass underneath to grow.",
    treeImage1:`${__dirname}/tree_photos/acer_platanoides1.jpg`,
    treeImage2:`${__dirname}/tree_photos/acer_platanoides2.jpg`,
    treeImage3:`${__dirname}/tree_photos/acer_platanoides3.jpg`,
    supplierName:"Moles Seeds Ltd"
  },
  {
    commonName:"Cootamundra Wattle",
    speciesName:"Acacia baileyana",
    family:"Leguminosae/Fabaceae",
    seedcostInclVAT:1.34,
    quantityInStock:26,
    seedNumberPerPack:24,
    colour:"yellow",
    hardiness:"hardy/half-hardy",
    soilType:"sand/loam",
    soilAcidity:"neutral/acid",
    description:"This is a tree/shrub with smooth grey-to-brown bark and blue-grey foliage. It is planted in parks and gardens as a wind-break and shading tree.",
    treeImage1:`${__dirname}/tree_photos/acacia_baileyana1.jpg`,
    treeImage2:`${__dirname}/tree_photos/acacia_baileyana2.jpg`,
    treeImage3: null,
    supplierName:"Moles Seeds Ltd"
    //image(s) collected
  },
];

//fertiliser definition
const Fertiliser = sequelize.define("fertiliser",{
   fertiliserName:{type: DataTypes.STRING(190)},
   litres:{type: DataTypes.INTEGER},
   fcostInclVAT:{type: DataTypes.DOUBLE(4,2)},
   quantityInStock:{type: DataTypes.BOOLEAN},
   description:{type: DataTypes.TEXT},
   fertiliserImage1:{type: DataTypes.BLOB},
   fertiliserImage2:{type: DataTypes.BLOB}
},{timestamps:false})

 // fertilisers list
 const fertiliserData = [
  {
    fertiliserName:"Peat Free Plant & Grow (compost for all plants)",
    litres:10,
    fcostInclVAT:11.99,
    quantityInStock:5,
    description:"Great general all-round compost that provides nutrients and beneficial soil structure to promote the growth of most plants.",
    fertiliserImage1: `${__dirname}/fertiliser_photos/plant_and_grow_compost.jpg`,
    fertiliserImage2: null,
    supplierName: "Miracle Gro"
    //images collected
  },
  {
    fertiliserName:"Peat Free Premium Azalea, Camellia, Rhododendron (Ericaceous Plants Compost)",
    litres:10,
    fcostInclVAT:11.99,
    quantityInStock:3,
    description:"Compost with pH and adjusted nutrient ratios for Azalea, Camellia, Rhododendron and other members of the Ericaceae family.",
    fertiliserImage1: `${__dirname}/fertiliser_photos/azalea_camellia_rhododendron_miraclegrow1.jpg`,
    fertiliserImage2: null,
    supplierName: "Miracle Gro"
    //images collected
  },
  {
    fertiliserName:"Peat Free Premium All Purpose (Compost for all plants)",
    litres:10,
    fcostInclVAT:11.99,
    quantityInStock:2,
    description:"Premium grade compost with the correct balance of green and brown material to supply the right amount of nitrogen and carbon for plant grwoing needs.",
    fertiliserImage1: `${__dirname}/fertiliser_photos/premium_all_purpose_compost.jpg`,
    fertiliserImage2: null,
    supplierName: "Miracle Gro"
    //images collected
  },
  {
    fertiliserName:"Peat Free Premium Cactus Succulent & Bonsai (Special Plants Compost)",
    litres:10,
    fcostInclVAT:11.99,
    quantityInStock:5,
    description:"A great compost mix for potted succulents and bonsai with adjusted pH and naturient ratios.",
    fertiliserImage1: `${__dirname}/fertiliser_photos/cactus_succulent_bonsai_specialplant_compost.jpg`,
    fertiliserImage2: null,
    supplierName: "Miracle Gro"
    
     //images collected
  },
  {
    fertiliserName:"Peat Free Premium Houseplant Potting Mix", 
    litres:10,
    fcostInclVAT:11.99,
    quantityInStock:5,
    description:"description",
    fertiliserImage1: `${__dirname}/fertiliser_photos/houseplant_potting_mix.jpg`,
    fertiliserImage2: null,
    supplierName: "Miracle Gro"   
    //images collected
  },
  {
    fertiliserName:"Peat Free Premium Mediterranean & Citrus (Special Plants Compost)",
    litres:10,
    fcostInclVAT:11.99,
    quantityInStock:6,
    description:"Compost with pH and adjusted nutrient ratios for citrus plants that grow oranges, mandarins, lemons, grapefruits, pomelos, and limes. Also good for Mediterranean plants like Cypress and Agapanthus.",
    fertiliserImage1: `${__dirname}/fertiliser_photos/premium_mediterranean_citrus_compost.jpg`,
    fertiliserImage2: null,
    supplierName: "Miracle Gro" 
    //images collected
  },
  {
    fertiliserName:"Multi Purpose Compost With Added John Innes (Special Plants Compost)",
    litres:60,
    fcostInclVAT:18.99,
    quantityInStock:4,
    description:"This compost has added John Innes compost which provides good absroption of water and nutrients; especially important for plants kept in a pot/container for more than one growing season.",
    fertiliserImage1: `${__dirname}/fertiliser_photos/jamieson_multipurpose_compost_johninnes1.jpg`,
    fertiliserImage2: `${__dirname}/fertiliser_photos/jamieson_multipurpose_compost_johninnes2.jpg`,
    supplierName: "Jamieson Brothers"
  }
];

//tool definition
const Tool = sequelize.define("tool",{
   toolName:{type: DataTypes.STRING(65)},
   dimensionsCm:{type: DataTypes.STRING(25)},
   toolCostInclVAT:{type: DataTypes.DOUBLE(4,2)},
   quantity:{type: DataTypes.DOUBLE(4,2)},
   containsStainlessSteel:{type: DataTypes.BOOLEAN},
   description:{type: DataTypes.TEXT},
   fscCertified:{type: DataTypes.BOOLEAN},
   weightGrams:{type: DataTypes.DOUBLE(6,2)},
   toolImage1:{type: DataTypes.BLOB},
   toolImage2:{type: DataTypes.BLOB},
   toolImage3:{type: DataTypes.BLOB}
},{timestamps: false})

//tool list
const toolsData = [
  {
   toolName: "Traditional Dibber (5610DB)",
   dimensionsCm: "28.5 x 11 x 3.5cm",
   toolCostInclVAT:  13.58,
   quantity: 10,
   containsStainlessSteel: true,
   description: "Can be used to make holes for seeds/seedlings to ensure they are buried in the soil without damage.",
   fscCertified: false,
   weightGrams: 181.44,
   toolImage1: `${__dirname}/tools_photos/traditional_dibber_5610DB_1.jpg`,
   toolImage2: `${__dirname}/tools_photos/traditional_dibber_5610DB_2.jpg`,
   toolImage3: null,
   supplierName: "Spear & Jackson"
   //images collected
  },
  {
    toolName: "Stainless Steel Border Hand Trowel",
    dimensionsCm: "42.5 x 33.5 x 61 cm",
    toolCostInclVAT: 13.00,
    quantity:8,
    containsStainlessSteel:true,
    description:"Can be used for breaking up the earth, small hole digging, planting, weeding and mixing in fertliser and other additives as needed.",
    fscCertified:true,
    weightGrams: 480,
    toolImage1: `${__dirname}/tools_photos/stainless_steel_border_hand_trowel_1.jpg`,
    toolImage2: `${__dirname}/tools_photos/stainless_steel_border_hand_trowel_2.jpg`,
    toolImage3: null,
    supplierName: "Kent & Stowe"
    //images collected
  },
  {
    toolName: "4550DF Traditional Digging Fork",
    dimensionsCm: "90.5 x 18.5 x 12.5 cm",
    toolCostInclVAT:26.00,
    quantity:9,
    containsStainlessSteel:true,
    description:"A traditional digging fork great for digging out loose/sand soil in the garden.",
    fscCertified:false,
    weightGrams:1950,
    toolImage1:`${__dirname}/tools_photos/traditional_digging_fork_4550DF_1.jpg`,
    toolImage2: `${__dirname}/tools_photos/traditional_digging_fork_4550DF_2.jpg`,
    toolImage3: `${__dirname}/tools_photos/traditional_digging_fork_4550DF_3.jpg`,
    supplierName: "Spear & Jackson"
    //images collected
  },
  {
    toolName: "Ultralight digging spade",
    dimensionsCm: "100 x 18 x 6.5 cm",
    toolCostInclVAT:34.10,
    quantity:13,
    containsStainlessSteel:true,
    description:"Perfect tool for planting and transplating. Can also be used to move and turn earth and slice through soil and roots.",
    fscCertified:false,
    weightGrams:1190,
    toolImage1: `${__dirname}/tools_photos/ultralight_digging_spade_wilkinson1.jpg`,
    toolImage2: `${__dirname}/tools_photos/ultralight_digging_spade_wilkinson2.jpg`,
    toolImage3: `${__dirname}/tools_photos/ultralight_digging_spade_wilkinson3.jpg`,
    supplierName: "Wilkinson Sword"
    //images collected
  },
  {
    toolName: "8110RS/09 Razorsharp Hedge Shears, Blue",
    dimensionsCm: "59.5L x 22.5W cm",
    toolCostInclVAT:23.98,
    quantity:12,
    containsStainlessSteel:false,
    description:"Use this great hedge shearer for trimming and shaping your hedgerows, pruning your perrenials and for cutting down any overgrown plant stems.",
    fscCertified:false,
    weightGrams:960,
    toolImage1: `${__dirname}/tools_photos/razorsharp_hedgeshears_1.jpg`,
    toolImage2: `${__dirname}/tools_photos/razorsharp_hedgeshears_2.jpg`,
    toolImage3: `${__dirname}/tools_photos/razorsharp_hedgeshears_3.jpg`,
    supplierName: "Spear & Jackson" 
    //images collected
  },
  {
    toolName:"Darlac Lightweight Shear",
    dimensionsCm:"47 x 15.5 x 4 cm",
    toolCostInclVAT:22.48,
    quantity:13,
    containsStainlessSteel:false,
    description:"An excellent set of shearers with carbon steel blades for precision hedge trimming and for all your topiary needs.",
    fscCertified:false,
    weightGrams:578,
    toolImage1:`${__dirname}/tools_photos/darlac_lightweight_shears1.jpg`,
    toolImage2:`${__dirname}/tools_photos/darlac_lightweight_shears2.jpg`,
    toolImage3: null,
    supplierName: "Darlac Ltd"
    //images collected
  },
  {
    toolName:"Stand Up Weeder Hand Tool",
    dimensionsCm:"100.33 x 24.13 x 6.35 cm",
    toolCostInclVAT:34.50,
    quantity:9,
    containsStainlessSteel:false,
    description:"This stainless steel weed removing tool has a handy foot pedal to create enough force for penetration into the ground to grab the whole weed (including its roots)",
    fscCertified:false,
    weightGrams:453.59,
    toolImage1:`${__dirname}/tools_photos/standup_weed_puller1.jpg`,
    toolImage2:`${__dirname}/tools_photos/standup_weed_puller2.jpg`,
    toolImage3:`${__dirname}/tools_photos/standup_weed_puller3.jpg`,
    supplierName: "Walensee"
    //images collected
  },
  {

    toolName:"Scott's Evergreen Hand Spreader, Grass and Lawn Seed Spreader",
    dimensionsCm:"30 x 20 x 20 cm",
    toolCostInclVAT:20.99,
    quantity:6,
    containsStainlessSteel:false,
    description:"This grass and lawn seed spreader will evenly distribute your grass seed to ensure you get a lawn that is neat and uniform without patches.",
    fscCertified:false,
    weightGrams:9.07,
    toolImage1:`${__dirname}/tools_photos/scott_evergreen_seedlawn_spreader1.jpg`,
    toolImage2:`${__dirname}/tools_photos/scott_evergreen_seedlawn_spreader2.jpg`,
    toolImage3: null,
    supplierName: "Evergreen Garden Care Ltd"
    //images collected
  },
  {
    toolName:"Post Hole Digger CT1148",
    dimensionsCm:"13.5 x 23 x 140 cm",
    toolCostInclVAT:29.45,
    quantity:14,
    containsStainlessSteel:false,
    description:"The ideal tool for creating ground holes for fencing.",
    fscCertified:false,
    weightGrams:3310,
    toolImage1: `${__dirname}/tools_photos/post_hole_digger_ct1148_1.jpg`,
    toolImage2: null,
    toolImage3: null,
    supplierName: "Neilsen"
     //images collected
  },
  {
    toolName:"Contour XT Electric Grass Trimmer 300W",
    dimensionsCm:"100L x 31W cm",
    toolCostInclVAT:42.40,
    quantity:20,
    containsStainlessSteel:false,
    description:"This electric grass trimmer is ideal for trimming and contouring small lawns and designed with protective guard to prevent injury to nearby plants and shrubs. ",
    fscCertified:false,
    weightGrams:2760,
    toolImage1: `${__dirname}/tools_photos/contour_xt_electric_grass_trimmer1.jpg`,
    toolImage2: `${__dirname}/tools_photos/contour_xt_electric_grass_trimmer2.jpg`,
    toolImage3: null,
    supplierName: "Flymo" 
    //images collected
  },
  {
    toolName:"Traditional Soil Rake 4850SR",
    dimensionsCm:"30W x 129H cm",
    toolCostInclVAT:30.90,
    quantity:16,
    containsStainlessSteel:true,
    description:"A rust-proof rake great for gathering up garden debris, spreading soil evenly.",
    fscCertified:false,
    weightGrams:907,
    toolImage1: `${__dirname}/tools_photos/traditional_soil_rake_4850sr1.jpg`,
    toolImage2: `${__dirname}/tools_photos/traditional_soil_rake_4850sr2.jpg`,
    toolImage3: `${__dirname}/tools_photos/traditional_soil_rake_4850sr3.jpg`,
    supplierName: "Spear & Jackson"
    //images collected
  },
  {
    toolName:"Hand 3 Prong Cultivator",
    dimensionsCm:"18.5 x 35.5 x 66.5 cm",
    toolCostInclVAT:9.75,
    quantity:13,
    containsStainlessSteel:true,
    description:"This stainless steel cultivator is excelelnt for hand-tilling the soil of your plant beds to provide aeration, cleaning debris from hard-to-reach places and mixing in compost",
    fscCertified:true,
    weightGrams:110,
    toolImage1: `${__dirname}/tools_photos/hand_3_prong_cultivator1.jpg`,
    toolImage2: `${__dirname}/tools_photos/hand_3_prong_cultivator2.jpg`,
    toolImage3: null,
    supplierName: "Kent & Stowe" 
    //images collected
  },
  {
    toolName:"Elements 3 Prong Cultivator",
    dimensionsCm:"159.5 x 13.5 x 10.5 cm",
    toolCostInclVAT:28.99,
    quantity:10,
    containsStainlessSteel:false,
    description:"A great prong cultivator for breaking up heavy soil and stony ground. Efficiently cultivates surface soils and beds.",
    fscCertified:false,
    weightGrams:1000,
    toolImage1: `${__dirname}/tools_photos/elements_prong_cultivator1.jpg`,
    toolImage2: `${__dirname}/tools_photos/elements_prong_cultivator2.jpg`,
    toolImage3: null,
    supplierName: "Spear & Jackson" 
    //images collected
  },
  {
    toolName:"RHS Compost Scoop",
    dimensionsCm:"31 x 7.6 x 21.6 cm",
    toolCostInclVAT:19.00,
    quantity:6,
    containsStainlessSteel:true,
    description:"The ideal hand-held stainless steel tool for scooping up compost, grit, fertiliser and even bird feeder food.",
    fscCertified:true,
    weightGrams:210,
    toolImage1:`${__dirname}/tools_photos/rhs_compost_scoop1.jpg`,
    toolImage2:`${__dirname}/tools_photos/rhs_compost_scoop2.jpg`,
    toolImage3:null,
    supplierName: "Burgon & Ball"
     //images collected
  },
  {
    toolName:"Bulb Planter Tool",
    dimensionsCm:"44.29 x 21.8 x 12.2 cm",
    toolCostInclVAT:28.99,
    quantity:8,
    containsStainlessSteel:false,
    description:"With this tool you can remove the guesswork involved in getting the right depth for planting your bulbs in the soil. A great tool for planting daffodils, irises and tulips.",
    fscCertified:false,
    weightGrams:2260,
    toolImage1:`${__dirname}/tools_photos/long_handle_bulb_planter1.jpg`,
    toolImage2:`${__dirname}/tools_photos/long_handle_bulb_planter2.jpg`,
    toolImage3:`${__dirname}/tools_photos/long_handle_bulb_planter3.jpg`,
    supplierName: "Colwelt"
    //images collected
  },
  {
    toolName:"Saw-Tooth Lawn Edger T-Grip Half Moon Lawn Edger",
    dimensionsCm:"40.4 x 27.3 x 6.9 cm",
    toolCostInclVAT:27.99,
    quantity:14,
    containsStainlessSteel:false,
    description:"This lawn edger can assist you when it comes to edging out lawns and places for new flower beds along with borders between the grass and soil for new paths. No need for strenuous bending down.",
    fscCertified:false,
    weightGrams:1840,
    toolImage1:`${__dirname}/tools_photos/saw-tooth_lawn_edger1.jpg`,
    toolImage2:`${__dirname}/tools_photos/saw-tooth_lawn_edger2.jpg`,
    toolImage3:`${__dirname}/tools_photos/saw-tooth_lawn_edger3.jpg`,
    supplierName: "Colwelt"
    //images collected
  }

];


const GiftCard = sequelize.define("giftcard",{
   cardName:{type: DataTypes.STRING(190)},
   dimensionsCm:{type: DataTypes.STRING(40)},
   weightGrams:{type: DataTypes.DOUBLE(6,2)},
   cardCostInclVAT:{type: DataTypes.DOUBLE(4,2)},
   quantityInStock:{type: DataTypes.INTEGER},
   description:{type: DataTypes.TEXT},
   fscCertified:{type: DataTypes.BOOLEAN},
   cardImage1:{type: DataTypes.BLOB},
   cardImage2:{type: DataTypes.BLOB},
   cardImage3:{type: DataTypes.BLOB}
},{timestamps:false})

//gift cards list
const giftCardsData = [
  {
    cardName:"This Card Plants A Woodland Tree",
    dimensionsCm:"21 x 14.9 x 0.3 cm",
    weightGrams:47,
    cardCostInclVAT:10.10,
    quantityInStock:16,
    description:"description",
    fscCertified:true,
    cardImage1: `${__dirname}/gift_card_photos/card_plants_a_woodland_tree1.jpg`,
    cardImage2: `${__dirname}/gift_card_photos/card_plants_a_woodland_tree2.jpg`,
    cardImage3: null,
    supplierName: "Tree Appeal" 
    //images collected
  },
  {
    cardName:"Male/Female General Greeting Card - Beautiful Bluebell Woods",
    dimensionsCm:"16 x 16 x 0.03 cm",
    weightGrams:20,
    cardCostInclVAT:3.60,
    quantityInStock:13,
    description:"description",
    fscCertified:false,
    cardImage1: `${__dirname}/gift_card_photos/beautiful_bluebell_woods.jpg`,
    cardImage2: null,
    cardImage3: null,
    supplierName: "Noel Tatt"
    
    //images collected
  },
  {
    cardName:"Old Tree Forest Nature Oak-Celebration Anniversary",
    dimensionsCm:"14.8 x 14.4 x 0.2 cm",
    weightGrams:20,
    cardCostInclVAT:4.99,
    quantityInStock:4,
    description:"description",
    fscCertified:false,
    cardImage1: `${__dirname}/gift_card_photos/greeting_card_tree_forest_nature_anniversary1.jpg`,
    cardImage2: `${__dirname}/gift_card_photos/greeting_card_tree_forest_nature_anniversary2.jpg`,
    cardImage3: null,
    supplierName: "DV Design" 
    //images collected
  },
  {
    cardName:"Woodmansterne National Trust Nature Blank/Birthday Card-Sissinghurst Castle Garden",
    dimensionsCm:"17.3 x 16.7 x 0.03 cm",
    weightGrams:30,
    cardCostInclVAT:4.80,
    quantityInStock:5,
    description:"description",
    fscCertified:false,
    cardImage1: `${__dirname}/gift_card_photos/sissinghurst_castle_garden.jpg`,
    cardImage2: null,
    cardImage3: null,
    supplierName: "Woodmansterne"
    //images collected
  },
  {
    cardName:"Reflected Trees Buttermere The Lake District Birthday Card BBC Countryfile Range",
    dimensionsCm:"16 x 16 x 0.03 cm",
    weightGrams:40,
    cardCostInclVAT:4.49,
    quantityInStock:14,
    description:"description",
    fscCertified:true,
    cardImage1: `${__dirname}/gift_card_photos/buttermere_lake_district_1.jpg`,
    cardImage2: `${__dirname}/gift_card_photos/buttermere_lake_district_2.jpg`,
    cardImage3: null,
    supplierName: "Abacus Cards" 
    //images collected
  },
  {
    cardName:"Yorkshire Dales Narrow Countryside Lane BBC Countryfile Range",
    dimensionsCm:"16 x 16 x 0.03 cm",
    weightGrams:40,
    cardCostInclVAT:3.95,
    quantityInStock:11,
    description:"description",
    fscCertified:true,
    cardImage1: `${__dirname}/gift_card_photos/yorkshire_dales_card1.jpg`,
    cardImage2: `${__dirname}/gift_card_photos/yorkshire_dales_card2.jpg`,
    cardImage3: null,
    supplierName: "Abacus Cards" 
    //images collected
  },
  {
    cardName:"Yggdrasil Tree of Life Greeting Card",
    dimensionsCm:"14.7 x 14.7 x 0.1 cm",
    weightGrams:10,
    cardCostInclVAT:3.99,
    quantityInStock:10,
    description:"description",
    fscCertified:false,
    cardImage1: `${__dirname}/gift_card_photos/yggdrasil_greeting_card1.jpg`,
    cardImage2: `${__dirname}/gift_card_photos/yggdrasil_greeting_card2.jpg`,
    cardImage3: `${__dirname}/gift_card_photos/yggdrasil_greeting_card3.jpg`,
    supplierName: "Nokular Limited"
  }
];

const CompostSack = sequelize.define("compostsack",{
   sackName:{type: DataTypes.STRING(190)},
   litres:{type: DataTypes.INTEGER},
   rollUnitCount:{type: DataTypes.INTEGER},
   isBiodegradable:{type: DataTypes.BOOLEAN},
   colour:{type: DataTypes.STRING(30)},
   sackCostInclVAT:{type: DataTypes.DOUBLE(4,2)},
   description:{type: DataTypes.TEXT},
   stockQuantity:{type: DataTypes.INTEGER},
   sackWeight:{type: DataTypes.DOUBLE(6,2)},
   compostSackImage1:{type: DataTypes.BLOB},
   compostSackImage2:{type: DataTypes.BLOB},
   compostSackImage3:{type: DataTypes.BLOB}
},{timestamps:false})

const compostSacksData = [
  {
    sackName:"Compostable Wheeled Bin Liner/Garden Waste Compost Sack",
    litres:240,
    rollUnitCount:10,
    isBiodegradable:true,
    colour:"green",
    sackCostInclVAT:15.00,
    description:"Biodegradable green liner for food waster.",
    stockQuantity:13,
    sackWeight: 58,
    compostSackImage1: `${__dirname}/compost_sack_photos/alina_compostable_wheeled_liner1.jpg`,
    compostSackImage2: `${__dirname}/compost_sack_photos/alina_compostable_wheeled_liner2.jpg`,
    compostSackImage3: null,
    supplierName: "Alina" 
    //images collected
  },
  {

    sackName:"Compostable Handle Bags",
    litres:6,
    rollUnitCount:140,
    isBiodegradable:true,
    colour:"green",
    sackCostInclVAT:10.50,
    description:"These food waste bags contain no polyethylene and contain biodegradable plant starches.",
    stockQuantity:14,
    sackWeight: 880,
    compostSackImage1: `${__dirname}/compost_sack_photos/grefusion_compostable_handle_bag1.jpg`,
    compostSackImage2: `${__dirname}/compost_sack_photos/grefusion_compostable_handle_bag2.jpg`,
    compostSackImage3: null,
    supplierName: "GreFusion" 
    //images collected
  },
  {
    sackName:"Garden Waste Bag - Heavy Duty with Handles",
    litres:272,
    rollUnitCount:1,
    isBiodegradable:false,
    colour:"green",
    sackCostInclVAT:15.05,
    description:"High capacity garden bags for leaf debris and other plant waste. Is water repellant and UV stable too.",
    stockQuantity:9,
    sackWeight: 440,
    compostSackImage1: `${__dirname}/compost_sack_photos/heavy_duty_gardenwaste_bag.jpg`,
    compostSackImage2: null,
    compostSackImage3: null, 
    supplierName: "GardenGloss"
    //images collected

  },
  {
    sackName:"Jute Leaf Composting Sacks",
    litres:null,
    rollUnitCount:2,
    isBiodegradable:true,
    colour:"light-brown",
    sackCostInclVAT:5.99,
    description:"An eco-friendly bag excellent for composting leaves easily.",
    stockQuantity:12,
    sackWeight: null,
    compostSackImage1: `${__dirname}/compost_sack_photos/jute_leaf_composting_sack1.jpeg`,
    compostSackImage2: `${__dirname}/compost_sack_photos/jute_leaf_composting_sack2.jpeg`,
    compostSackImage3: null,
    supplierName: "Nutscene"
  }
  //images collected
];

//supplier definition
const Supplier = sequelize.define("supplier",{
  id:{type: DataTypes.INTEGER, autoIncrement: true, primaryKey:true },

   supplierName:{type: DataTypes.STRING(60) }
},{timestamps:false})

//supplier list
const suppliersData = [
  {
    supplierName: "Kent & Stowe" //1
  },
  {
    supplierName: "Spear & Jackson" //2
  },
  {
    supplierName: "Wilkinson Sword" //3
  },
  {
    supplierName: "Darlac Ltd" //4
  },
  {
    supplierName: "Walensee" //5
  },
  {
    supplierName: "Evergreen Garden Care Ltd" //6
  },
  {
    supplierName: "Neilsen" //7
  },
  {
    supplierName: "Flymo" //8
  },
  {
    supplierName: "Burgon & Ball" //9
  },
  {
    supplierName: "Colwelt" //10
  },
  {
    supplierName: "Alina" //11
  },
  {
    supplierName: "GreFusion" //12
  },
  {
    supplierName: "GardenGloss" //13
  },
  {
    supplierName: "Nutscene" //14
  },
  {
    supplierName: "Gracey Seed-Co Ltd" //15
  },
  {
    supplierName: "Fothergill Seeds Ltd" //16
  },
  {
    supplierName: "Chiltern Seeds" //17
  },
  {
    supplierName: "D.T. Brown Seeds" //18
  },
  {
    supplierName: "Kings Seeds" //19
  },
  {
    supplierName: "Moles Seeds Ltd" //20
  },
  {
    supplierName: "Miracle Gro" //21
  },
  {
    supplierName: "Jamieson Brothers" //22
  },
  {
    supplierName: "Tree Appeal" //23
  },
  {
    supplierName: "Noel Tatt" //24
  },
  {
    supplierName: "DV Design" //25
  },
  {
    supplierName: "Woodmansterne" //26
  },
  {
    supplierName: "Abacus Cards" //27
  },
  {
    supplierName: "Nokular Limited" //28
  },
  {
    supplierName: "Purple Fox" //29
  }
]

// One-to-many relationship(s)
  Supplier.hasMany(TreeSeed);
  Supplier.hasMany(Fertiliser);
  Supplier.hasMany(Tool);
  Supplier.hasMany(GiftCard);
  Supplier.hasMany(CompostSack);


  

  sequelize.sync({force:true}).then(()=>{
    //create suppliers in bulk
    Supplier.bulkCreate(suppliersData,{validate:true}).then((supplier_records)=>{
        const supplierref = createSupplierRef(supplier_records)
        const swappedTreeData = addSupplierIdToModel(treeSeedData,supplierref)
        const swappedFertiliserData = addSupplierIdToModel(fertiliserData,supplierref)
        const swappedToolData = addSupplierIdToModel(toolsData,supplierref)
        const swappedSackData = addSupplierIdToModel(compostSacksData,supplierref)
        const swappedGiftCardData = addSupplierIdToModel(giftCardsData,supplierref)
    //create treeseeds in bulk
       TreeSeed.bulkCreate(swappedTreeData,{validate:true}).then(()=>{
          Supplier.findAll({
             raw: true,
             where:{supplierName: "Chiltern Seeds" },
             include:[{model: TreeSeed}]
          }).then((response)=> console.log(response))
          .catch((error)=> console.error("Failed to retrieve data:",error))
       }).catch((error)=> console.log(error))
       //create fertilisers in bulk
       Fertiliser.bulkCreate(swappedFertiliserData,{validate:true}).then(()=>{
        Supplier.findAll({
            raw: true,
            where:{supplierName: "Miracle Gro" },
            include:[{model: Fertiliser}]
          }).then((response)=> console.log(response))
          .catch((error)=> console.error("Failed to retrieve data:",error))
       }).catch((error)=> console.log(error))
       //create giftcards in bulk
       GiftCard.bulkCreate(swappedGiftCardData,{validate:true}).then(()=>{
        Supplier.findAll({
          raw: true,
          where:{supplierName: "Tree Appeal" },
          include:[{model: GiftCard}]
        }).then((response)=> console.log(response))
        .catch((error)=> console.error("Failed to retrieve data:",error))
       }).catch((error)=> console.log(error))
       // create tools in bulk
       Tool.bulkCreate(swappedToolData, {validate:true}).then(()=>{
        Supplier.findAll({
          raw: true,
          where:{supplierName: "Wilkinson Sword" },
          include:[{model: Tool}]
        }).then((response)=> console.log(response))
        .catch((error)=> console.error("Failed to retrieve data:",error))
       }).catch((error)=> console.log(error))
       CompostSack.bulkCreate(swappedSackData,{validate:true}).then(()=>{
        Supplier.findAll({
          raw: true,
          where:{supplierName: "GardenGloss" },
          include:[{model: CompostSack}]
        }).then((response)=> console.log(response))
        .catch((error)=> console.error("Failed to retrieve data:",error))
       }).catch((error)=> console.log(error))
    }).catch((error)=> console.log(error))
 }).catch((error)=> console.error("Unable to create table(s)",error))



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

// const authenticate = async () => {
//    try{
//       await sequelize.authenticate();
//       console.log("authentication successful")
//    }catch(error){
//       console.error('Unable to connect to the database:',error)
//    }
// }
// authenticate();
// const makeModels = async () => {
//    try{
//       await sequelize.sync({force: true});
//       console.log("All models made")
//    }catch(error){
//       console.error('Unable to connect to make tables:',error)
//    }
// };
// makeModels();

// const insertSupplier = async () =>{
//    try{
//       // const arrayLen = suppliersData.length
//       // let supplier;
//       // let binArr = [];
//       // for(let i=0; i < arrayLen; i++){
//         let suppliers = await Supplier.bulkCreate(suppliersData)
//       //   binArr.push(supplier.dataValues)
//       // }
//    //  console.log("Suppliers data successfully inserted")
//    // console.log(binArr)
//     return suppliers
//    }catch(error){
//       console.error("Could not insert supplier records:",error)
//       return [];

//    }
// };


// const insertTreeSeed = async (suppliers) =>{
//    try{
//       //swap out logic
//       const supplierRefObj = createSupplierRef(suppliers)
//       const newTreeSeedData = addSupplierIdToSeeds(treeSeedData,supplierRefObj)
//       const arrayLen = newTreeSeedData.length
//       let treeSeed;
//       // for(let i=0; i < arrayLen; i++){
//         treeSeed = await TreeSeed.bulkCreate(newTreeSeedData)
//       // }
//       //  console.log("Treeseed data successfully inserted")
   
//    }catch(error){
//       console.error("Could not insert tree seed records:",error)
//    }
// }
// insertSupplier().then((suppliers)=>insertTreeSeed(suppliers))
// insertSupplier().then((suppliers)=>insertTreeSeed(suppliers))


// const findAllSeedRecords = async () =>{
//    try{
//      const seedList = await TreeSeed.findAll({
//       include:[{
//          model: Supplier
//       }]
//      })
//      console.log("All tree seeds: ",JSON.stringify(seedList,null,2))
//    }catch(error){
//       console.error("Could not retrieve tree seed records")

//    }
// }



// findAllSeedRecords();

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
