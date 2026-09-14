export type ProductSpec = {
  model: string;
  category: string;
  categoryId: string;
  shortDesc: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  applications: string[];
};

const CATEGORIES: Record<string, string> = {
  'horizontal':    'Horizontal Lathe Center',
  'multi-axis':    'Multi-Axis Lathe Center',
  'multi-function':'Multi-Function Lathe Center',
  'flat-bed':      'CNC Flat-Bed Lathe',
  '5-axis':        'Horizontal 5-Axis Turning-Milling Center',
  'vmc':           'Vertical 5-Axis Machining Center',
  'gantry':        'Gantry Machining Center',
};

const products: Record<string, ProductSpec> = {
  tck52: {
    model: 'TCK52',
    category: CATEGORIES.horizontal,
    categoryId: 'horizontal',
    shortDesc: 'High-rigidity horizontal turning center for medium shafts and complex parts.',
    description: 'The TCK52 horizontal turning center delivers exceptional rigidity and thermal stability for continuous heavy-duty machining. Built on a 45° slant bed with Meehanite cast iron, equipped with high-precision spindle bearings and servo-driven turret for reliable, high-precision turning of medium-sized shafts and complex components.',
    features: [
      '45° slant bed design with Meehanite cast iron',
      'High-precision spindle with NSK bearings',
      '12-station servo-driven turret',
      'Linear roller guides on all axes',
      'FANUC / Siemens CNC controller optional',
    ],
    specs: [
      { label: 'Max. swing over bed',         value: 'Ø520 mm' },
      { label: 'Max. turning length',         value: '500 mm' },
      { label: 'Max. spindle speed',          value: '4,500 rpm' },
      { label: 'Spindle motor power',         value: '15 / 18.5 kW' },
      { label: 'X / Z axis travel',           value: '260 / 520 mm' },
      { label: 'Rapid traverse (X / Z)',      value: '24 / 30 m/min' },
      { label: 'Number of tool stations',     value: '12' },
      { label: 'CNC controller',              value: 'FANUC 0i-TF / Siemens 828D' },
      { label: 'Machine weight',              value: '4,800 kg' },
    ],
    applications: ['Automotive shafts','Hydraulic components','Bearing rings','General mechanical parts'],
  },
  tck600: {
    model: 'TCK600',
    category: CATEGORIES.horizontal,
    categoryId: 'horizontal',
    shortDesc: 'Large horizontal lathe for heavy-duty shafts and long workpieces.',
    description: 'TCK600 is engineered for heavy-duty turning of large shafts and long workpieces. The heavily ribbed cast iron bed, powerful spindle motor and rigid tailstock ensure stable machining even under heavy cuts.',
    features: [
      'Heavy-duty cast iron bed, ribbed structure',
      'Powerful 22 kW spindle motor',
      'Hydraulic 4-jaw chuck, 12" capacity',
      'Programmable hydraulic tailstock',
      'Chip conveyor and coolant system included',
    ],
    specs: [
      { label: 'Max. swing over bed',         value: 'Ø600 mm' },
      { label: 'Max. turning length',         value: '1,500 / 2,000 mm' },
      { label: 'Max. spindle speed',          value: '3,500 rpm' },
      { label: 'Spindle motor power',         value: '22 kW' },
      { label: 'X / Z axis travel',           value: '320 / 1,580 mm' },
      { label: 'Rapid traverse (X / Z)',      value: '20 / 24 m/min' },
      { label: 'Chuck size',                  value: '12"' },
      { label: 'CNC controller',              value: 'FANUC 0i-TF / Siemens 828D' },
      { label: 'Machine weight',              value: '7,500 kg' },
    ],
    applications: ['Drive shafts','Oil industry','Shipbuilding','Heavy machinery'],
  },
  tck700: {
    model: 'TCK700', category: CATEGORIES.horizontal, categoryId: 'horizontal',
    shortDesc: 'Heavy-duty horizontal lathe for very large workpieces.',
    description: 'TCK700 extends the TCK series with greater swing and length capacity. Designed for machining large-diameter shafts and heavy industrial components with consistent precision.',
    features: ['Reinforced bed casting','High-torque spindle','Heavy-duty linear guides','Automatic lubrication'],
    specs: [
      { label: 'Max. swing over bed',         value: 'Ø700 mm' },
      { label: 'Max. turning length',         value: '2,000 mm' },
      { label: 'Max. spindle speed',          value: '3,000 rpm' },
      { label: 'Spindle motor power',         value: '30 kW' },
      { label: 'Chuck size',                  value: '15"' },
      { label: 'Machine weight',              value: '9,200 kg' },
    ],
    applications: ['Large shafts','Mining equipment','Energy industry'],
  },
  tck800: {
    model: 'TCK800', category: CATEGORIES.horizontal, categoryId: 'horizontal',
    shortDesc: 'Extra-large turning center for heavy industrial workpieces.',
    description: 'TCK800 is the workhorse of the TCK series, designed for extra-large components. Heavy spindle motor, robust tailstock and rigid construction handle aggressive cuts on large workpieces.',
    features: ['Massive spindle bearing','4-way tool turret optional','Linear scale feedback','Chip conveyor both sides'],
    specs: [
      { label: 'Max. swing over bed',         value: 'Ø800 mm' },
      { label: 'Max. turning length',         value: '2,500 mm' },
      { label: 'Max. spindle speed',          value: '2,800 rpm' },
      { label: 'Spindle motor power',         value: '37 kW' },
      { label: 'Chuck size',                  value: '18"' },
      { label: 'Machine weight',              value: '12,000 kg' },
    ],
    applications: ['Marine shafts','Wind energy','Heavy industry'],
  },
  tck1000: {
    model: 'TCK1000', category: CATEGORIES.horizontal, categoryId: 'horizontal',
    shortDesc: 'Largest horizontal turning center for massive workpieces.',
    description: 'TCK1000 is our flagship horizontal lathe, built for the largest workpieces. Optimized thermal stability and ultra-rigid construction for precision at maximum capacity.',
    features: ['Reinforced 60° slant bed','Heavy-duty spindle 45 kW','Full enclosure','Optional 4-axis capability'],
    specs: [
      { label: 'Max. swing over bed',         value: 'Ø1,000 mm' },
      { label: 'Max. turning length',         value: '3,000 mm' },
      { label: 'Max. spindle speed',          value: '2,000 rpm' },
      { label: 'Spindle motor power',         value: '45 kW' },
      { label: 'Chuck size',                  value: '24"' },
      { label: 'Machine weight',              value: '18,500 kg' },
    ],
    applications: ['Power generation','Marine','Large machinery'],
  },
  tck52d: {
    model: 'TCK52D', category: CATEGORIES['multi-axis'], categoryId: 'multi-axis',
    shortDesc: 'Dual-spindle horizontal lathe with milling capability.',
    description: 'TCK52D combines turning and milling in one setup. The second spindle and live tooling enable complete machining of small to medium workpieces in a single cycle.',
    features: ['Dual spindle configuration','Live tooling with C-axis','Y-axis option','Sub-spindle for part transfer'],
    specs: [
      { label: 'Max. swing',                  value: 'Ø520 mm' },
      { label: 'Sub-spindle speed',           value: '6,000 rpm' },
      { label: 'Live tool motor',             value: '7.5 kW' },
      { label: 'Number of axes',              value: '5 (X, Z, C, Y optional)' },
      { label: 'Machine weight',              value: '6,200 kg' },
    ],
    applications: ['Complex small parts','Automotive','Hydraulic fittings'],
  },
  tck600dy: {
    model: 'TCK600DY', category: CATEGORIES['multi-axis'], categoryId: 'multi-axis',
    shortDesc: 'Y-axis multi-axis turning center for complex parts.',
    description: 'TCK600DY adds a Y-axis and live tooling to the proven TCK600 platform, enabling off-center drilling, milling and complex contour turning in one setup.',
    features: ['Y-axis ±50 mm travel','Live tooling 12-station turret','Synchronized subspindle','High-pressure coolant'],
    specs: [
      { label: 'Max. swing',                  value: 'Ø600 mm' },
      { label: 'Y-axis travel',               value: '±50 mm' },
      { label: 'Live tool speed',             value: '4,000 rpm' },
      { label: 'Number of axes',              value: '6 (X, Y, Z, C, A optional)' },
      { label: 'Machine weight',              value: '9,800 kg' },
    ],
    applications: ['Aerospace components','Complex shafts','Precision machining'],
  },
  tck800dy: {
    model: 'TCK800DY', category: CATEGORIES['multi-axis'], categoryId: 'multi-axis',
    shortDesc: 'Heavy-duty multi-axis lathe for complex large parts.',
    description: 'TCK800DY combines heavy-duty capacity with full multi-axis capability for the most demanding workpieces.',
    features: ['Heavy-duty spindle','Live tooling','Y-axis','Sub-spindle'],
    specs: [
      { label: 'Max. swing',                  value: 'Ø800 mm' },
      { label: 'Y-axis travel',               value: '±75 mm' },
      { label: 'Live tool speed',             value: '3,500 rpm' },
      { label: 'Number of axes',              value: '6' },
      { label: 'Machine weight',              value: '13,500 kg' },
    ],
    applications: ['Energy industry','Large complex parts','Marine'],
  },
  dtm2000s: {
    model: 'DTM2000S', category: CATEGORIES['multi-function'], categoryId: 'multi-function',
    shortDesc: 'Multi-function turning center with mill-turn capability.',
    description: 'DTM2000S combines turning, milling and grinding in one machine. Ideal for complex multi-surface workpieces and high-mix production.',
    features: ['Mill-turn capability','Optional grinding spindle','Automatic tool changer','High-rigidity turret'],
    specs: [
      { label: 'Max. swing',                  value: 'Ø650 mm' },
      { label: 'Max. turning length',         value: '2,000 mm' },
      { label: 'Mill spindle speed',          value: '12,000 rpm' },
      { label: 'Number of tools',             value: '24' },
      { label: 'Machine weight',              value: '11,500 kg' },
    ],
    applications: ['Multi-surface parts','High-mix production','Tooling'],
  },
  dvm3000: {
    model: 'DVM3000', category: CATEGORIES['multi-function'], categoryId: 'multi-function',
    shortDesc: 'Vertical multi-function lathe for large disc workpieces.',
    description: 'DVM3000 is a vertical multi-function lathe ideal for large disc-type workpieces, with turning, milling and drilling in one setup.',
    features: ['Vertical spindle','Large chuck 32"','Mill turret','High rigidity'],
    specs: [
      { label: 'Max. swing',                  value: 'Ø3,000 mm' },
      { label: 'Max. workpiece height',       value: '1,200 mm' },
      { label: 'Spindle speed',               value: '500 rpm' },
      { label: 'Spindle motor',               value: '75 kW' },
      { label: 'Machine weight',              value: '32,000 kg' },
    ],
    applications: ['Large flanges','Wind turbine hubs','Bearings'],
  },
  vtc1010: {
    model: 'VTC1010', category: CATEGORIES['multi-function'], categoryId: 'multi-function',
    shortDesc: 'Vertical machining center for precision parts.',
    description: 'VTC1010 vertical machining center provides precision 3-axis machining for medium-sized workpieces with high productivity.',
    features: ['3-axis vertical spindle','ATC 24 tools','Coolant through spindle','Linear guides'],
    specs: [
      { label: 'Table size',                  value: '1,200 × 600 mm' },
      { label: 'X / Y / Z travel',            value: '1,000 / 600 / 600 mm' },
      { label: 'Spindle speed',               value: '12,000 rpm' },
      { label: 'Spindle motor',               value: '15 kW' },
      { label: 'Machine weight',              value: '6,500 kg' },
    ],
    applications: ['Mold & die','Automotive parts','General machining'],
  },
  qk1327: {
    model: 'QK1327', category: CATEGORIES['flat-bed'], categoryId: 'flat-bed',
    shortDesc: 'CNC flat-bed lathe for pipe threading and long shafts.',
    description: 'QK1327 flat-bed CNC lathe is purpose-built for pipe threading and long shaft turning. The wide flat bed provides exceptional stability for long workpieces.',
    features: ['Flat bed design','Large spindle bore Ø130 mm','Threading capability','Steady rest included'],
    specs: [
      { label: 'Max. swing over bed',         value: 'Ø660 mm' },
      { label: 'Max. turning length',         value: '2,000 mm' },
      { label: 'Spindle bore',                value: 'Ø130 mm' },
      { label: 'Spindle speed',               value: '2,000 rpm' },
      { label: 'Spindle motor',               value: '15 kW' },
      { label: 'Machine weight',              value: '4,200 kg' },
    ],
    applications: ['Oil pipe threading','Long shafts','Pipe fittings'],
  },
  ck84160: {
    model: 'CK84160', category: CATEGORIES['flat-bed'], categoryId: 'flat-bed',
    shortDesc: 'Heavy flat-bed lathe for rolling mill rolls and large pipes.',
    description: 'CK84160 is a heavy flat-bed lathe designed for machining rolling mill rolls, large pipes and cylindrical components.',
    features: ['Massive flat bed','Two-axis CNC','Heavy-duty spindle','Wide carriage'],
    specs: [
      { label: 'Max. swing over bed',         value: 'Ø1,600 mm' },
      { label: 'Max. turning length',         value: '6,000 mm' },
      { label: 'Spindle speed',               value: '800 rpm' },
      { label: 'Spindle motor',               value: '55 kW' },
      { label: 'Machine weight',              value: '28,000 kg' },
    ],
    applications: ['Rolling mill rolls','Large pipes','Cylindrical parts'],
  },
  ck84100: {
    model: 'CK84100', category: CATEGORIES['flat-bed'], categoryId: 'flat-bed',
    shortDesc: 'Flat-bed lathe for medium rolling mill rolls.',
    description: 'CK84100 is a medium-duty flat-bed lathe for medium-sized rolling mill rolls and cylindrical components.',
    features: ['Flat bed','CNC control','Steady rests','Heavy spindle'],
    specs: [
      { label: 'Max. swing over bed',         value: 'Ø1,000 mm' },
      { label: 'Max. turning length',         value: '4,000 mm' },
      { label: 'Spindle speed',               value: '1,000 rpm' },
      { label: 'Spindle motor',               value: '37 kW' },
      { label: 'Machine weight',              value: '18,500 kg' },
    ],
    applications: ['Medium rolls','Cylindrical parts','General heavy turning'],
  },
};

