// Detailed data for Easy Trust Corporation (ETC) Agriculture Division

export interface AgriPractice {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  fallbackImage: string;
  badge: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  methods: string[];
  outputs: string;
  sustainability: string;
}

export const AGRI_PRACTICES: AgriPractice[] = [
  {
    id: 'crop-farm',
    title: 'Commercial Crop Farming & Grains',
    category: 'Crop Production',
    badge: 'Core Division',
    shortDesc: 'Extensive mechanized farming of staple tubers, grains, and cash crops engineered for food sovereignty and industrial supply.',
    fullDesc: 'Our commercial crop farming operations span prime fertile acreage dedicated to climate-smart crop rotations. We cultivate certified disease-resistant cassava varieties (TME 419), high-yield yellow maize, swamp and upland rice varieties, and mature oil palm plantations. Through contour plowing, mechanized harrowing, and drip irrigation, we maintain consistent soil biomass and year-round harvesting capacity.',
    image: '/src/assets/images/agri_crop_farm_1790887233415.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Over 2,500 active acres under sustainable rotation',
      'Certified high-starch cassava & hybrid yellow maize',
      'Mechanized tractor planting, weed control & harvesting',
      'Solar-powered irrigation and water retention reservoirs'
    ],
    specs: [
      { label: 'Current Acreage', value: '2,500+ Acres' },
      { label: 'Primary Crops', value: 'Cassava, Maize, Rice, Oil Palm' },
      { label: 'Annual Grain Yield', value: '4,800+ Metric Tonnes' },
      { label: 'Irrigation Type', value: 'Solar Drip & Central Pivot' }
    ],
    methods: [
      'Soil nutrient profiling and micro-nutrient enrichment',
      'Integrated Pest Management (IPM) to eliminate harsh chemicals',
      'Organic cover cropping to preserve microbial topsoil health',
      'Precision row planting utilizing calibrated tractor seeders'
    ],
    outputs: 'Food-grade cassava roots, bulk dried animal-feed maize, parboiled milled rice, and palm fruit bunches.',
    sustainability: 'Zero chemical runoff, rainwater harvesting catchments, and post-harvest crop residue mulching.'
  },
  {
    id: 'poultry-farm',
    title: 'Modern Bio-Secure Poultry Operations',
    category: 'Livestock & Poultry',
    badge: 'High Demand',
    shortDesc: 'State-of-the-art poultry housing providing farm-fresh table eggs, healthy broilers, and traceable poultry nutrition.',
    fullDesc: 'ETC Poultry Farms operate under international biosecurity standards with automated micro-climate ventilation, automated nipple water lines, and precision feed dispensers. Our commercial facilities maintain high-laying flock percentages and rapid, ethical broiler fattening cycles without the routine use of non-therapeutic antibiotics. Daily veterinary oversight guarantees optimal flock health and consumer safety.',
    image: '/src/assets/images/agri_poultry_farm_1790887245176.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Automated climate-controlled poultry housing',
      'Over 45,000 birds flock capacity across layers & broilers',
      'Strict biosecurity checkpoints & veterinary surveillance',
      'Farm-gate packaging & daily cold-chain delivery'
    ],
    specs: [
      { label: 'Flock Capacity', value: '45,000+ Birds' },
      { label: 'Daily Egg Output', value: '28,000+ Table Eggs' },
      { label: 'Broiler Turnaround', value: '6-Week Optimized Cycles' },
      { label: 'Feed Formulation', value: '100% In-House Clean Grains' }
    ],
    methods: [
      'Automated cross-ventilation fans keeping ambient temperature at 22-24°C',
      'Sterilized drinking water supplied through closed-loop UV treated pipelines',
      'Nutrient-balanced rations blended from our own farm-grown yellow maize and soya',
      'Separated age-group pens preventing horizontal flock infections'
    ],
    outputs: 'Fresh graded table eggs (crates of 30), dressed broiler chicken, and organic nitrogen-rich poultry manure for crop fertilizer.',
    sustainability: '100% of poultry manure is processed and composted to fertilize our commercial crop farms, creating a closed-loop circular nutrient cycle.'
  },
  {
    id: 'fish-ponds',
    title: 'Aquaculture & Commercial Fish Ponds',
    category: 'Aquaculture',
    badge: 'Fast Growing',
    shortDesc: 'Eco-managed freshwater earthen and concrete fish ponds producing African Catfish and Nile Tilapia for regional markets.',
    fullDesc: 'Our aquaculture division leverages natural freshwater springs and gravity-fed flow-through systems. We operate dedicated broodstock breeding tanks, high-survival fingerling nurseries, and large earthen grow-out ponds. Using solar-powered aeration wheels, bio-filtration water recycling, and high-protein extruded floating fish feeds, our fish achieve exceptional growth rates, firm flesh texture, and high nutritional density.',
    image: '/src/assets/images/agri_fish_ponds_1790887255737.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      '12 commercial earthen ponds & 16 concrete nursery raceways',
      'Specialized in African Catfish (Clarias) & Nile Tilapia',
      'In-house hatchery delivering over 150,000 fingerlings quarterly',
      'Solar paddlewheel aerators ensuring optimum dissolved oxygen'
    ],
    specs: [
      { label: 'Water Surface Area', value: '8.5 Hectares' },
      { label: 'Species Cultivated', value: 'African Catfish & Nile Tilapia' },
      { label: 'Annual Fish Harvest', value: '120+ Metric Tonnes' },
      { label: 'Hatchery Capacity', value: '250,000 Fingerlings/Batch' }
    ],
    methods: [
      'Continuous dissolved oxygen and pH water sensors with hourly log auditing',
      'Gravity-fed sedimentation tanks filtering fish waste naturally',
      'Graded sorting grids preventing cannibalism and size disparities',
      'High-protein extruded floating feed ensuring zero water pollution from sinking waste'
    ],
    outputs: 'Live catfish for premium hospitality buyers, smoked/dried catfish for shelf-stable trade, and fresh chilled tilapia.',
    sustainability: 'Nutrient-rich pond effluent water is channeled to irrigate neighboring fruit groves and vegetable greenhouse beds.'
  },
  {
    id: 'greenhouse-farming',
    title: 'Precision Greenhouse & Horticulture',
    category: 'Controlled Agriculture',
    badge: 'Climate Resilient',
    shortDesc: 'High-tech protected greenhouses producing premium bell peppers, vine tomatoes, cucumbers, and culinary herbs year-round.',
    fullDesc: 'Extreme tropical wet and dry seasons challenge outdoor horticulture. ETC Greenhouse facilities protect tender crops from heavy tropical downpours, scorching heat, and fungal pathogens. Equipped with computerized drip fertigation and insect-exclusion mesh, our greenhouses achieve 4x higher yields per square meter compared to open-field systems with 70% less water usage.',
    image: '/src/assets/images/agri_greenhouse_1790887265065.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'UV-stabilized polycarbonate & micro-mesh greenhouse bays',
      'Computerized drip fertigation supplying direct root nutrition',
      'Zero synthetic soil pesticide residues',
      'Year-round continuous supply for supermarkets and hotels'
    ],
    specs: [
      { label: 'Covered Area', value: '18,000 m² Protected Bays' },
      { label: 'Primary Produce', value: 'Sweet Peppers, Vine Tomatoes, Cucumbers' },
      { label: 'Water Efficiency', value: '70% Savings vs Open Field' },
      { label: 'Harvest Cycle', value: '52 Weeks Continuous' }
    ],
    methods: [
      'Raised cocopeat and sterile volcanic substrate grow bags',
      'Automated evaporative cooling and internal shade screens',
      'Vertical trellis training maximizing canopy light absorption',
      'Beneficial predatory insects for natural biological whitefly control'
    ],
    outputs: 'Grade-A red and yellow bell peppers, beefsteak and cherry tomatoes, English cucumbers, and fresh sweet basil.',
    sustainability: 'Closed-loop irrigation run-off recapture, recycling every liter of nutrient water.'
  },
  {
    id: 'agro-processing',
    title: 'Agro-Processing & Value Addition Hub',
    category: 'Value Chain',
    badge: 'Industrial Grade',
    shortDesc: 'Milling, refining, and packaging facilities converting raw farm harvests into standardized, commercial food products.',
    fullDesc: 'Post-harvest losses represent the largest vulnerability for West African agriculture. Easy Trust Corporation has invested in industrial processing facilities adjacent to our farms. Our hub features mechanized cassava washing, peeling, grating, hydraulic pressing, and stainless-steel flash-drying to produce premium odorless garri and industrial cassava flour. We also operate palm oil extraction mills and hermetic grain storage silos.',
    image: '/src/assets/images/agri_agro_processing_1790887275769.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Industrial flash dryer & cassava flour processing lines',
      'Stainless-steel palm oil expellers and clarification units',
      'Hermetic moisture-controlled silos preserving grain quality',
      'Certified hygiene packaging and barcoded traceability'
    ],
    specs: [
      { label: 'Daily Milling Capacity', value: '25 Metric Tonnes' },
      { label: 'Silo Storage Volume', value: '1,500 MT Grain Silos' },
      { label: 'Oil Extraction Rate', value: '22% Extraction Efficiency' },
      { label: 'Quality Certification', value: 'National Standards Approved' }
    ],
    methods: [
      'Automated optical sorting removes discolored grains and contaminants',
      'Flash drying in under 3 seconds preserves natural vitamins and starches',
      'Vacuum-sealed packaging prevents weevil and moisture degradation',
      'Continuous digital temperature and humidity logging inside storage silos'
    ],
    outputs: 'High-grade odorless cassava flour (HQCF), export-quality garri, virgin red palm oil, and cleaned bagged feed maize.',
    sustainability: 'Cassava peels are dried into fiber-rich goat feed, while palm kernel shells fuel the boilers, eliminating diesel combustion.'
  },
  {
    id: 'farm-mechanization',
    title: 'Tractor Fleet & Mechanization Services',
    category: 'Farm Services',
    badge: 'Community Uplift',
    shortDesc: 'Modern 4WD tractors, implements, and combine harvesters servicing our estates and outgrower farmer networks.',
    fullDesc: 'Manual labor limits the land smallholders can cultivate. ETC operates a centralized fleet of heavy-duty tractors equipped with disk plows, harrows, ridgers, and combine harvesters. Through our mechanization hub, we provide timely land clearing, plowing, and threshing services to our outgrower cooperatives, tripling their cultivated acreage and boosting rural incomes.',
    image: '/src/assets/images/agri_crop_farm_1790887233415.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Fleet of 85HP-110HP 4WD agricultural tractors',
      'Heavy-duty land clearing, disc plowing, and ridging gear',
      'Certified mechanics and in-field maintenance mobile vans',
      'Subsidized service rates for local partner outgrowers'
    ],
    specs: [
      { label: 'Active Fleet', value: '14 Heavy Agricultural Tractors' },
      { label: 'Hectares Serviced/Season', value: '4,200+ Hectares' },
      { label: 'Implements Available', value: 'Plows, Harrows, Seeders, Boom Sprayers' },
      { label: 'Operator Training', value: '100% Certified Local Operators' }
    ],
    methods: [
      'GPS-guided straight furrow plowing to reduce fuel consumption',
      'Minimum tillage disc harrowing to protect natural soil structure',
      'Calibrated seed drills ensuring uniform germination depth',
      'Preventive fleet telematics monitoring engine hours and maintenance schedules'
    ],
    outputs: 'Rapid land preparation, seed bed development, and mechanical grain harvesting.',
    sustainability: 'Equipped with low-emission Tier-3 diesel engines and bio-lubricants protecting waterways from mineral oil spillage.'
  }
];

