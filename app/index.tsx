import { Redirect } from "expo-router";
import { useAppStore } from "../lib/store";

// Entry router: decides where the user lands based on demo auth/onboarding state.
export default function Index() {
  const isSignedIn = useAppStore((s) => s.isSignedIn);
  const onboardingComplete = useAppStore((s) => s.onboardingComplete);

  if (!isSignedIn) return <Redirect href="/login" />;
  if (!onboardingComplete) return <Redirect href="/welcome" />;
  return <Redirect href="/(tabs)" />;
}