export function getProduct(model: string) {
  return products[model.toLowerCase()];
}
export function getAllProducts() {
  return Object.entries(products);
}

export const fallbackProducts: Record<string, ProductSpec> = {};
for (const cat of ['5-axis','vmc','gantry']) {
  const labels = {
    '5-axis': ['HMC-630','HMC-800'],
    'vmc':    ['VMC850','VMC1060','VMC1370'],
    'gantry': ['GMC2013','GMC3018'],
  } as Record<string, string[]>;
  for (const m of labels[cat]) {
    fallbackProducts[m.toLowerCase()] = {
      model: m,
      category: CATEGORIES[cat],
      categoryId: cat,
      shortDesc: `${m} — ${CATEGORIES[cat]} for industrial precision machining.`,
      description: `The ${m} is part of Hardford's ${CATEGORIES[cat]} lineup. Built with the same quality standards, brand-name components and lifetime support as our flagship models.`,
      features: ['Imported high-precision components','ISO 9001 quality standard','FANUC / Siemens CNC optional','Lifetime technical support'],
      specs: [
        { label: 'CNC controller', value: 'FANUC / Siemens / GSK' },
        { label: 'Quality standard', value: 'ISO 9001' },
        { label: 'Warranty', value: '12 months standard' },
        { label: 'Lead time', value: '30–60 days' },
        { label: 'Customization', value: 'Available on request' },
      ],
      applications: ['Industrial machining','General manufacturing'],
    };
  }
}
for (const [k, v] of Object.entries(fallbackProducts)) products[k] = v;