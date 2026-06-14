import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { eventTypes, rankedOutfitsForEvent, getItemById } from '../lib/mockData';

export default function EventStylingScreen() {
  const router = useRouter();
  const [typeKey, setTypeKey] = useState<string | null>(null);

  const ranked = typeKey ? rankedOutfitsForEvent(typeKey) : [];

  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ padding: 20 }}>
      <Stack.Screen options={{ title: 'Style an Event' }} />

      <Text className="font-playfair text-2xl text-primary font-bold mb-1">
        What are you dressing for?
      </Text>
      <Text className="text-textSecondary mb-4">
        Pick an occasion and get ranked options with reasoning.
      </Text>

      {/* Event type picker */}
      <View className="flex-row flex-wrap justify-between mb-6">
        {eventTypes.map((e) => {
          const active = typeKey === e.key;
          return (
            <TouchableOpacity
              key={e.key}
              onPress={() => setTypeKey(e.key)}
              style={{ width: '48%' }}
              className={`rounded-2xl p-4 mb-3 border ${
                active ? 'bg-primary border-primary' : 'bg-surface border-gray-200'
              }`}
            >
              <Text className="text-3xl mb-1">{e.emoji}</Text>
              <Text className={`font-semibold ${active ? 'text-white' : 'text-primary'}`}>
                {e.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {!typeKey && (
        <View className="items-center py-10">
          <Ionicons name="shirt-outline" size={48} color="#C9C9D4" />
          <Text className="text-textSecondary mt-3">Choose an occasion to see options</Text>
        </View>
      )}

      {typeKey && (
        <>
          <Text className="font-playfair text-xl text-primary font-bold mb-3">Ranked for you</Text>
          {ranked.map((r, idx) => {
            const items = r.outfit.itemIds.map(getItemById).filter(Boolean);
            return (
              <TouchableOpacity
                key={r.outfit.id}
                onPress={() => router.push(`/outfit/${r.outfit.id}`)}
                className={`bg-surface rounded-2xl border mb-3 overflow-hidden ${
                  r.isBest ? 'border-accent' : 'border-gray-100'
                }`}
              >
                {r.isBest && (
                  <View className="bg-accent px-3 py-1">
                    <Text className="text-primary text-xs font-bold">★ BEST MATCH</Text>
                  </View>
                )}
                <View className="flex-row">
                  {items.map((it) => (
                    <Image key={it!.id} source={{ uri: it!.imageUrl }} className="flex-1 h-24" resizeMode="cover" />
                  ))}
                </View>
                <View className="p-3 flex-row items-center">
                  <View className="flex-1">
                    <Text className="text-primary font-semibold" numberOfLines={1}>
                      Option {idx + 1} · {r.outfit.occasionLabel}
                    </Text>
                    <Text className="text-textSecondary text-xs" numberOfLines={1}>
                      {r.outfit.reasoning.split('.')[0]}.
                    </Text>
                  </View>
                  <View className="bg-success/10 px-2 py-1 rounded-md ml-2">
                    <Text className="text-success text-xs font-semibold">
                      {Math.round(r.score * 100)}%
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </>
      )}
    </ScrollView>
  );
}
