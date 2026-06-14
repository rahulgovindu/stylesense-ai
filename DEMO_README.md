# StyleSense AI — Demo Build

A fully clickable, **no-API-keys** demo of the StyleSense AI app. All data is
mocked (`lib/mockData.ts`) and auth/onboarding state lives in a small Zustand
store (`lib/store.ts`). Nothing talks to a backend — it's a front-end prototype
to feel the product.

## Run it

```bash
cd mobile
npx expo start --web        # opens at http://localhost:8081 in the browser
# or: npx expo start        # then press i (iOS sim) / a (Android) / scan QR in Expo Go
```

> First web bundle takes ~1–2 min. Garment images load from Unsplash, so you
> need internet the first time.

## The flow (everything is connected)

```
/login  →  /welcome  →  /quiz (3 Qs)  →  /profile-setup  →  (tabs)
```

Tabs:
- **Today** (`(tabs)/index.tsx`) — greeting, weather, wardrobe score, today's
  outfit + the week's looks. Tap a look → outfit detail.
- **Wardrobe** (`(tabs)/wardrobe.tsx`) — filterable grid; tap an item → item
  detail; **+** → add-item flow.
- **Analysis** (`(tabs)/analysis.tsx`) — grade, strengths/opportunities, and
  "fill the gaps" shopping suggestions.
- **Profile** (`(tabs)/profile.tsx`) — style profile, plan, sign out.

Detail / modal screens:
- `outfit/[id].tsx` — stylist reasoning + the pieces.
- `item/[id].tsx` — garment attributes, favourite toggle.
- `add-item.tsx` — simulated camera + AI garment tagging (fake delay).

## What's mocked (i.e. where real APIs would plug in)

| Demo stub | Real implementation |
|-----------|---------------------|
| `signIn()` in `lib/store.ts` | Clerk OAuth / email OTP |
| `lib/mockData.ts` outfits & reasoning | Claude API outfit generation |
| `add-item.tsx` fake tagging | Vision API + Celery tagging task |
| `mockWeather` | OpenWeatherMap |
| Analysis "gap" shop buttons | Myntra / Amazon affiliate links |

## Notes
- `app/+html.tsx` forces a light colour-scheme + full-height root so the web
  build fills the viewport.
- Added `nativewind` + `tailwindcss` to dependencies (were missing — the app
  could not build without them).
