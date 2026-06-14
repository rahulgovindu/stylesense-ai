import { View, Text, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { wardrobeAnalysis } from '../../lib/mockData';

export default function AnalysisScreen() {
  const a = wardrobeAnalysis;

  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ padding: 20 }}>
      {/* Score header */}
      <View className="bg-primary rounded-2xl p-6 items-center mb-6">
        <Text className="text-gray-300">Overall Wardrobe Grade</Text>
        <Text className="text-accent text-6xl font-bold my-2">{a.overallGrade}</Text>
        <View className="w-full h-2 bg-gray-700 rounded-full mt-2 overflow-hidden">
          <View className="h-2 bg-accent rounded-full" style={{ width: `${a.overallScore}%` }} />
        </View>
        <Text className="text-gray-400 text-xs mt-2">
          {a.overallScore}/100 · {a.totalItemsAnalysed} items analysed
        </Text>
      </View>

      <Text className="text-textPrimary leading-6 mb-6">{a.analysisText}</Text>

      {/* Strengths */}
      <Text className="font-playfair text-xl text-primary font-bold mb-3">What's working</Text>
      {a.strengths.map((s, i) => (
        <View key={i} className="flex-row items-start mb-2">
          <Ionicons name="checkmark-circle" size={20} color="#2D6A4F" style={{ marginTop: 1 }} />
          <Text className="text-textPrimary ml-2 flex-1">{s}</Text>
        </View>
      ))}

      {/* Weaknesses */}
      <Text className="font-playfair text-xl text-primary font-bold mb-3 mt-6">
        Opportunities
      </Text>
      {a.weaknesses.map((w, i) => (
        <View key={i} className="flex-row items-start mb-2">
          <Ionicons name="alert-circle" size={20} color="#E8B86D" style={{ marginTop: 1 }} />
          <Text className="text-textPrimary ml-2 flex-1">{w}</Text>
        </View>
      ))}

      {/* Gap items / shopping */}
      <Text className="font-playfair text-xl text-primary font-bold mb-1 mt-6">
        Fill the gaps
      </Text>
      <Text className="text-textSecondary text-sm mb-4">
        Suggested additions to round out your wardrobe.
      </Text>
      {a.gapItems.map((g) => (
        <View
          key={g.id}
          className="bg-surface rounded-2xl border border-gray-100 p-3 mb-3 flex-row items-center"
        >
          <Image source={{ uri: g.imageUrl }} className="w-20 h-20 rounded-xl" resizeMode="cover" />
          <View className="flex-1 ml-3">
            <Text className="text-primary font-semibold">{g.name}</Text>
            <Text className="text-textSecondary text-xs mb-1" numberOfLines={2}>
              {g.reason}
            </Text>
            <Text className="text-primary font-bold">₹{g.priceInr.toLocaleString('en-IN')}</Text>
          </View>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.myntra.com')}
            className="bg-accent px-3 py-2 rounded-lg"
          >
            <Text className="text-primary font-semibold text-xs">{g.platform}</Text>
          </TouchableOpacity>
        </View>
      ))}

      <Text className="text-textSecondary text-xs text-center mt-2 mb-4">
        Demo · shopping links are illustrative (affiliate placeholders)
      </Text>
    </ScrollView>
  );
}
