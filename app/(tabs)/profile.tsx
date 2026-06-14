import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { mockUser, mockProfile, wardrobeItems, getArchetype, mockHealth } from '../../lib/mockData';
import { useAppStore } from '../../lib/store';

function Row({ label, value }: { label: string; value: string }) {
  return (
    <View className="flex-row justify-between py-3 border-b border-gray-100">
      <Text className="text-textSecondary">{label}</Text>
      <Text className="text-primary font-medium">{value}</Text>
    </View>
  );
}

export default function ProfileScreen() {
  const router = useRouter();
  const signOut = useAppStore((s) => s.signOut);
  const archetypeKey = useAppStore((s) => s.archetypeKey);
  const smartwatchConnected = useAppStore((s) => s.smartwatchConnected);
  const archetype = getArchetype(archetypeKey);

  const handleSignOut = () => {
    signOut();
    router.replace('/login');
  };

  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ padding: 20 }}>
      {/* Avatar header */}
      <View className="items-center mb-6">
        <View className="w-20 h-20 rounded-full bg-primary items-center justify-center mb-3">
          <Text className="text-accent text-3xl font-bold">
            {mockUser.displayName.charAt(0)}
          </Text>
        </View>
        <Text className="font-playfair text-2xl text-primary font-bold">
          {mockUser.displayName}
        </Text>
        <Text className="text-textSecondary">{mockUser.email}</Text>
        <Text className="text-textSecondary text-xs mt-1">{mockUser.segment}</Text>
      </View>

      {/* Personality archetype */}
      <View className="bg-accent/15 border border-accent/40 rounded-2xl p-4 mb-4 flex-row items-center">
        <Text className="text-4xl mr-3">{archetype.emoji}</Text>
        <View className="flex-1">
          <Text className="text-textSecondary text-xs">Your style personality</Text>
          <Text className="text-primary font-bold text-lg">{archetype.name}</Text>
          <Text className="text-textSecondary text-xs">{archetype.tagline}</Text>
        </View>
      </View>

      {/* Subscription banner */}
      <View className="bg-primary rounded-2xl p-5 mb-6 flex-row items-center justify-between">
        <View>
          <Text className="text-gray-300 text-xs">Current plan</Text>
          <Text className="text-white text-lg font-bold capitalize">
            {mockUser.subscriptionTier} plan
          </Text>
        </View>
        <TouchableOpacity className="bg-accent px-4 py-2 rounded-lg">
          <Text className="text-primary font-bold">Upgrade to Pro</Text>
        </TouchableOpacity>
      </View>

      {/* Style profile */}
      <Text className="font-playfair text-xl text-primary font-bold mb-2">Style Profile</Text>
      <View className="bg-surface rounded-2xl border border-gray-100 px-4 mb-6">
        <Row label="Style archetype" value={archetype.name} />
        <Row label="Body type" value={mockProfile.bodyType} />
        <Row label="Skin tone" value={`${mockProfile.skinToneCategory} · ${mockProfile.skinToneShade}`} />
        <Row label="City" value={mockUser.city} />
        <Row label="Budget range" value={`₹${mockProfile.budgetRangeInr}`} />
        <Row label="Wardrobe items" value={`${wardrobeItems.length}`} />
      </View>

      {/* Preferred colours */}
      <Text className="font-playfair text-xl text-primary font-bold mb-3">Preferred Colours</Text>
      <View className="flex-row flex-wrap mb-6">
        {mockProfile.preferredColours.map((c) => (
          <View key={c} className="bg-surface border border-gray-200 px-3 py-1.5 rounded-full mr-2 mb-2">
            <Text className="text-primary">{c}</Text>
          </View>
        ))}
      </View>

      {/* Connected devices + B2B + menu */}
      <TouchableOpacity
        onPress={() => router.push('/smartwatch')}
        className="bg-surface rounded-xl border border-gray-100 px-4 py-4 mb-2 flex-row items-center justify-between"
      >
        <View className="flex-row items-center">
          <Ionicons name="watch-outline" size={20} color="#1A1A2E" style={{ marginRight: 10 }} />
          <View>
            <Text className="text-primary">Smartwatch & health</Text>
            <Text className="text-textSecondary text-xs">
              {smartwatchConnected ? `${mockHealth.device} · connected` : 'Not connected'}
            </Text>
          </View>
        </View>
        <Ionicons name="chevron-forward" size={18} color="#9A9AAB" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/calendar')}
        className="bg-surface rounded-xl border border-gray-100 px-4 py-4 mb-2 flex-row items-center justify-between"
      >
        <View className="flex-row items-center">
          <Ionicons name="calendar-outline" size={20} color="#1A1A2E" style={{ marginRight: 10 }} />
          <View>
            <Text className="text-primary">Calendar</Text>
            <Text className="text-textSecondary text-xs">Google Calendar · connected</Text>
          </View>
        </View>
        <Ionicons name="chevron-forward" size={18} color="#9A9AAB" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/wellness')}
        className="bg-surface rounded-xl border border-gray-100 px-4 py-4 mb-2 flex-row items-center justify-between"
      >
        <View className="flex-row items-center">
          <Ionicons name="fitness-outline" size={20} color="#1A1A2E" style={{ marginRight: 10 }} />
          <View>
            <Text className="text-primary">Body metrics</Text>
            <Text className="text-textSecondary text-xs">BMI & fit tuning · optional</Text>
          </View>
        </View>
        <Ionicons name="chevron-forward" size={18} color="#9A9AAB" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/business')}
        className="bg-surface rounded-xl border border-gray-100 px-4 py-4 mb-2 flex-row items-center justify-between"
      >
        <View className="flex-row items-center">
          <Ionicons name="briefcase-outline" size={20} color="#1A1A2E" style={{ marginRight: 10 }} />
          <View>
            <Text className="text-primary">StyleSense for Teams</Text>
            <Text className="text-textSecondary text-xs">For HR & corporate gifting</Text>
          </View>
        </View>
        <Ionicons name="chevron-forward" size={18} color="#9A9AAB" />
      </TouchableOpacity>

      {['Notifications', 'Privacy & data', 'Help & support', 'About StyleSense AI'].map((m) => (
        <TouchableOpacity
          key={m}
          className="bg-surface rounded-xl border border-gray-100 px-4 py-4 mb-2 flex-row items-center justify-between"
        >
          <Text className="text-primary">{m}</Text>
          <Ionicons name="chevron-forward" size={18} color="#9A9AAB" />
        </TouchableOpacity>
      ))}

      <TouchableOpacity onPress={handleSignOut} className="py-4 mt-4 items-center">
        <Text className="text-error font-semibold">Sign out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
