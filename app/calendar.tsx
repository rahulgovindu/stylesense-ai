import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { upcomingEvents, formalityLabel, getOutfitById, getItemById } from '../lib/mockData';

const TYPE_ICON: Record<string, any> = {
  work: 'briefcase-outline',
  date: 'wine-outline',
  formal: 'sparkles-outline',
  festive: 'flame-outline',
};

export default function CalendarScreen() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ padding: 20 }}>
      <Stack.Screen options={{ title: 'Calendar' }} />

      {/* Sync status */}
      <View className="bg-primary rounded-2xl p-4 mb-5 flex-row items-center">
        <Ionicons name="calendar" size={22} color="#E8B86D" />
        <View className="flex-1 ml-3">
          <Text className="text-white font-semibold">Google Calendar</Text>
          <Text className="text-success text-xs">● Connected · read-only</Text>
        </View>
        <Text className="text-gray-400 text-xs">{upcomingEvents.length} upcoming</Text>
      </View>

      <Text className="text-textSecondary mb-3">
        We pick an outfit ~24h before each event and match the formality automatically.
      </Text>

      {upcomingEvents.map((ev) => {
        const outfit = getOutfitById(ev.outfitId);
        const firstItem = outfit ? getItemById(outfit.itemIds[0]) : undefined;
        return (
          <TouchableOpacity
            key={ev.id}
            onPress={() => outfit && router.push(`/outfit/${outfit.id}`)}
            className="bg-surface rounded-2xl border border-gray-100 p-4 mb-3"
          >
            <View className="flex-row items-center mb-2">
              <View className="w-10 h-10 rounded-full bg-accent/15 items-center justify-center mr-3">
                <Ionicons name={TYPE_ICON[ev.type] ?? 'calendar-outline'} size={20} color="#E8B86D" />
              </View>
              <View className="flex-1">
                <Text className="text-primary font-semibold">{ev.title}</Text>
                <Text className="text-textSecondary text-xs">
                  {ev.dateLabel} · {ev.timeLabel} · {formalityLabel(ev.formality)}
                </Text>
              </View>
            </View>
            <View className="flex-row items-center bg-background rounded-xl p-2">
              <Ionicons name="shirt-outline" size={16} color="#6B6B7B" />
              <Text className="text-textSecondary text-xs ml-2 flex-1" numberOfLines={1}>
                Outfit ready{firstItem ? ` · ${firstItem.subCategory} + ${outfit!.itemIds.length - 1} more` : ''}
              </Text>
              <Text className="text-accent text-xs font-semibold">View →</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
