import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useAppStore } from '../../lib/store';
import { getArchetype } from '../../lib/mockData';

export default function ArchetypeRevealScreen() {
  const router = useRouter();
  const archetypeKey = useAppStore((s) => s.archetypeKey);
  const a = getArchetype(archetypeKey);

  return (
    <ScrollView
      className="flex-1 bg-primary"
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 24 }}
    >
      <Text className="text-gray-400 text-center mb-2">Your style personality</Text>
      <Text className="text-7xl text-center mb-2">{a.emoji}</Text>
      <Text className="font-playfair text-4xl text-accent font-bold text-center">{a.name}</Text>
      <Text className="text-gray-300 text-center text-base mt-2 mb-6">{a.tagline}</Text>

      <View className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-5">
        <Text className="text-gray-200 leading-6">{a.description}</Text>
      </View>

      <Text className="text-gray-400 mb-2">Your colour palette</Text>
      <View className="flex-row flex-wrap mb-2">
        {a.palette.map((c) => (
          <View key={c} className="bg-accent/20 px-3 py-1.5 rounded-full mr-2 mb-2">
            <Text className="text-accent">{c}</Text>
          </View>
        ))}
      </View>

      <Text className="text-gray-400 text-sm mt-4 mb-8">
        Every recommendation you get is written in the voice of {a.name} — matched to the
        exact occasion. That combination is what makes StyleSense different.
      </Text>

      <TouchableOpacity
        onPress={() => router.push('/profile-setup')}
        className="w-full bg-accent py-4 rounded-xl items-center"
      >
        <Text className="text-primary font-bold text-lg">Continue →</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
