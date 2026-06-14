import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useAppStore } from '../../lib/store';

const GENDERS = ['Male', 'Female', 'Non-binary'];
const BODY_TYPES = ['Slim', 'Athletic', 'Average', 'Broad'];
const SKIN_TONES = ['Fair', 'Wheatish', 'Dusky', 'Deep'];
const HAIR = ['Short', 'Medium', 'Long', 'Bald'];
const HEIGHTS = ['<160cm', '160–175cm', '175–185cm', '>185cm'];
const CITIES = ['Bengaluru', 'Mumbai', 'Delhi', 'Hyderabad'];

function Chips({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <View className="mb-6">
      <Text className="text-primary font-semibold mb-3">{label}</Text>
      <View className="flex-row flex-wrap">
        {options.map((opt) => {
          const active = value === opt;
          return (
            <TouchableOpacity
              key={opt}
              onPress={() => onChange(opt)}
              className={`px-4 py-2 rounded-full mr-2 mb-2 border ${
                active ? 'bg-primary border-primary' : 'bg-surface border-gray-300'
              }`}
            >
              <Text className={active ? 'text-white' : 'text-primary'}>{opt}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export default function ProfileSetupScreen() {
  const router = useRouter();
  const completeOnboarding = useAppStore((s) => s.completeOnboarding);

  const [gender, setGender] = useState('Male');
  const [bodyType, setBodyType] = useState('Athletic');
  const [skinTone, setSkinTone] = useState('Wheatish');
  const [hair, setHair] = useState('Short');
  const [height, setHeight] = useState('175–185cm');
  const [city, setCity] = useState('Bengaluru');

  const finish = () => {
    completeOnboarding();
    router.replace('/(tabs)');
  };

  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ padding: 24, paddingTop: 80 }}>
      <Text className="font-playfair text-3xl text-primary font-bold mb-2">Almost there</Text>
      <Text className="text-textSecondary mb-8">
        A few details so recommendations actually fit you.
      </Text>

      <Chips label="Gender" options={GENDERS} value={gender} onChange={setGender} />
      <Chips label="Body type" options={BODY_TYPES} value={bodyType} onChange={setBodyType} />
      <Chips label="Skin tone" options={SKIN_TONES} value={skinTone} onChange={setSkinTone} />
      <Chips label="Hair" options={HAIR} value={hair} onChange={setHair} />
      <Chips label="Height" options={HEIGHTS} value={height} onChange={setHeight} />
      <Chips label="Your city (for weather)" options={CITIES} value={city} onChange={setCity} />

      <TouchableOpacity
        onPress={finish}
        className="w-full bg-accent py-4 rounded-xl items-center mt-4"
      >
        <Text className="text-primary font-bold text-lg">Build my wardrobe →</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
