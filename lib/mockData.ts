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
  // Niche we build for first (Risk: dominate one segment before expanding)
  segment: 'Young professional · 22–32',
};

// ---------------------------------------------------------------------------
// Personality archetypes — the differentiator: archetype × occasion depth.
// The quiz maps a user to one of these; reasoning is written in its voice.
// ---------------------------------------------------------------------------
export type Archetype = {
  key: string;
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  palette: string[];
  dresses: string; // how this archetype likes to dress
};

export const archetypes: Record<string, Archetype> = {
  executive: {
    key: 'executive',
    name: 'The Executive',
    emoji: '👔',
    tagline: 'Polished, decisive, commands the room',
    description:
      'You dress to be taken seriously. Clean lines, considered neutrals, nothing loud — your clothes do the talking before you do.',
    palette: ['Navy', 'Charcoal', 'White', 'Burgundy'],
    dresses: 'Sharp, structured, neutral-forward',
  },
  creative: {
    key: 'creative',
    name: 'The Creative',
    emoji: '🎨',
    tagline: 'Expressive, bold, rules are optional',
    description:
      'Style is self-expression for you. You mix texture, colour and the unexpected — and you can carry a statement piece without blinking.',
    palette: ['Olive', 'Rust', 'Mustard', 'Indigo'],
    dresses: 'Layered, textured, statement-led',
  },
  introvert: {
    key: 'introvert',
    name: 'The Quiet Confident',
    emoji: '🌿',
    tagline: 'Understated, comfortable, effortlessly put-together',
    description:
      'You like to blend in beautifully. Comfort-first, low-maintenance, but always intentional — never sloppy, never flashy.',
    palette: ['Beige', 'Sage', 'White', 'Stone'],
    dresses: 'Relaxed, tonal, quietly refined',
  },
  minimalist: {
    key: 'minimalist',
    name: 'The Minimalist',
    emoji: '◻️',
    tagline: 'Less, but better',
    description:
      'A tight capsule of pieces that all work together. You value quality over quantity and a uniform you can trust.',
    palette: ['White', 'Black', 'Grey', 'Navy'],
    dresses: 'Clean, monochrome, capsule-driven',
  },
};

export const getArchetype = (key: string | null | undefined): Archetype =>
  archetypes[key ?? 'executive'] ?? archetypes.executive;

// Quiz answer (first question) → archetype key
export const archetypeForAnswer = (answer: string): string => {
  const map: Record<string, string> = {
    'Classic & timeless': 'executive',
    'Trendy & bold': 'creative',
    'Minimal & clean': 'minimalist',
    'Relaxed & comfy': 'introvert',
  };
  return map[answer] ?? 'executive';
};

// ---------------------------------------------------------------------------
// Smartwatch / health integration — zero competitors do this.
// Activity, sleep & schedule data shape the day's styling recommendation.
// ---------------------------------------------------------------------------
export const mockHealth = {
  connected: true,
  device: 'Apple Watch Series 9',
  steps: 8430,
  stepsGoal: 10000,
  restingHeartRate: 62,
  sleepHours: 6.4,
  activityLevel: 'High' as 'High' | 'Moderate' | 'Low',
  calendarLoad: '3 back-to-back meetings',
  // The styling insight derived from the watch data
  headline: 'Active, high-load day ahead',
  styleInsight:
    'Your watch logged a morning workout and a packed calendar. StyleSense is prioritising breathable, low-maintenance fabrics that stay crisp from 9am to dinner — and skipping heavy layers you’d be carrying around all day.',
  factors: [
    { icon: 'walk', label: 'Activity', value: 'High · workout logged', note: 'Breathable fabrics' },
    { icon: 'bed', label: 'Sleep', value: '6.4 hrs · below average', note: 'Comfort-first fit' },
    { icon: 'calendar', label: 'Schedule', value: '3 meetings, 1 dinner', note: 'Desk-to-dinner versatile' },
    { icon: 'heart', label: 'Resting HR', value: '62 bpm · calm', note: 'You can handle a bold accent' },
  ],
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
  // ---- India-first: ethnic / festive wear (illustrative colour tiles) ----
  {
    id: 'w9',
    imageUrl: 'https://placehold.co/600x600/1F2A44/E8B86D?text=Navy+Kurta',
    category: 'Ethnic',
    subCategory: 'Cotton Kurta',
    primaryColour: 'Navy',
    colourHex: '#1F2A44',
    pattern: 'Solid',
    formalityLevel: 3,
    occasionTags: ['Festive', 'Casual', 'Pujo'],
    seasonTags: ['All Season'],
    fabric: 'Cotton',
    brand: 'FabIndia',
    isFavourite: true,
    timesWorn: 6,
  },
  {
    id: 'w10',
    imageUrl: 'https://placehold.co/600x600/800020/F8F7F4?text=Bandhgala',
    category: 'Ethnic',
    subCategory: 'Bandhgala Jacket',
    primaryColour: 'Burgundy',
    colourHex: '#800020',
    pattern: 'Solid',
    formalityLevel: 5,
    occasionTags: ['Festive', 'Wedding', 'Diwali'],
    seasonTags: ['Winter', 'All Season'],
    fabric: 'Silk Blend',
    brand: 'Manyavar',
    isFavourite: false,
    timesWorn: 2,
  },
  {
    id: 'w11',
    imageUrl: 'https://placehold.co/600x600/6F4E37/F8F7F4?text=Juttis',
    category: 'Footwear',
    subCategory: 'Leather Juttis',
    primaryColour: 'Tan',
    colourHex: '#A6743C',
    pattern: 'Solid',
    formalityLevel: 4,
    occasionTags: ['Festive', 'Wedding', 'Diwali'],
    seasonTags: ['All Season'],
    fabric: 'Leather',
    brand: 'Fizdi',
    isFavourite: false,
    timesWorn: 3,
  },
];

