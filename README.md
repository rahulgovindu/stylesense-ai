# StyleSense AI

**India's first personality-driven AI personal stylist.** Built for young professionals (22–32).

StyleSense AI is a mobile-first app that acts as a 24/7 personal stylist. It ingests rich personal
data across five dimensions — **wardrobe, body, personality, calendar, and social context** — to
deliver styling that feels genuinely personal rather than algorithmically generic.

> ⚠️ **This repo is a clickable demo.** Every screen is wired and navigable, but all data is
> mocked ([`lib/mockData.ts`](lib/mockData.ts)) — there are **no API keys** and nothing talks to a
> backend. It's a front-end prototype to feel the product, not the production app. See
> [Roadmap](#roadmap) for what becomes real.

---

## ✨ What it does

### Five input dimensions
| Dimension | Captured | Used for |
|-----------|----------|----------|
| **Wardrobe** | Photos auto-tagged into a digital closet | Gap analysis & item compatibility |
| **Body & appearance** | Body type, skin tone, hair, height, gender | Flattering colours & fits |
| **Personality** | Psychographic quiz → style archetype | Outfits in *your* voice |
| **Calendar & events** | Read-only calendar sync | Proactive styling ~24h before events |
| **Social & trends** | Pinterest / Instagram / open fashion data | Trends filtered through your profile |

### Key features
- 🌅 **Daily outfit engine** — a curated look from your own wardrobe, matched to weather + calendar
- 🎯 **Event-mode styling** — pick an occasion, get ranked options with reasoning
- 📊 **Wardrobe audit** — AI scores your closet and suggests the top items to buy next
- 🛍️ **Shop the gap** — curated picks from Myntra / Ajio / Amazon, filtered to size, budget & style (affiliate model)
- 🧍 **Virtual try-on** — preview outfits on a personalised avatar
- ⌚ **Smartwatch integration** — activity, sleep & schedule data tune each day's recommendation *(no competitor does this)*
- 👥 **Influencer "style twins"** — looks from creators with a similar body type, adapted to your wardrobe
- 🪔 **India-first** — ethnic wear, festive occasions, Indian skin tones
- 💼 **StyleSense for Teams** — B2B layer for HR onboarding & corporate gifting

---

## 🧭 App map

**Tabs:** Today · Wardrobe · Discover · Analysis · Profile

**Flow:** `login → welcome → quiz → archetype reveal → profile setup → app`

**Screens:** daily home, wardrobe grid + item detail, AI add-item, outfit detail, virtual try-on,
event-mode styling, calendar, smartwatch insights, wardrobe analysis, discover (trends +
influencers), profile, body metrics (optional), StyleSense for Teams.

---

## 🚀 Run it

```bash
npm install
npx expo start --web      # opens at http://localhost:8081
# or: npx expo start  → press a / i, or scan the QR in Expo Go
```

On web the app renders inside a **centered phone frame**; on a real phone it goes full-screen.
First web bundle takes ~1–2 min. Garment images load from the network, so internet is needed the
first time.

---

## 🛠️ Tech stack

- **Expo / React Native** + **Expo Router** (file-based navigation)
- **NativeWind** (Tailwind for RN) — design tokens in [`tailwind.config.js`](tailwind.config.js)
- **Zustand** for light client state ([`lib/store.ts`](lib/store.ts))
- TypeScript

---

## 🗺️ Roadmap

Where the mocks become real:

| Demo stub | Real implementation |
|-----------|---------------------|
| `signIn()` | Clerk OAuth / email OTP |
| Mock outfit reasoning | Claude API, per archetype × occasion |
| Add-item tagging | Vision API + async tagging |
| Smartwatch data | Apple HealthKit / Google Fit (on-device) |
| Calendar | Google Calendar API (read-only) |
| Weather | OpenWeatherMap |
| Shop the gap | Myntra / Ajio / Amazon affiliate APIs |

**Diet / BMI** ships as an *optional* Body-metrics module (it only tunes fit). Full diet planning is
intentionally out of v1 to keep the product focused.

---

_Demo built with [Claude Code](https://claude.com/claude-code)._
