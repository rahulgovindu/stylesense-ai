import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { getOutfitById, getItemById } from '../../lib/mockData';

export default function OutfitDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const outfit = getOutfitById(id);

  if (!outfit) {
    return (
      <View className="flex-1 bg-background items-center justify-center">
        <Text className="text-textSecondary">Outfit not found.</Text>
      </View>
    );
  }

  const items = outfit.itemIds.map(getItemById).filter(Boolean);

  return (
    <ScrollView className="flex-1 bg-background">
      <Stack.Screen options={{ title: outfit.occasionLabel }} />

      {/* Hero items */}
      <View className="flex-row" style={{ height: 260 }}>
        {items.map((item) => (
          <Image
            key={item!.id}
            source={{ uri: item!.imageUrl }}
            className="flex-1 h-full"
            resizeMode="cover"
          />
        ))}
      </View>

      <View className="p-5">
        <View className="flex-row items-center mb-3">
          <View className="bg-success/10 px-3 py-1 rounded-full">
            <Text className="text-success font-semibold text-xs">
              {Math.round(outfit.confidenceScore * 100)}% match
            </Text>
          </View>
          <View className="flex-row items-center ml-auto">
            <Ionicons name="partly-sunny-outline" size={16} color="#6B6B7B" />
            <Text className="text-textSecondary text-sm ml-1">
              {outfit.weatherTempC}°C · {outfit.weatherCondition}
            </Text>
          </View>
        </View>

        <Text className="font-playfair text-2xl text-primary font-bold mb-1">
          {outfit.occasionLabel}
        </Text>

        {/* Stylist reasoning */}
        <View className="bg-surface rounded-2xl border border-gray-100 p-4 my-4">
          <View className="flex-row items-center mb-2">
            <Ionicons name="sparkles" size={18} color="#E8B86D" />
            <Text className="text-primary font-semibold ml-2">Why this works</Text>
          </View>
          <Text className="text-textPrimary leading-6">{outfit.reasoning}</Text>
        </View>

        {/* The pieces */}
        <Text className="font-playfair text-xl text-primary font-bold mb-3">The pieces</Text>
        {items.map((item) => (
          <TouchableOpacity
            key={item!.id}
            onPress={() => router.push(`/item/${item!.id}`)}
            className="bg-surface rounded-xl border border-gray-100 p-3 mb-3 flex-row items-center"
          >
            <Image source={{ uri: item!.imageUrl }} className="w-16 h-16 rounded-lg" resizeMode="cover" />
            <View className="flex-1 ml-3">
              <Text className="text-primary font-semibold">{item!.subCategory}</Text>
              <Text className="text-textSecondary text-xs">
                {item!.primaryColour} · {item!.fabric} · {item!.brand}
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#9A9AAB" />
          </TouchableOpacity>
        ))}

        <View className="flex-row mt-2">
          <TouchableOpacity className="flex-1 bg-primary py-4 rounded-xl items-center mr-2 flex-row justify-center">
            <Ionicons name="checkmark" size={18} color="#fff" style={{ marginRight: 6 }} />
            <Text className="text-white font-semibold">Wear this</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-surface border border-gray-300 py-4 px-4 rounded-xl items-center justify-center">
            <Ionicons name="refresh" size={20} color="#1A1A2E" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
