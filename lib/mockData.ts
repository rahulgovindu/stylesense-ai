// ---------------------------------------------------------------------------
// StyleSense AI — DEMO mock data
// No API keys required. All data here is static and used to drive the demo UI.
// Images are remote (Unsplash) so they render on web/native without bundling.
// ---------------------------------------------------------------------------

export type WardrobeItem = {
  id: string;
  imageUrl: string;
  category: string;
  subCategory: string;
  primaryColour: string;
  colourHex: string;
  pattern: string;
  formalityLevel: number; // 1 (casual) - 5 (formal)
  occasionTags: string[];
  seasonTags: string[];
  fabric: string;
  brand: string;
  isFavourite: boolean;
  timesWorn: number;
};

export type OutfitRecommendation = {
  id: string;
  occasionType: string;
  occasionLabel: string;
  itemIds: string[];
  reasoning: string;
  confidenceScore: number; // 0 - 1
  weatherTempC: number;
  weatherCondition: string;
};

export type GapItem = {
  id: string;
  name: string;
  reason: string;
  priceInr: number;
  platform: string;
  imageUrl: string;
};

export type WardrobeAnalysis = {
  overallGrade: string;
  overallScore: number; // 0 - 100
  analysisText: string;
  strengths: string[];
  weaknesses: string[];
  totalItemsAnalysed: number;
  gapItems: GapItem[];
};

export const mockUser = {
  displayName: 'Aarav',
  email: 'demo@stylesense.ai',
  subscriptionTier: 'free' as 'free' | 'pro',
  city: 'Bengaluru',
};

export const mockProfile = {
  skinToneCategory: 'Warm',
  skinToneShade: 'Wheatish',
  bodyType: 'Athletic',
  styleArchetype: 'Smart Casual',
  heightCm: 178,
  gender: 'Male',
  ageRange: '25-34',
  preferredColours: ['Navy', 'Olive', 'White', 'Burgundy'],
  avoidedColours: ['Neon Green'],
  budgetRangeInr: '1500-4000',
  styleGoals: ['Look sharper at work', 'Build a versatile wardrobe'],
};

export const mockWeather = {
  tempC: 27,
  condition: 'Partly Cloudy',
  city: 'Bengaluru',
  emoji: '⛅',
};

export const wardrobeItems: WardrobeItem[] = [
  {
    id: 'w1',
    imageUrl:
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80',
    category: 'Top',
    subCategory: 'Oxford Shirt',
    primaryColour: 'White',
    colourHex: '#FFFFFF',
    pattern: 'Solid',
    formalityLevel: 4,
    occasionTags: ['Work', 'Formal', 'Date'],
    seasonTags: ['All Season'],
    fabric: 'Cotton',
    brand: 'Arrow',
    isFavourite: true,
    timesWorn: 12,
  },
  {
    id: 'w2',
    imageUrl:
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80',
    category: 'Top',
    subCategory: 'T-Shirt',
    primaryColour: 'Olive',
    colourHex: '#708238',
    pattern: 'Solid',
    formalityLevel: 1,
    occasionTags: ['Casual', 'Weekend'],
    seasonTags: ['Summer'],
    fabric: 'Cotton',
    brand: 'H&M',
    isFavourite: false,
    timesWorn: 8,
  },
  {
    id: 'w3',
    imageUrl:
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80',
    category: 'Bottom',
    subCategory: 'Chinos',
    primaryColour: 'Beige',
    colourHex: '#D2B48C',
    pattern: 'Solid',
    formalityLevel: 3,
    occasionTags: ['Work', 'Casual', 'Date'],
    seasonTags: ['All Season'],
    fabric: 'Cotton Twill',
    brand: 'Levi’s',
    isFavourite: true,
    timesWorn: 20,
  },
  {
    id: 'w4',
    imageUrl:
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80',
    category: 'Bottom',
    subCategory: 'Slim Jeans',
    primaryColour: 'Indigo',
    colourHex: '#3F4C6B',
    pattern: 'Solid',
    formalityLevel: 2,
    occasionTags: ['Casual', 'Weekend', 'Date'],
    seasonTags: ['All Season'],
    fabric: 'Denim',
    brand: 'Levi’s',
    isFavourite: false,
    timesWorn: 15,
  },
  {
    id: 'w5',
    imageUrl:
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80',
    category: 'Outerwear',
    subCategory: 'Blazer',
    primaryColour: 'Navy',
    colourHex: '#1F2A44',
    pattern: 'Solid',
    formalityLevel: 5,
    occasionTags: ['Work', 'Formal', 'Wedding'],
    seasonTags: ['Winter', 'All Season'],
    fabric: 'Wool Blend',
    brand: 'Van Heusen',
    isFavourite: true,
    timesWorn: 5,
  },
  {
    id: 'w6',
    imageUrl:
      'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&q=80',
    category: 'Footwear',
    subCategory: 'White Sneakers',
    primaryColour: 'White',
    colourHex: '#F5F5F5',
    pattern: 'Solid',
    formalityLevel: 2,
    occasionTags: ['Casual', 'Weekend', 'Date'],
    seasonTags: ['All Season'],
    fabric: 'Leather',
    brand: 'Nike',
    isFavourite: true,
    timesWorn: 30,
  },
  {
    id: 'w7',
    imageUrl:
      'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&q=80',
    category: 'Footwear',
    subCategory: 'Brown Loafers',
    primaryColour: 'Brown',
    colourHex: '#6F4E37',
    pattern: 'Solid',
    formalityLevel: 4,
    occasionTags: ['Work', 'Formal', 'Date'],
    seasonTags: ['All Season'],
    fabric: 'Leather',
    brand: 'Clarks',
    isFavourite: false,
    timesWorn: 7,
  },
  {
    id: 'w8',
    imageUrl:
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80',
    category: 'Top',
    subCategory: 'Polo',
    primaryColour: 'Burgundy',
    colourHex: '#800020',
    pattern: 'Solid',
    formalityLevel: 3,
    occasionTags: ['Casual', 'Work', 'Weekend'],
    seasonTags: ['All Season'],
    fabric: 'Pique Cotton',
    brand: 'U.S. Polo',
    isFavourite: false,
    timesWorn: 9,
  },
];