export const AGRI_STATS = [
  { label: 'Total Farmland Under Cultivation', value: '2,500+', unit: 'Acres', sub: 'Across high-yield fertile river basins' },
  { label: 'Monthly Table Egg Production', value: '840,000+', unit: 'Eggs', sub: 'Clean, candled and graded daily' },
  { label: 'Annual Aquaculture Yield', value: '120+', unit: 'Tonnes', sub: 'Healthy catfish and tilapia harvest' },
  { label: 'Registered Outgrower Farmers', value: '850+', unit: 'Partners', sub: 'Guaranteed off-take & technical support' },
];

export const AGRI_FAQS = [
  {
    q: 'Can wholesale buyers and supermarkets order produce directly?',
    a: 'Yes. ETC Agriculture supplies wholesale table eggs, live/dressed poultry, fresh and smoked catfish, bagged cassava flour, maize, and greenhouse vegetables to supermarkets, hotels, restaurants, and regional distributors with scheduled weekly deliveries.'
  },
  {
    q: 'How does ETC ensure biosecurity and product quality in poultry and fish farming?',
    a: 'We operate dedicated quarantine zones, vehicle disinfection dips, closed-loop UV water purification, and regular microbiological testing. We never use non-therapeutic antibiotics or hazardous growth hormones.'
  },
  {
    q: 'Can institutions or farmers partner with ETC for outgrower programs?',
    a: 'Absolutely. Our Outgrower Scheme provides smallholders with improved seed varieties, tractor mechanization, training in sustainable soil management, and guaranteed purchase contracts at competitive harvest prices.'
  },
  {
    q: 'Are farm tours and site inspections available for investors or partners?',
    a: 'Yes. We welcome prospective business partners, retail buyers, and agricultural delegations. Tours must be pre-arranged 48 hours in advance to maintain strict biosecurity protocols in our livestock and hatchery zones.'
  }
];
