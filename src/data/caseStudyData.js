// MilletMorn Case Study Core Data & Specifications

export const BRAND_DATA = {
  name: 'MilletMorn',
  tagline: 'Quick Breakfast. Better Mornings.',
  subheadline: 'Meet MilletMorn — a ready-to-cook millet breakfast mix designed for busy mornings.',
  productName: 'Ready-to-Cook Millet Breakfast Mix',
  packSize: '500 g',
  servingEstimate: '10–12 Servings',
  price: 169,
  cost: 92,
  contribution: 77,
  marginPercent: '45.6%',
  initialPacks: 2000,
  totalRevenue: 338000,
  totalCost: 184000,
  grossContribution: 154000,
  positioning: 'Quick, convenient and easy-to-prepare millet breakfast for time-conscious consumers.',
};

export const TARGET_CUSTOMERS = [
  {
    id: 'professionals',
    title: 'Working Professionals',
    ageGroup: 'Age 22–40',
    description: 'Rushing for early morning commutes and morning meetings with zero time for elaborate breakfast prep.',
    painPoint: 'Skips breakfast or resorts to junk fast food due to lack of time.',
    benefit: 'Wholesome nutritious meal ready in just 5 minutes with zero hassle.',
    icon: 'Briefcase',
    badge: 'Core Segment'
  },
  {
    id: 'families',
    title: 'Health-conscious Families',
    ageGroup: 'Age 30–50',
    description: 'Looking to incorporate traditional nutrient-dense millets into daily family meals effortlessly.',
    painPoint: 'Traditional millet recipes require hours of soaking, grinding, and prep.',
    benefit: 'Clean, wholesome breakfast mix that kids and elders love.',
    icon: 'Users',
    badge: 'High Value'
  },
  {
    id: 'students',
    title: 'Students & Young Adults',
    ageGroup: 'Trial Audience',
    description: 'Hostelers and young bachelors seeking affordable, foolproof, and tasty morning food solutions.',
    painPoint: 'Limited cooking equipment, tight student budgets, and busy schedules.',
    benefit: 'Accessible at ₹169 per 500g pack, simple 3-step preparation.',
    icon: 'GraduationCap',
    badge: 'Trial Audience'
  }
];

export const PROBLEM_STATEMENTS = [
  {
    title: 'Less Time',
    headline: 'Mornings are Rushed',
    description: 'Working professionals and students have less than 10 minutes to spare for breakfast before their daily commute.',
    icon: 'Clock'
  },
  {
    title: 'Less Preparation',
    headline: 'Cooking Prep is Tedious',
    description: 'Traditional wholesome breakfasts demand extensive soaking, chopping, and active kitchen management.',
    icon: 'ChefHat'
  },
  {
    title: 'More Convenience',
    headline: 'Need for Instant Nutrition',
    description: 'Households want the superfood benefits of millets without the complexity of traditional grain processing.',
    icon: 'Sparkles'
  }
];

export const VALUE_PROPOSITIONS = [
  {
    number: '01',
    title: 'Ready-to-Cook',
    tagline: 'Simple preparation for busy mornings',
    description: 'Engineered for lightning-fast cooking without compromising wholesome texture or authentic taste.',
    icon: 'Zap'
  },
  {
    number: '02',
    title: 'Convenient 500 g Pack',
    tagline: 'Designed for easy storage and use',
    description: 'Optimal size providing 10–12 servings in an airtight, moisture-resistant pouch that stays fresh.',
    icon: 'Package'
  },
  {
    number: '03',
    title: 'Local + Online Availability',
    tagline: 'Multiple purchasing channels',
    description: 'Accessible right at your neighborhood Kirana, supermarket shelf, or delivered straight via online platforms.',
    icon: 'Store'
  },
  {
    number: '04',
    title: 'Affordable Trial',
    tagline: '₹169 per pack (~₹15 per breakfast)',
    description: 'Value-priced to encourage easy first-time trial with high recurring satisfaction.',
    icon: 'IndianRupee'
  }
];

export const PREPARATION_STEPS = [
  {
    step: 1,
    title: 'Open the pack',
    subtitle: 'Cut or tear the moisture-lock sealed 500g pouch.',
    icon: 'PackageOpen'
  },
  {
    step: 2,
    title: 'Follow the preparation instructions',
    subtitle: 'Add water/buttermilk according to the simple pack guidelines and cook gently for a few minutes.',
    icon: 'Flame'
  },
  {
    step: 3,
    title: 'Enjoy your breakfast',
    subtitle: 'Serve hot with your favourite chutney, podi, or curd for a wholesome morning boost.',
    icon: 'Smile'
  }
];

