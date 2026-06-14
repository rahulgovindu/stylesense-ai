import { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// Demo "Add item" flow — simulates camera capture + AI garment tagging.
// In the real app this would call the Vision API + Celery tagging task.
const DEMO_IMAGE =
  'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80';

const DETECTED = {
  category: 'Top',
  subCategory: 'Crew Neck Sweater',
  primaryColour: 'Charcoal',
  pattern: 'Solid',
  fabric: 'Wool Blend',
  formality: 'Smart casual',
};

type Phase = 'capture' | 'tagging' | 'review';

export default function AddItemScreen() {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>('capture');

  const startTagging = () => {
    setPhase('tagging');
    // Fake the AI processing delay
    setTimeout(() => setPhase('review'), 1800);
  };

  return (
    <View className="flex-1 bg-background p-6">
      {phase === 'capture' && (
        <View className="flex-1 justify-center items-center">
          <View className="w-full h-72 rounded-2xl border-2 border-dashed border-gray-300 bg-surface items-center justify-center mb-6">
            <Ionicons name="camera-outline" size={56} color="#9A9AAB" />
            <Text className="text-textSecondary mt-3">Snap or upload a garment</Text>
          </View>
          <TouchableOpacity
            onPress={startTagging}
            className="w-full bg-primary py-4 rounded-xl items-center mb-3 flex-row justify-center"
          >
            <Ionicons name="camera" size={20} color="#fff" style={{ marginRight: 8 }} />
            <Text className="text-white font-semibold text-base">Use demo photo</Text>
          </TouchableOpacity>
          <Text className="text-textSecondary text-xs text-center">
            Demo · uses a sample image instead of your camera
          </Text>
        </View>
      )}

      {phase === 'tagging' && (
        <View className="flex-1 justify-center items-center">
          <Image source={{ uri: DEMO_IMAGE }} className="w-48 h-48 rounded-2xl mb-6" resizeMode="cover" />
          <ActivityIndicator size="large" color="#E8B86D" />
          <Text className="text-primary font-semibold mt-4">AI is tagging your item…</Text>
          <Text className="text-textSecondary text-sm mt-1">
            Detecting category, colour & fabric
          </Text>
        </View>
      )}

      {phase === 'review' && (
        <View className="flex-1">
          <Image source={{ uri: DEMO_IMAGE }} className="w-full h-56 rounded-2xl mb-4" resizeMode="cover" />
          <View className="flex-row items-center mb-3">
            <Ionicons name="sparkles" size={18} color="#E8B86D" />
            <Text className="text-primary font-semibold ml-2">AI detected</Text>
          </View>
          <View className="bg-surface rounded-2xl border border-gray-100 p-4 mb-6">
            {Object.entries(DETECTED).map(([k, v]) => (
              <View key={k} className="flex-row justify-between py-2 border-b border-gray-100">
                <Text className="text-textSecondary capitalize">
                  {k.replace(/([A-Z])/g, ' $1')}
                </Text>
                <Text className="text-primary font-medium">{v}</Text>
              </View>
            ))}
          </View>
          <TouchableOpacity
            onPress={() => router.replace('/(tabs)/wardrobe')}
            className="w-full bg-accent py-4 rounded-xl items-center"
          >
            <Text className="text-primary font-bold text-base">Save to wardrobe</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setPhase('capture')} className="py-4 items-center">
            <Text className="text-textSecondary">Retake</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
