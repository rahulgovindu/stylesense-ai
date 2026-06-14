import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-primary justify-center items-center px-6">
      <Text className="text-accent text-6xl mb-4">✨</Text>
      <Text className="font-playfair text-4xl text-accent font-bold mb-6 text-center">
        Welcome to{'\n'}StyleSense
      </Text>
      <Text className="text-gray-300 mb-2 text-center text-lg">
        Let's build your style profile to give you the best recommendations.
      </Text>
      <Text className="text-gray-400 mb-10 text-center text-sm">
        Takes about 60 seconds.
      </Text>

      <TouchableOpacity
        onPress={() => router.push('/quiz')}
        className="w-full bg-accent py-4 rounded-xl flex-row justify-center items-center"
      >
        <Text className="text-primary font-bold text-lg">Start Style Quiz →</Text>
      </TouchableOpacity>
    </View>
  );
}