export const outfitRecommendations: OutfitRecommendation[] = [
  {
    id: 'o1',
    occasionType: 'work',
    occasionLabel: 'Client meeting at the office',
    itemIds: ['w1', 'w3', 'w7'],
    reasoning:
      "As The Executive, you want to read as polished but approachable — not stiff. The crisp white Oxford signals competence, while the beige chinos keep it modern rather than corporate-severe. Brown leather loafers tie the warm tones together and elevate the whole look above a standard shirt-and-trouser combo. Your Apple Watch shows a workout this morning and 3 back-to-back meetings, so this pick stays breathable and crease-resistant from desk to dinner — no jacket to lug around. Plays directly to your warm skin tone too.",
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
  {
    id: 'o4',
    occasionType: 'festive',
    occasionLabel: 'Diwali party at a friend’s place',
    itemIds: ['w9', 'w10', 'w11'],
    reasoning:
      "Festive occasions are where The Executive can loosen up without losing polish. The navy cotton kurta keeps you cool through a long evening, the burgundy bandhgala adds richness for the photos, and tan juttis finish it the Indian way. Deep jewel tones flatter your warm skin tone and read beautifully under warm festive lighting. Comfortable enough that your watch won't be nagging you to stand up.",
    confidenceScore: 0.9,
    weatherTempC: 26,
    weatherCondition: 'Clear',
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
    'Thin on festive/ethnic options for the Indian event calendar',
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
      platform: 'Ajio',
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
    {
      id: 'g4',
      name: 'Silk-Blend Nehru Jacket',
      reason: 'Festive-ready layer for Diwali, weddings & receptions — a clear gap.',
      priceInr: 3499,
      platform: 'Myntra',
      imageUrl: 'https://placehold.co/400x400/2D6A4F/F8F7F4?text=Nehru+Jacket',
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

// ---------------------------------------------------------------------------
// Calendar & events — read-only sync; proactive styling ~24h before events
// ---------------------------------------------------------------------------
export type UpcomingEvent = {
  id: string;
  title: string;
  dateLabel: string;
  timeLabel: string;
  type: string; // work / date / formal / festive
  formality: number; // 1-5
  outfitId: string;
  source: string;
};

export const upcomingEvents: UpcomingEvent[] = [
  { id: 'e1', title: 'Client meeting — Acme Corp', dateLabel: 'Tomorrow', timeLabel: '10:00 AM', type: 'work', formality: 4, outfitId: 'o1', source: 'Google Calendar' },
  { id: 'e2', title: 'Dinner with Riya', dateLabel: 'Fri', timeLabel: '8:00 PM', type: 'date', formality: 3, outfitId: 'o2', source: 'Google Calendar' },
  { id: 'e3', title: 'Rohan & Meera’s reception', dateLabel: 'Sat', timeLabel: '7:00 PM', type: 'formal', formality: 5, outfitId: 'o3', source: 'Google Calendar' },
  { id: 'e4', title: 'Diwali get-together', dateLabel: 'Next Tue', timeLabel: '6:30 PM', type: 'festive', formality: 4, outfitId: 'o4', source: 'Google Calendar' },
];

export const formalityLabel = (level: number): string =>
  ['Very casual', 'Casual', 'Smart casual', 'Formal', 'Black-tie'][Math.max(0, Math.min(4, level - 1))];

// ---------------------------------------------------------------------------
// Event-mode styling — pick an event type, get ranked outfit options
// ---------------------------------------------------------------------------
export const eventTypes = [
  { key: 'work', label: 'Investor pitch / Work', emoji: '💼', primaryOutfitId: 'o1' },
  { key: 'date', label: 'First date / Dinner', emoji: '🌙', primaryOutfitId: 'o2' },
  { key: 'formal', label: 'Wedding / Reception', emoji: '🎩', primaryOutfitId: 'o3' },
  { key: 'festive', label: 'Festive / Diwali', emoji: '🪔', primaryOutfitId: 'o4' },
];

// Rank outfits for a chosen event type: best match first, others as alternates.
export const rankedOutfitsForEvent = (
  typeKey: string
): { outfit: OutfitRecommendation; score: number; isBest: boolean }[] => {
  const ev = eventTypes.find((e) => e.key === typeKey);
  return outfitRecommendations
    .map((o) => {
      const isBest = o.id === ev?.primaryOutfitId;
      const score = isBest ? 0.96 : Math.max(0.45, o.confidenceScore - 0.3);
      return { outfit: o, score, isBest };
    })
    .sort((a, b) => b.score - a.score);
};

// ---------------------------------------------------------------------------
// Social & trend data — Pinterest boards, IG saves, open fashion data
// ---------------------------------------------------------------------------
export const socialConnections = [
  { key: 'pinterest', label: 'Pinterest', icon: 'logo-pinterest', connected: true, detail: '3 boards · 142 pins synced' },
  { key: 'instagram', label: 'Instagram saves', icon: 'logo-instagram', connected: true, detail: '67 saved looks analysed' },
  { key: 'trends', label: 'Open fashion trends', icon: 'trending-up', connected: true, detail: 'Trend feed enabled' },
];

export type Trend = { id: string; title: string; tag: string; image: string; note: string };
export const trends: Trend[] = [
  {
    id: 't1',
    title: 'Earthy neutrals',
    tag: 'Trending in Bengaluru',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&q=80',
    note: 'You already own beige chinos — lean into this with tonal layering.',
  },
  {
    id: 't2',
    title: 'Relaxed tailoring',
    tag: 'From your Pinterest',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80',
    note: 'Soft-shoulder blazers — pairs with your navy blazer for a modern fit.',
  },
  {
    id: 't3',
    title: 'Festive jewel tones',
    tag: 'Season pick',
    image: 'https://placehold.co/400x400/800020/F8F7F4?text=Jewel+Tones',
    note: 'Burgundy & emerald for the festive run — matches your bandhgala.',
  },
];

export type Influencer = {
  id: string;
  name: string;
  handle: string;
  matchReason: string;
  lookImage: string;
  adaptNote: string;
};
export const influencers: Influencer[] = [
  {
    id: 'inf1',
    name: 'Arjun Mehta',
    handle: '@arjunstyles',
    matchReason: 'Athletic build · warm skin tone',
    lookImage: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80',
    adaptNote: 'Recreate with your navy blazer + white Oxford — you own 3 of 3 pieces.',
  },
  {
    id: 'inf2',
    name: 'Kabir Rao',
    handle: '@kabir.fits',
    matchReason: 'Smart-casual · similar height',
    lookImage: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80',
    adaptNote: 'Swap his denim for your indigo slim jeans + white sneakers.',
  },
  {
    id: 'inf3',
    name: 'Dev Saxena',
    handle: '@devwears',
    matchReason: 'Festive looks · Indian wear',
    lookImage: 'https://placehold.co/500x500/1F2A44/E8B86D?text=Festive+Look',
    adaptNote: 'His kurta layering works with your navy kurta + bandhgala.',
  },
];

// ---------------------------------------------------------------------------
// Virtual try-on — personalised avatar preview (Partial in v1)
// ---------------------------------------------------------------------------
export const tryOnAvatar = {
  imageUrl: 'https://placehold.co/320x560/1A1A2E/E8B86D?text=Your+Avatar',
  note: 'Avatar generated from your body type (Athletic) and height (178 cm). On-device only.',
};

// ---------------------------------------------------------------------------
// Wellness (Diet / BMI) — OPTIONAL module. Informs which silhouettes we
// prioritise. Kept out of the core flow per product-focus feedback.
// ---------------------------------------------------------------------------
export const wellness = {
  enabled: true,
  heightCm: 178,
  weightKg: 74,
  bmi: 23.4,
  bmiCategory: 'Healthy',
  fitTip: 'Your metrics suit structured, regular fits — we avoid overly slim or boxy cuts.',
  note: 'BMI only tunes fit & silhouette. Full diet planning is a separate optional add-on, intentionally kept out of v1 to keep StyleSense focused.',
};