export const CUSTOMER_JOURNEY_STAGES = [
  {
    id: 'awareness',
    stepNumber: '01',
    name: 'AWARENESS',
    headline: 'Customer discovers MilletMorn',
    description: 'Discovers through local store sampling stands, office hub kiosks, or engaging social media posts highlighting quick 5-min breakfasts.',
    channel: 'Free Sampling & Digital Media',
    metric: 'Reach & Impressions'
  },
  {
    id: 'consideration',
    stepNumber: '02',
    name: 'CONSIDERATION',
    headline: 'Checks product, price and suitability',
    description: 'Customer inspects the 500g pouch, evaluates the ₹169 trial price, reads the ready-to-cook convenience, and checks ingredients.',
    channel: 'Kirana Shelf & Website Overview',
    metric: 'Engagement & Pack Pickup'
  },
  {
    id: 'purchase',
    stepNumber: '03',
    name: 'PURCHASE',
    headline: 'Customer buys the product',
    description: 'Makes the first purchase via retail store or online checkout, benefiting from introductory trial offers.',
    channel: 'Supermarkets, Kirana & Direct Web',
    metric: 'Trial Conversion (₹169)'
  },
  {
    id: 'preparation',
    stepNumber: '04',
    name: 'PREPARATION',
    headline: 'Customer prepares the breakfast',
    description: 'Experiences frictionless 3-step cooking at home in under 5 minutes without prior cooking skills.',
    channel: 'In-home Morning Kitchen',
    metric: 'Ease of Preparation Score'
  },
  {
    id: 'consumption',
    stepNumber: '05',
    name: 'CONSUMPTION',
    headline: 'Customer tries the product',
    description: 'Enjoys a hot, satisfying, nutritious breakfast that energizes their morning work day.',
    channel: 'Breakfast Table / Desk',
    metric: 'Taste & Satiety Satisfaction'
  },
  {
    id: 'feedback',
    stepNumber: '06',
    name: 'FEEDBACK',
    headline: 'Customer shares their experience',
    description: 'Provides feedback on taste, preparation ease, and convenience via QR code or online portal.',
    channel: 'Digital Feedback Form & Reviews',
    metric: 'NPS & Rating Score'
  },
  {
    id: 'repeat_purchase',
    stepNumber: '07',
    name: 'REPEAT PURCHASE',
    headline: 'Satisfied customer orders again',
    description: 'Convinced by the time savings and health benefits, customer establishes MilletMorn as a weekly staple.',
    channel: 'Subscribed Grocery & Local Kirana',
    metric: 'Customer Lifetime Value (LTV)'
  }
];

export const GTM_CHANNELS = {
  offline: [
    {
      title: 'Kirana Stores',
      description: 'Neighborhood touchpoints offering immediate accessibility for daily household grocery shopping.',
      icon: 'Store',
      focus: 'High density residential clusters'
    },
    {
      title: 'Supermarkets',
      description: 'Modern trade aisles where health-conscious families compare premium packaged breakfast mixes.',
      icon: 'ShoppingCart',
      focus: 'Category placement alongside cereals'
    },
    {
      title: 'Health-food Stores',
      description: 'Specialty organic and wellness outlets catering to consumers seeking whole-grain nutrition.',
      icon: 'HeartHandshake',
      focus: 'Niche wellness positioning'
    },
    {
      title: 'Product Sampling',
      description: 'Live tasting booths at residential societies, corporate IT parks, and morning walking trails.',
      icon: 'Coffee',
      focus: 'High-conversion trial touchpoint'
    }
  ],
  online: [
    {
      title: 'Brand Website',
      description: 'Direct-to-consumer digital storefront for bundle deals, brand storytelling, and repeat subscriptions.',
      icon: 'Globe',
      focus: 'Direct customer relationship'
    },
    {
      title: 'WhatsApp Ordering',
      description: 'Low-friction conversational commerce for quick 1-click re-orders from familiar chat screens.',
      icon: 'MessageSquare',
      focus: 'Frictionless repeat ordering'
    },
    {
      title: 'Social Media',
      description: 'Instagram & YouTube shorts showcasing quick 60-second recipe hacks and morning routine vlogs.',
      icon: 'Share2',
      focus: 'Visual awareness & discovery'
    },
    {
      title: 'Online Marketplaces',
      description: 'Quick-commerce and e-commerce platforms ensuring 10-minute to same-day doorstep deliveries.',
      icon: 'Truck',
      focus: 'Instant urban fulfillment'
    }
  ]
};

