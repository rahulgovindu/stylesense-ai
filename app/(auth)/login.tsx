import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useAppStore } from '../../lib/store';

export default function LoginScreen() {
  const router = useRouter();
  const signIn = useAppStore((s) => s.signIn);

  const handleSignIn = () => {
    signIn();
    router.replace('/welcome');
  };

  return (
    <View className="flex-1 bg-background justify-center items-center px-6">
      <View className="w-16 h-16 rounded-2xl bg-primary items-center justify-center mb-6">
        <Ionicons name="sparkles" size={30} color="#E8B86D" />
      </View>
      <Text className="font-playfair text-4xl text-primary font-bold mb-2">StyleSense AI</Text>
      <Text className="text-textSecondary mb-1 text-center">
        India's first personality-driven{'\n'}AI personal stylist.
      </Text>
      <Text className="text-textSecondary text-xs mb-10 text-center">
        Built for young professionals, 22–32.
      </Text>

      <TouchableOpacity
        onPress={handleSignIn}
        className="w-full bg-surface border border-gray-300 py-4 rounded-xl flex-row justify-center items-center mb-4"
      >
        <Ionicons name="logo-google" size={20} color="#1A1A2E" style={{ marginRight: 10 }} />
        <Text className="text-primary font-semibold text-lg">Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleSignIn}
        className="w-full bg-primary py-4 rounded-xl flex-row justify-center items-center"
      >
        <Text className="text-white font-semibold text-lg">Continue with Email</Text>
      </TouchableOpacity>

      <Text className="text-textSecondary text-xs mt-8 text-center">
        Demo mode · no account required{'\n'}Tap any button to continue
      </Text>
    </View>
  );
}
