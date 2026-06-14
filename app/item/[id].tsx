import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { getItemById } from '../../lib/mockData';
import { useAppStore } from '../../lib/store';

function Attr({ label, value }: { label: string; value: string }) {
  return (
    <View className="w-1/2 mb-4">
      <Text className="text-textSecondary text-xs">{label}</Text>
      <Text className="text-primary font-semibold mt-0.5">{value}</Text>
    </View>
  );
}

export default function ItemDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const item = getItemById(id);
  const favouriteIds = useAppStore((s) => s.favouriteIds);
  const toggleFavourite = useAppStore((s) => s.toggleFavourite);

  if (!item) {
    return (
      <View className="flex-1 bg-background items-center justify-center">
        <Text className="text-textSecondary">Item not found.</Text>
      </View>
    );
  }

  const isFav = favouriteIds.includes(item.id);
  const formality = ['Very casual', 'Casual', 'Smart casual', 'Formal', 'Very formal'][
    item.formalityLevel - 1
  ];

  return (
    <ScrollView className="flex-1 bg-background">
      <Stack.Screen options={{ title: item.subCategory }} />

      <Image source={{ uri: item.imageUrl }} className="w-full h-80" resizeMode="cover" />

      <View className="p-5">
        <View className="flex-row items-center justify-between mb-2">
          <Text className="font-playfair text-2xl text-primary font-bold">{item.subCategory}</Text>
          <TouchableOpacity onPress={() => toggleFavourite(item.id)}>
            <Ionicons
              name={isFav ? 'heart' : 'heart-outline'}
              size={28}
              color={isFav ? '#C4392B' : '#9A9AAB'}
            />
          </TouchableOpacity>
        </View>
        <Text className="text-textSecondary mb-5">{item.brand}</Text>

        <View className="bg-surface rounded-2xl border border-gray-100 p-4 flex-row flex-wrap">
          <Attr label="Category" value={item.category} />
          <Attr label="Colour" value={item.primaryColour} />
          <Attr label="Pattern" value={item.pattern} />
          <Attr label="Fabric" value={item.fabric} />
          <Attr label="Formality" value={formality} />
          <Attr label="Times worn" value={`${item.timesWorn}×`} />
        </View>

        <Text className="text-primary font-semibold mt-5 mb-2">Good for</Text>
        <View className="flex-row flex-wrap">
          {item.occasionTags.map((t) => (
            <View key={t} className="bg-accent/20 px-3 py-1.5 rounded-full mr-2 mb-2">
              <Text className="text-primary text-sm">{t}</Text>
            </View>
          ))}
        </View>

        <Text className="text-primary font-semibold mt-3 mb-2">Season</Text>
        <View className="flex-row flex-wrap">
          {item.seasonTags.map((t) => (
            <View key={t} className="bg-surface border border-gray-200 px-3 py-1.5 rounded-full mr-2 mb-2">
              <Text className="text-textSecondary text-sm">{t}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
