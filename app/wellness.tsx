import { View, Text, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { wellness } from '../lib/mockData';

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <View className="flex-1 items-center">
      <Text className="text-primary text-2xl font-bold">{value}</Text>
      <Text className="text-textSecondary text-xs">{label}</Text>
    </View>
  );
}

export default function WellnessScreen() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ padding: 20 }}>
      <Stack.Screen options={{ title: 'Body Metrics' }} />

      <View className="bg-accent/15 border border-accent/40 rounded-2xl p-3 mb-5 flex-row items-start">
        <Ionicons name="information-circle-outline" size={18} color="#1A1A2E" style={{ marginTop: 1 }} />
        <Text className="text-textPrimary text-xs ml-2 flex-1">
          Optional module. Metrics only tune fit & silhouette — full diet planning is intentionally
          a separate add-on to keep StyleSense focused.
        </Text>
      </View>

      <View className="bg-surface rounded-2xl border border-gray-100 p-5 mb-5 flex-row">
        <Metric label="Height" value={`${wellness.heightCm}cm`} />
        <View className="w-px bg-gray-200" />
        <Metric label="Weight" value={`${wellness.weightKg}kg`} />
        <View className="w-px bg-gray-200" />
        <Metric label="BMI" value={`${wellness.bmi}`} />
      </View>

      <View className="bg-success/10 rounded-2xl p-4 mb-5 flex-row items-center">
        <Ionicons name="checkmark-circle" size={22} color="#2D6A4F" />
        <Text className="text-success font-semibold ml-2">BMI {wellness.bmiCategory}</Text>
      </View>

      <Text className="font-playfair text-lg text-primary font-bold mb-2">How this shapes styling</Text>
      <Text className="text-textPrimary leading-6 mb-4">{wellness.fitTip}</Text>

      <View className="bg-primary/5 border border-primary/10 rounded-2xl p-4">
        <Text className="text-textSecondary text-sm leading-5">{wellness.note}</Text>
      </View>
    </ScrollView>
  );
}
