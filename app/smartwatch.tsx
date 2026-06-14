import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { mockHealth } from '../lib/mockData';
import { useAppStore } from '../lib/store';

const ICONS: Record<string, any> = {
  walk: 'footsteps-outline',
  bed: 'bed-outline',
  calendar: 'calendar-outline',
  heart: 'heart-outline',
};

export default function SmartwatchScreen() {
  const connected = useAppStore((s) => s.smartwatchConnected);
  const setConnected = useAppStore((s) => s.setSmartwatchConnected);

  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ padding: 20 }}>
      <Stack.Screen options={{ title: 'Health-Aware Styling' }} />

      {/* Status */}
      <View className="bg-primary rounded-2xl p-5 mb-5 flex-row items-center">
        <View className="w-12 h-12 rounded-full bg-accent/20 items-center justify-center mr-3">
          <Ionicons name="watch-outline" size={24} color="#E8B86D" />
        </View>
        <View className="flex-1">
          <Text className="text-white font-bold">{mockHealth.device}</Text>
          <Text className={connected ? 'text-success' : 'text-gray-400'}>
            {connected ? '● Connected · syncing' : '○ Not connected'}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => setConnected(!connected)}
          className={`px-3 py-2 rounded-lg ${connected ? 'bg-white/10' : 'bg-accent'}`}
        >
          <Text className={connected ? 'text-white' : 'text-primary font-bold'}>
            {connected ? 'Disconnect' : 'Connect'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Headline insight */}
      <Text className="font-playfair text-2xl text-primary font-bold mb-1">
        {mockHealth.headline}
      </Text>
      <Text className="text-textPrimary leading-6 mb-6">{mockHealth.styleInsight}</Text>

      <Text className="font-playfair text-xl text-primary font-bold mb-3">
        What your data changed today
      </Text>
      {mockHealth.factors.map((f) => (
        <View key={f.label} className="bg-surface rounded-2xl border border-gray-100 p-4 mb-3 flex-row items-center">
          <View className="w-11 h-11 rounded-full bg-accent/15 items-center justify-center mr-3">
            <Ionicons name={ICONS[f.icon] ?? 'pulse-outline'} size={20} color="#E8B86D" />
          </View>
          <View className="flex-1">
            <Text className="text-textSecondary text-xs">{f.label}</Text>
            <Text className="text-primary font-semibold">{f.value}</Text>
          </View>
          <View className="items-end ml-2">
            <Text className="text-textSecondary text-xs">→ styling</Text>
            <Text className="text-primary font-medium text-right" style={{ maxWidth: 130 }}>
              {f.note}
            </Text>
          </View>
        </View>
      ))}

      <View className="bg-primary/5 border border-primary/10 rounded-2xl p-4 mt-2">
        <Text className="text-textSecondary text-sm leading-5">
          🔒 Health data is read on-device and only used to tune recommendations. It's never
          shared or sold. No competitor connects your smartwatch to your wardrobe — this is what
          makes StyleSense uniquely yours.
        </Text>
      </View>
    </ScrollView>
  );
}
