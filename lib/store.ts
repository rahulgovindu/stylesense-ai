// ---------------------------------------------------------------------------
// StyleSense AI — DEMO app store (Zustand)
// Holds light client state for the demo: auth + onboarding progress and the
// user's quiz answers. No persistence / no network — resets on reload.
// ---------------------------------------------------------------------------
import { create } from 'zustand';

type AppState = {
  isSignedIn: boolean;
  onboardingComplete: boolean;
  quizAnswers: Record<string, string>;
  archetypeKey: string | null;
  smartwatchConnected: boolean;
  favouriteIds: string[];

  signIn: () => void;
  signOut: () => void;
  setQuizAnswer: (questionId: string, answer: string) => void;
  setArchetype: (key: string) => void;
  setSmartwatchConnected: (connected: boolean) => void;
  completeOnboarding: () => void;
  toggleFavourite: (id: string) => void;
};

export const useAppStore = create<AppState>((set) => ({
  isSignedIn: false,
  onboardingComplete: false,
  quizAnswers: {},
  archetypeKey: 'executive',
  smartwatchConnected: true,
  favouriteIds: ['w1', 'w3', 'w5', 'w6', 'w9'],

  signIn: () => set({ isSignedIn: true }),
  signOut: () =>
    set({ isSignedIn: false, onboardingComplete: false, quizAnswers: {}, archetypeKey: 'executive' }),
  setQuizAnswer: (questionId, answer) =>
    set((s) => ({ quizAnswers: { ...s.quizAnswers, [questionId]: answer } })),
  setArchetype: (key) => set({ archetypeKey: key }),
  setSmartwatchConnected: (connected) => set({ smartwatchConnected: connected }),
  completeOnboarding: () => set({ onboardingComplete: true }),
  toggleFavourite: (id) =>
    set((s) => ({
      favouriteIds: s.favouriteIds.includes(id)
        ? s.favouriteIds.filter((f) => f !== id)
        : [...s.favouriteIds, id],
    })),
}));
