import "./global.css";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(onboarding)" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="outfit/[id]"
          options={{ headerShown: true, title: "Your Outfit", presentation: "card" }}
        />
        <Stack.Screen
          name="item/[id]"
          options={{ headerShown: true, title: "Item Details" }}
        />
        <Stack.Screen
          name="add-item"
          options={{ headerShown: true, title: "Add to Wardrobe", presentation: "modal" }}
        />
        <Stack.Screen
          name="smartwatch"
          options={{ headerShown: true, title: "Health-Aware Styling" }}
        />
        <Stack.Screen
          name="business"
          options={{ headerShown: true, title: "StyleSense for Teams" }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  );
}
