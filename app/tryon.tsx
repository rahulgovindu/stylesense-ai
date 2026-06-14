import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { tryOnAvatar, getOutfitById, getItemById, outfitRecommendations } from '../lib/mockData';

export default function TryOnScreen() {
  const { outfitId } = useLocalSearchParams<{ outfitId?: string }>();
  const outfit = getOutfitById(outfitId ?? '') ?? outfitRecommendations[0];
  const items = outfit.itemIds.map(getItemById).filter(Boolean);

  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ padding: 20 }}>
      <Stack.Screen options={{ title: 'Virtual Try-On' }} />

      <View className="items-center mb-4">
        <View className="rounded-3xl overflow-hidden border border-gray-200">
          <Image source={{ uri: tryOnAvatar.imageUrl }} style={{ width: 220, height: 380 }} resizeMode="cover" />
        </View>
        <Text className="text-textSecondary text-xs mt-2 text-center px-6">{tryOnAvatar.note}</Text>
      </View>

      <Text className="font-playfair text-xl text-primary font-bold mb-1">On you</Text>
      <Text className="text-textSecondary text-sm mb-3">{outfit.occasionLabel}</Text>

      <View className="flex-row mb-4">
        {items.map((it) => (
          <View key={it!.id} className="flex-1 items-center mr-2">
            <Image source={{ uri: it!.imageUrl }} className="w-full h-24 rounded-xl" resizeMode="cover" />
            <Text className="text-textSecondary text-[11px] mt-1 text-center" numberOfLines={1}>
              {it!.subCategory}
            </Text>
          </View>
        ))}
      </View>

      <View className="flex-row">
        <TouchableOpacity className="flex-1 bg-primary py-4 rounded-xl items-center mr-2 flex-row justify-center">
          <Ionicons name="checkmark" size={18} color="#fff" style={{ marginRight: 6 }} />
          <Text className="text-white font-semibold">Looks good</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-surface border border-gray-300 py-4 px-4 rounded-xl items-center justify-center">
          <Ionicons name="shuffle" size={20} color="#1A1A2E" />
        </TouchableOpacity>
      </View>

      <Text className="text-textSecondary text-xs text-center mt-4">
        Demo · avatar is a placeholder for the on-device try-on render
      </Text>
    </ScrollView>
  );
}