export const outfitRecommendations: OutfitRecommendation[] = [
  {
    id: 'o1',
    occasionType: 'work',
    occasionLabel: 'Client meeting at the office',
    itemIds: ['w1', 'w3', 'w7'],
    reasoning:
      "For a client meeting you want to read as polished but approachable — not stiff. The crisp white Oxford signals competence, while the beige chinos keep it modern rather than corporate-severe. Brown leather loafers tie the warm tones together and elevate the whole look above a standard shirt-and-trouser combo. This plays directly to your Warm skin tone and Smart Casual archetype.",
    confidenceScore: 0.94,
    weatherTempC: 27,
    weatherCondition: 'Partly Cloudy',
  },
  {
    id: 'o2',
    occasionType: 'date',
    occasionLabel: 'Dinner date on Friday',
    itemIds: ['w8', 'w4', 'w6'],
    reasoning:
      "Evening dates call for relaxed confidence. The burgundy polo is a flattering colour against your skin tone and feels intentional without trying too hard. Indigo slim jeans keep it grounded and the white sneakers say you're comfortable in your own style. Easy to move in, easy to look great in low restaurant lighting.",
    confidenceScore: 0.88,
    weatherTempC: 24,
    weatherCondition: 'Clear',
  },
  {
    id: 'o3',
    occasionType: 'formal',
    occasionLabel: 'Cousin’s wedding reception',
    itemIds: ['w5', 'w1', 'w7'],
    reasoning:
      "A reception needs a step up. The navy blazer over the white Oxford is a timeless, photograph-friendly combination that won't date. Brown loafers add warmth and break the formality just enough to feel personal rather than rented. You already own every piece — no last-minute shopping panic.",
    confidenceScore: 0.91,
    weatherTempC: 22,
    weatherCondition: 'Cool Evening',
  },
];

export const wardrobeAnalysis: WardrobeAnalysis = {
  overallGrade: 'B+',
  overallScore: 78,
  analysisText:
    "You've built a strong, versatile smart-casual core. Your foundations are excellent — neutral bottoms, a clean white shirt, and footwear that spans casual to formal. The main opportunity is adding a couple of statement and layering pieces so you can stretch the same base across more occasions without it feeling repetitive.",
  strengths: [
    'Excellent neutral base (white, beige, navy) — mixes effortlessly',
    'Footwear covers casual → formal with just two pairs',
    'Colours align well with your warm skin tone',
  ],
  weaknesses: [
    'No lightweight layering piece for transitional weather',
    'Limited pattern variety — almost everything is solid',
    'Only one true formal option for events',
  ],
  totalItemsAnalysed: 8,
  gapItems: [
    {
      id: 'g1',
      name: 'Light Grey Overshirt',
      reason: 'Adds an easy layer and breaks up your solid-heavy wardrobe.',
      priceInr: 2299,
      platform: 'Myntra',
      imageUrl:
        'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&q=80',
    },
    {
      id: 'g2',
      name: 'Striped Linen Shirt',
      reason: 'Introduces pattern + a summer-ready fabric for casual days.',
      priceInr: 1799,
      platform: 'Amazon',
      imageUrl:
        'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&q=80',
    },
    {
      id: 'g3',
      name: 'Charcoal Dress Trousers',
      reason: 'A second formal bottom so the navy blazer has more pairings.',
      priceInr: 2999,
      platform: 'Myntra',
      imageUrl:
        'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&q=80',
    },
  ],
};

export const quizQuestions = [
  {
    id: 'q1',
    question: 'How would your closest friend describe your style?',
    options: ['Classic & timeless', 'Trendy & bold', 'Minimal & clean', 'Relaxed & comfy'],
  },
  {
    id: 'q2',
    question: 'What does a perfect weekend outfit feel like?',
    options: ['Sharp and put-together', 'Effortless but cool', 'Cozy above all', 'A statement'],
  },
  {
    id: 'q3',
    question: 'Which best describes your goal right now?',
    options: ['Look sharper at work', 'Date-night ready', 'Build versatility', 'Stand out more'],
  },
];

export const getItemById = (id: string): WardrobeItem | undefined =>
  wardrobeItems.find((i) => i.id === id);

export const getOutfitById = (id: string): OutfitRecommendation | undefined =>
  outfitRecommendations.find((o) => o.id === id);