export const ACQUISITION_STRATEGIES = [
  {
    title: 'FREE SAMPLING',
    subtitle: 'Direct Tasting Experience',
    description: 'Product sampling at local stores, tech park cafeterias, and housing societies to overcome trial inertia through real taste validation.',
    points: [
      'Live 5-minute hot breakfast kiosks during peak morning hours',
      'Mini sample trial sachets handed out at neighborhood supermarkets',
      'Direct feedback collection on the spot'
    ],
    icon: 'Sparkles',
    badge: 'Core Driver'
  },
  {
    title: 'INTRODUCTORY OFFER',
    subtitle: 'Low Friction First Purchase',
    description: 'Launch offers or bundle discounts designed to convert sampled consumers into paying first-time buyers.',
    points: [
      'Special ₹169 first-pack launch incentive with money-back taste guarantee',
      'Starter 2-pack combo with free morning recipe card',
      'Referral discount codes shared via WhatsApp'
    ],
    icon: 'Tag',
    badge: 'Conversion Engine'
  }
];

export const SUPPLY_CHAIN_STEPS = [
  {
    id: 1,
    title: 'Supplier',
    subtitle: 'Millet Farmers & Collectives',
    details: 'Procuring premium quality millets directly from verified regional agricultural farm collectives.',
    focus: 'Direct farm-level quality audit',
    icon: 'Wheat'
  },
  {
    id: 2,
    title: 'Procurement',
    subtitle: 'Raw Material Intake',
    details: 'Centralized bulk procurement ensuring batch freshness, moisture control, and cost efficiency at ₹92/pack target.',
    focus: 'Grade-A grain verification',
    icon: 'Boxes'
  },
  {
    id: 3,
    title: 'Production',
    subtitle: 'Milling & Dry-Blends',
    details: 'State-of-the-art roasting, slow milling, and balanced recipe blending under hygienic food processing standards.',
    focus: 'Consistent particle size & aroma',
    icon: 'Cog'
  },
  {
    id: 4,
    title: 'Quality Check',
    subtitle: 'FSSAI & Lab Standards',
    details: 'Rigorous sensory and microbial testing to ensure 100% purity, zero preservatives, and standard cooking time.',
    focus: 'Zero preservative certification',
    icon: 'ShieldCheck'
  },
  {
    id: 5,
    title: 'Packaging',
    subtitle: '500g Moisture-Lock Pouch',
    details: 'Automated nitrogen-flushed pouch packaging ensuring 9-month shelf stability and aroma preservation.',
    focus: 'Airtight laminate seal',
    icon: 'PackageCheck'
  },
  {
    id: 6,
    title: 'Storage',
    subtitle: 'Temperature Controlled Warehousing',
    details: 'Humidity-controlled central hub warehousing to maintain batch freshness before retail dispatch.',
    focus: 'FIFO inventory rotation',
    icon: 'Warehouse'
  },
  {
    id: 7,
    title: 'Distribution',
    subtitle: 'Omni-channel Logistics',
    details: 'Route-optimized distribution to neighborhood Kirana distributors, supermarket hubs, and dark stores.',
    focus: '24-48hr retail restocking cycle',
    icon: 'Truck'
  },
  {
    id: 8,
    title: 'Customer',
    subtitle: 'Morning Breakfast Table',
    details: 'Delivered into the consumer’s kitchen for quick, healthy, 5-minute breakfast preparation.',
    focus: 'Delighted end-user experience',
    icon: 'Heart'
  }
];

export const SWOT_DATA = {
  strengths: {
    title: 'STRENGTHS',
    accent: 'emerald',
    items: [
      'Millet-based superfood positioning with high nutritional density',
      'Ready-to-cook convenience tailored specifically for morning rush hours',
      'Convenient 500 g pack size optimized for household weekly usage',
      'High gross contribution margin of 45.6% (₹77 per pack)'
    ]
  },
  weaknesses: {
    title: 'WEAKNESSES',
    accent: 'amber',
    items: [
      'New brand entering an established packaged breakfast category',
      'Limited initial brand awareness compared to legacy cereal giants',
      'Limited initial distribution network during pilot phase'
    ]
  },
  opportunities: {
    title: 'OPPORTUNITIES',
    accent: 'blue',
    items: [
      'Rapidly growing online D2C sales and quick-commerce delivery adoption',
      'Surge in health-conscious consumers shifting from refined wheat to millets',
      'Retail expansion into modern supermarket chains and specialty stores'
    ]
  },
  threats: {
    title: 'THREATS',
    accent: 'rose',
    items: [
      'Established FMCG competitors launching similar quick millet variants',
      'Price competition and discount wars from large conglomerate brands',
      'Raw material price fluctuations in agricultural grain markets'
    ]
  }
};

