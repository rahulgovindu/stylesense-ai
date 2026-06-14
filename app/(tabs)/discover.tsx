import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { trends, influencers, socialConnections } from '../../lib/mockData';

export default function DiscoverScreen() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ padding: 20 }}>
      {/* Connected social sources */}
      <Text className="font-playfair text-xl text-primary font-bold mb-3">Your style sources</Text>
      <View className="flex-row mb-6">
        {socialConnections.map((s) => (
          <View
            key={s.key}
            className="flex-1 bg-surface rounded-2xl border border-gray-100 p-3 mr-2 items-center"
          >
            <Ionicons name={s.icon as any} size={22} color="#1A1A2E" />
            <Text className="text-primary text-xs font-semibold mt-1 text-center">{s.label}</Text>
            <Text className="text-success text-[10px] mt-0.5">● synced</Text>
          </View>
        ))}
      </View>

      {/* Trends filtered through personal profile */}
      <Text className="font-playfair text-xl text-primary font-bold mb-1">Trends for you</Text>
      <Text className="text-textSecondary text-sm mb-3">
        Current trends filtered through your profile — not generic trend-chasing.
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
        {trends.map((t) => (
          <View key={t.id} className="bg-surface rounded-2xl border border-gray-100 mr-3 overflow-hidden" style={{ width: 220 }}>
            <Image source={{ uri: t.image }} className="w-full h-32" resizeMode="cover" />
            <View className="p-3">
              <Text className="text-accent text-[11px] font-semibold mb-0.5">{t.tag}</Text>
              <Text className="text-primary font-semibold">{t.title}</Text>
              <Text className="text-textSecondary text-xs mt-1">{t.note}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Influencer inspiration matched to body type + aesthetic */}
      <Text className="font-playfair text-xl text-primary font-bold mb-1">Style twins</Text>
      <Text className="text-textSecondary text-sm mb-3">
        Influencers with a similar body type & aesthetic — adapted to your wardrobe.
      </Text>
      {influencers.map((inf) => (
        <View key={inf.id} className="bg-surface rounded-2xl border border-gray-100 overflow-hidden mb-4">
          <Image source={{ uri: inf.lookImage }} className="w-full h-56" resizeMode="cover" />
          <View className="p-4">
            <View className="flex-row items-center mb-1">
              <View className="w-8 h-8 rounded-full bg-primary items-center justify-center mr-2">
                <Text className="text-accent font-bold">{inf.name.charAt(0)}</Text>
              </View>
              <View className="flex-1">
                <Text className="text-primary font-semibold">{inf.name}</Text>
                <Text className="text-textSecondary text-xs">{inf.handle}</Text>
              </View>
              <View className="bg-accent/20 px-2 py-1 rounded-md">
                <Text className="text-primary text-[10px]">{inf.matchReason}</Text>
              </View>
            </View>
            <View className="flex-row items-start mt-2 bg-accent/10 rounded-xl p-3">
              <Ionicons name="sparkles" size={16} color="#E8B86D" style={{ marginTop: 1 }} />
              <Text className="text-textPrimary text-sm ml-2 flex-1">{inf.adaptNote}</Text>
            </View>
          </View>
        </View>
      ))}

      <Text className="text-textSecondary text-xs text-center mt-1 mb-2">
        Demo · social & influencer data is illustrative
      </Text>
    </ScrollView>
  );
}
