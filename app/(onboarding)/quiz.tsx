import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { quizQuestions, archetypeForAnswer } from '../../lib/mockData';
import { useAppStore } from '../../lib/store';

export default function QuizScreen() {
  const router = useRouter();
  const setQuizAnswer = useAppStore((s) => s.setQuizAnswer);
  const setArchetype = useAppStore((s) => s.setArchetype);
  const [step, setStep] = useState(0);

  const q = quizQuestions[step];
  const isLast = step === quizQuestions.length - 1;

  const choose = (answer: string) => {
    setQuizAnswer(q.id, answer);
    // The first question reveals the personality archetype (executive/creative/…)
    if (step === 0) setArchetype(archetypeForAnswer(answer));
    if (isLast) {
      router.push('/archetype');
    } else {
      setStep((s) => s + 1);
    }
  };

  return (
    <View className="flex-1 bg-background px-6 pt-20">
      {/* Progress */}
      <View className="flex-row mb-8">
        {quizQuestions.map((_, i) => (
          <View
            key={i}
            className={`flex-1 h-1.5 rounded-full mr-2 ${
              i <= step ? 'bg-accent' : 'bg-gray-200'
            }`}
          />
        ))}
      </View>

      <Text className="text-textSecondary mb-2">
        Question {step + 1} of {quizQuestions.length}
      </Text>
      <Text className="font-playfair text-2xl text-primary font-bold mb-8">
        {q.question}
      </Text>

      {q.options.map((opt) => (
        <TouchableOpacity
          key={opt}
          onPress={() => choose(opt)}
          className="bg-surface border border-gray-200 py-4 px-5 rounded-xl mb-3"
        >
          <Text className="text-primary text-lg">{opt}</Text>
        </TouchableOpacity>
      ))}

      {step > 0 && (
        <TouchableOpacity onPress={() => setStep((s) => s - 1)} className="mt-4">
          <Text className="text-textSecondary text-center">← Back</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
