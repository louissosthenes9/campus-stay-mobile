import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  withSequence,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  // Animation values for typewriter effect
  const titleText = 'CampuStay'.split('');
  const charOpacities = titleText.map(() => useSharedValue(0));
  const charScales = titleText.map(() => useSharedValue(0.8));
  const cursorOpacity = useSharedValue(1);

  // Animation values for tagline
  const taglineOpacity = useSharedValue(0);
  const taglineTranslateY = useSharedValue(20);

  // Animation values for final fade-out
  const containerOpacity = useSharedValue(1);

  // Animated styles
  const cursorStyle = useAnimatedStyle(() => ({
    opacity: cursorOpacity.value,
  }));

  const containerStyle = useAnimatedStyle(() => ({
    opacity: containerOpacity.value,
  }));

  const taglineStyle = useAnimatedStyle(() => ({
    opacity: taglineOpacity.value,
    transform: [{ translateY: taglineTranslateY.value }],
  }));

  useEffect(() => {
    // Typewriter effect for CampuStay
    titleText.forEach((_, index) => {
      charOpacities[index].value = withDelay(
        index * 200,
        withTiming(1, { duration: 200 })
      );
      charScales[index].value = withDelay(
        index * 200,
        withSequence(
          withTiming(1.2, { duration: 100 }),
          withTiming(1, { duration: 100 })
        )
      );
    });

    // Cursor blink and fade
    cursorOpacity.value = withSequence(
      ...Array(9).fill(withTiming(0, { duration: 200 }, () => {
        cursorOpacity.value = withTiming(1, { duration: 200 });
      })),
      withTiming(0, { duration: 200 }) // Final fade-out
    );

    // Tagline animation (starts after typewriter)
    taglineOpacity.value = withDelay(
      2000,
      withTiming(1, { duration: 600 })
    );
    taglineTranslateY.value = withDelay(
      2000,
      withSpring(0, { damping: 15, stiffness: 100 })
    );

    // Final fade-out and onComplete
    containerOpacity.value = withDelay(
      2800,
      withTiming(0, { duration: 700 }, (finished) => {
        if (finished) {
          runOnJS(onComplete)();
        }
      })
    );
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-gradient-to-b from-indigo-600 to-purple-700">
      <Animated.View className="p-5" style={containerStyle}>
        <View className="flex-row items-center">
          {titleText.map((char, index) => {
            const charStyle = useAnimatedStyle(() => ({
              opacity: charOpacities[index].value,
              transform: [{ scale: charScales[index].value }],
            }));
            return (
              <Animated.Text
                key={index}
                className="text-5xl font-bold text-white"
                style={charStyle}
              >
                {char}
              </Animated.Text>
            );
          })}
          <Animated.View
            className="w-1 h-8 bg-white/50 ml-1"
            style={cursorStyle}
          />
        </View>
        <Animated.Text
          className="text-xl font-semibold text-white text-center mt-4 shadow-md"
          style={taglineStyle}
        >
          Stay Close, Stay Smart
        </Animated.Text>
      </Animated.View>
    </View>
  );
};