export const RISKS_AND_MITIGATION = [
  {
    risk: 'Low Demand',
    riskDetail: 'Consumers sticking to routine breakfast habits or unfamiliar with millet taste.',
    mitigation: 'Sampling + introductory offers',
    mitigationDetail: 'High-visibility live tasting booths at residential societies and trial ₹169 pricing.'
  },
  {
    risk: 'Low Repeat Purchase',
    riskDetail: 'Consumers trying once but not making it a regular weekly pantry habit.',
    mitigation: 'Customer feedback + product improvement',
    mitigationDetail: 'Proactive digital feedback loops, recipe tips via WhatsApp, and continuous taste refinement.'
  },
  {
    risk: 'Slow Inventory',
    riskDetail: 'Packs sitting on store shelves tying up operating capital.',
    mitigation: 'Demand-based production',
    mitigationDetail: 'Lean agile batch manufacturing of 2,000 packs with just-in-time distributor replenishment.'
  },
  {
    risk: 'Raw Material Price Increase',
    riskDetail: 'Spike in farm-gate millet grain prices eroding the ₹77 contribution margin.',
    mitigation: 'Multiple suppliers',
    mitigationDetail: 'Diversified procurement contracts with multiple farmer producer organizations (FPOs).'
  },
  {
    risk: 'Retailer Dependence',
    riskDetail: 'High retailer margins and delayed payments from traditional distribution channels.',
    mitigation: 'Online/direct channels',
    mitigationDetail: 'Strong direct-to-consumer brand website and WhatsApp ordering to build proprietary audience.'
  }
];

export const INITIAL_DEMO_ORDERS = [
  {
    id: 'MM-2026-8941',
    customerName: 'Aarav Sharma',
    email: 'aarav.sharma@example.com',
    phone: '+91 98765 43210',
    address: 'Flat 402, Green Glen Layout, Bellandur',
    city: 'Bengaluru',
    pinCode: '560103',
    quantity: 2,
    packSize: '500 g',
    totalPrice: 338,
    date: '2026-10-04T09:15:00Z',
    status: 'Delivered',
    channel: 'Brand Website',
    isRepeat: false
  },
  {
    id: 'MM-2026-8942',
    customerName: 'Priya Iyer',
    email: 'priya.iyer@example.com',
    phone: '+91 98123 45678',
    address: 'B-12, Palm Meadows, Whitefield',
    city: 'Bengaluru',
    pinCode: '560066',
    quantity: 3,
    packSize: '500 g',
    totalPrice: 507,
    date: '2026-10-04T14:30:00Z',
    status: 'Dispatched',
    channel: 'Kirana Store Demo',
    isRepeat: true
  },
  {
    id: 'MM-2026-8943',
    customerName: 'Rohan Mehra',
    email: 'rohan.m@example.com',
    phone: '+91 97654 32109',
    address: 'Plot 78, Jubilee Hills',
    city: 'Hyderabad',
    pinCode: '500033',
    quantity: 1,
    packSize: '500 g',
    totalPrice: 169,
    date: '2026-10-05T08:45:00Z',
    status: 'Processing',
    channel: 'Brand Website',
    isRepeat: false
  }
];

export const INITIAL_DEMO_FEEDBACK = [
  {
    id: 'fb-101',
    name: 'Ananya Deshmukh',
    email: 'ananya.d@example.com',
    rating: 5,
    criteria: {
      taste: 5,
      convenience: 5,
      preparation: 5,
      overall: 5
    },
    feedback: 'Took literally 4 minutes before my morning 9 AM standup call. Tastes hearty and wholesome without being heavy!',
    date: '2026-10-03'
  },
  {
    id: 'fb-102',
    name: 'Karthik Raman',
    email: 'karthik.r@example.com',
    rating: 5,
    criteria: {
      taste: 4,
      convenience: 5,
      preparation: 5,
      overall: 5
    },
    feedback: 'The 500g pouch is super handy for my bachelor kitchen. Much better nutrition than standard instant noodles.',
    date: '2026-10-04'
  },
  {
    id: 'fb-103',
    name: 'Meera Sengupta',
    email: 'meera.s@example.com',
    rating: 4,
    criteria: {
      taste: 5,
      convenience: 4,
      preparation: 4,
      overall: 4
    },
    feedback: 'Kids loved it when served with coconut chutney. Ready to cook instructions were very clear.',
    date: '2026-10-05'
  }
];
