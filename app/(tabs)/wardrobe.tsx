import { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { wardrobeItems } from '../../lib/mockData';

const CATEGORIES = ['All', 'Top', 'Bottom', 'Outerwear', 'Ethnic', 'Footwear'];

export default function WardrobeScreen() {
  const router = useRouter();
  const [filter, setFilter] = useState('All');

  const items =
    filter === 'All' ? wardrobeItems : wardrobeItems.filter((i) => i.category === filter);

  return (
    <View className="flex-1 bg-background">
      {/* Filter chips */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 12 }}
      >
        {CATEGORIES.map((cat) => {
          const active = filter === cat;
          return (
            <TouchableOpacity
              key={cat}
              onPress={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full mr-2 border ${
                active ? 'bg-primary border-primary' : 'bg-surface border-gray-300'
              }`}
            >
              <Text className={active ? 'text-white' : 'text-primary'}>{cat}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <ScrollView contentContainerStyle={{ padding: 16, paddingTop: 4 }}>
        <Text className="text-textSecondary mb-3">{items.length} items</Text>
        <View className="flex-row flex-wrap justify-between">
          {items.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => router.push(`/item/${item.id}`)}
              className="bg-surface rounded-2xl border border-gray-100 mb-4 overflow-hidden"
              style={{ width: '48%' }}
            >
              <View>
                <Image source={{ uri: item.imageUrl }} className="w-full h-40" resizeMode="cover" />
                {item.isFavourite && (
                  <View className="absolute top-2 right-2 bg-white/90 rounded-full p-1.5">
                    <Ionicons name="heart" size={14} color="#C4392B" />
                  </View>
                )}
              </View>
              <View className="p-3">
                <Text className="text-primary font-semibold" numberOfLines={1}>
                  {item.subCategory}
                </Text>
                <Text className="text-textSecondary text-xs">
                  {item.primaryColour} · {item.brand}
                </Text>
                <Text className="text-textSecondary text-xs mt-1">
                  Worn {item.timesWorn}×
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Floating add button */}
      <TouchableOpacity
        onPress={() => router.push('/add-item')}
        className="absolute bottom-6 right-6 bg-accent w-14 h-14 rounded-full items-center justify-center shadow-lg"
      >
        <Ionicons name="add" size={30} color="#1A1A2E" />
      </TouchableOpacity>
    </View>
  );
}
