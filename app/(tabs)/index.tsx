import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import {
  mockUser,
  mockWeather,
  wardrobeAnalysis,
  outfitRecommendations,
  getItemById,
} from '../../lib/mockData';

export default function HomeScreen() {
  const router = useRouter();
  const featured = outfitRecommendations[0];
  const featuredItems = featured.itemIds.map(getItemById).filter(Boolean);

  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ padding: 20 }}>
      {/* Greeting + weather */}
      <View className="flex-row justify-between items-start mb-5">
        <View>
          <Text className="font-playfair text-3xl text-primary font-bold">
            Good morning,{'\n'}{mockUser.displayName} 👋
          </Text>
        </View>
        <View className="bg-surface px-3 py-2 rounded-xl border border-gray-100 items-center">
          <Text className="text-2xl">{mockWeather.emoji}</Text>
          <Text className="text-primary font-bold">{mockWeather.tempC}°C</Text>
          <Text className="text-textSecondary text-xs">{mockWeather.city}</Text>
        </View>
      </View>

      {/* Wardrobe score card */}
      <TouchableOpacity
        onPress={() => router.push('/analysis')}
        className="bg-primary p-5 rounded-2xl mb-5 flex-row justify-between items-center"
      >
        <View>
          <Text className="text-gray-300 text-base">Your Wardrobe Score</Text>
          <Text className="text-accent text-5xl font-bold mt-1">
            {wardrobeAnalysis.overallGrade}
          </Text>
          <Text className="text-gray-400 text-xs mt-1">Tap to see full analysis →</Text>
        </View>
        <View className="w-20 h-20 rounded-full border-4 border-accent items-center justify-center">
          <Text className="text-white text-xl font-bold">{wardrobeAnalysis.overallScore}</Text>
        </View>
      </TouchableOpacity>

      {/* Today's outfit */}
      <Text className="font-playfair text-xl text-primary font-bold mb-3">Today's Outfit</Text>
      <TouchableOpacity
        onPress={() => router.push(`/outfit/${featured.id}`)}
        className="bg-surface rounded-2xl border border-gray-100 overflow-hidden mb-3"
      >
        <View className="flex-row">
          {featuredItems.map((item) => (
            <Image
              key={item!.id}
              source={{ uri: item!.imageUrl }}
              className="flex-1 h-36"
              resizeMode="cover"
            />
          ))}
        </View>
        <View className="p-4">
          <View className="flex-row items-center mb-1">
            <Ionicons name="briefcase-outline" size={16} color="#6B6B7B" />
            <Text className="text-textSecondary ml-2">{featured.occasionLabel}</Text>
          </View>
          <Text className="text-primary font-semibold" numberOfLines={2}>
            {featured.reasoning.split('.')[0]}.
          </Text>
          <View className="flex-row items-center mt-3">
            <View className="bg-success/10 px-2 py-1 rounded-md">
              <Text className="text-success text-xs font-semibold">
                {Math.round(featured.confidenceScore * 100)}% match
              </Text>
            </View>
            <Text className="text-accent font-semibold ml-auto">See full look →</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Other occasions */}
      <Text className="font-playfair text-xl text-primary font-bold mb-3 mt-3">
        For your week
      </Text>
      {outfitRecommendations.slice(1).map((o) => (
        <TouchableOpacity
          key={o.id}
          onPress={() => router.push(`/outfit/${o.id}`)}
          className="bg-surface rounded-xl border border-gray-100 p-4 mb-3 flex-row items-center"
        >
          <View className="w-10 h-10 rounded-full bg-accent/20 items-center justify-center mr-3">
            <Ionicons name="calendar-outline" size={20} color="#E8B86D" />
          </View>
          <View className="flex-1">
            <Text className="text-primary font-semibold">{o.occasionLabel}</Text>
            <Text className="text-textSecondary text-xs">
              {Math.round(o.confidenceScore * 100)}% match · tap to view
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#9A9AAB" />
        </TouchableOpacity>
      ))}

      {/* Quick action */}
      <TouchableOpacity
        onPress={() => router.push('/add-item')}
        className="bg-primary py-4 rounded-xl items-center mt-3 flex-row justify-center"
      >
        <Ionicons name="add-circle-outline" size={20} color="#fff" style={{ marginRight: 8 }} />
        <Text className="text-white font-semibold text-base">Add wardrobe item</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
