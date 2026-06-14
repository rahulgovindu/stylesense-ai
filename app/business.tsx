import { View, Text, ScrollView, TouchableOpacity, Alert, Platform } from 'react-native';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const FEATURES = [
  {
    icon: 'people-outline',
    title: 'New-hire dress-code guidance',
    body: 'Onboard employees with a personalised guide to your company dress code — by role, office and occasion.',
  },
  {
    icon: 'gift-outline',
    title: 'Corporate gifting',
    body: 'Gift StyleSense Pro to teams and clients. A premium, genuinely useful benefit that gets used daily.',
  },
  {
    icon: 'briefcase-outline',
    title: 'Executive presence coaching',
    body: 'Help leaders and client-facing staff dress with intent for pitches, conferences and board meetings.',
  },
  {
    icon: 'shield-checkmark-outline',
    title: 'Private & compliant',
    body: 'Org-level privacy controls. No personal photos leave the device; HR sees adoption, never wardrobes.',
  },
];

export default function BusinessScreen() {
  const requestDemo = () => {
    const msg = 'Thanks! Our team will reach out about StyleSense for Teams. (Demo — no email sent.)';
    if (Platform.OS === 'web') {
      // Alert isn't reliable on web; keep it simple
      // eslint-disable-next-line no-alert
      if (typeof window !== 'undefined') window.alert(msg);
    } else {
      Alert.alert('Request received', msg);
    }
  };

  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ padding: 20 }}>
      <Stack.Screen options={{ title: 'StyleSense for Teams' }} />

      {/* Hero */}
      <View className="bg-primary rounded-2xl p-6 mb-6">
        <Text className="text-accent text-xs font-bold tracking-widest mb-2">B2B · NEW</Text>
        <Text className="font-playfair text-3xl text-white font-bold mb-2">
          StyleSense for Teams
        </Text>
        <Text className="text-gray-300 leading-6">
          Give every employee a personal stylist. Dress-code clarity for new hires, executive
          presence for leaders, and a corporate gift people actually love.
        </Text>
      </View>

      {FEATURES.map((f) => (
        <View key={f.title} className="bg-surface rounded-2xl border border-gray-100 p-4 mb-3 flex-row">
          <View className="w-11 h-11 rounded-full bg-accent/15 items-center justify-center mr-3">
            <Ionicons name={f.icon as any} size={22} color="#E8B86D" />
          </View>
          <View className="flex-1">
            <Text className="text-primary font-semibold mb-1">{f.title}</Text>
            <Text className="text-textSecondary text-sm leading-5">{f.body}</Text>
          </View>
        </View>
      ))}

      {/* Pricing teaser */}
      <View className="flex-row justify-between bg-surface rounded-2xl border border-gray-100 p-4 my-3">
        <View className="items-center flex-1">
          <Text className="text-primary text-2xl font-bold">₹299</Text>
          <Text className="text-textSecondary text-xs text-center">/employee / mo</Text>
        </View>
        <View className="w-px bg-gray-200" />
        <View className="items-center flex-1">
          <Text className="text-primary text-2xl font-bold">50+</Text>
          <Text className="text-textSecondary text-xs text-center">volume discounts</Text>
        </View>
        <View className="w-px bg-gray-200" />
        <View className="items-center flex-1">
          <Text className="text-primary text-2xl font-bold">14d</Text>
          <Text className="text-textSecondary text-xs text-center">free pilot</Text>
        </View>
      </View>

      <TouchableOpacity onPress={requestDemo} className="w-full bg-accent py-4 rounded-xl items-center mt-3">
        <Text className="text-primary font-bold text-lg">Request a demo</Text>
      </TouchableOpacity>
      <Text className="text-textSecondary text-xs text-center mt-3 mb-2">
        Demo screen · illustrates the B2B revenue layer
      </Text>
    </ScrollView>
  );
}
