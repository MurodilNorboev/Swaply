import React, { useRef, useState, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Animated,
  Easing,
} from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../navigators';
import * as sty from './styles_mock';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const OnboardingScreen = ({
  navigation,
}: NativeStackScreenProps<AppStackParamList>) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<any>>(null);
  const strokeAnim = useRef(new Animated.Value(0)).current;

  // Skroll bilan indexni aniqlash
  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const newIndex = Math.round(
        event.nativeEvent.contentOffset.x / sty.width,
      );
      if (newIndex !== currentIndex) setCurrentIndex(newIndex);
    },
    [currentIndex],
  );

  // Progress animation
  useEffect(() => {
    const fill =
      ((currentIndex + 1) / sty.carouselData.length) * sty.CIRCUMFERENCE;
    Animated.timing(strokeAnim, {
      toValue: fill,
      duration: 400,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < sty.carouselData.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      navigation.replace('Login');
    }
  };

  const handleSkip = () => navigation.replace('Login');

  const renderDots = () => (
    <View style={sty.styles.dotsContainer}>
      {sty.carouselData.map((_, index) => (
        <View
          key={index}
          style={[
            sty.styles.dot,
            index === currentIndex
              ? sty.styles.activeDot
              : sty.styles.inactiveDot,
          ]}
        />
      ))}
    </View>
  );

  return (
    <View style={sty.styles.container}>
      <FlatList
        ref={flatListRef}
        data={sty.carouselData}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        onScroll={handleScroll}
        renderItem={({ item }) => (
          <View style={sty.styles.carouselItem}>
            <View style={sty.styles.imageWrapper}>
              <Image source={item.image} style={sty.styles.image} />
            </View>
            <Text style={sty.styles.title}>{item.title}</Text>
            <Text style={sty.styles.description}>{item.description}</Text>
          </View>
        )}
      />

      {/* Skip va dots */}
      <View style={sty.styles.skipTextWrap}>
        {currentIndex !== sty.carouselData.length - 1 && (
          <Pressable onPress={handleSkip}>
            <Text style={sty.styles.skipText}>Skip</Text>
          </Pressable>
        )}
      </View>

      {/* Dots */}
      <View style={sty.styles.dotsWrapper}>{renderDots()}</View>

      {/* Button va progress circle */}
      <View style={sty.styles.buttonsContainer}>
        <Pressable style={sty.styles.nextButtonWrapper} onPress={handleNext}>
          <Svg
            height={sty.SVG_SIZE}
            width={sty.SVG_SIZE}
            style={sty.styles.svg}
          >
            <Circle
              stroke="#E0E0E0"
              fill="none"
              cx={sty.SVG_SIZE / 2}
              cy={sty.SVG_SIZE / 2}
              r={sty.RADIUS}
              strokeWidth={sty.STROKE_WIDTH}
            />
            <AnimatedCircle
              stroke="#3BA55C"
              fill="none"
              cx={sty.SVG_SIZE / 2}
              cy={sty.SVG_SIZE / 2}
              r={sty.RADIUS}
              strokeWidth={sty.STROKE_WIDTH}
              strokeDasharray={sty.CIRCUMFERENCE}
              strokeDashoffset={strokeAnim.interpolate({
                inputRange: [0, sty.CIRCUMFERENCE],
                outputRange: [sty.CIRCUMFERENCE, 0],
              })}
              strokeLinecap="round"
              transform={`rotate(-90, ${sty.SVG_SIZE / 2}, ${
                sty.SVG_SIZE / 2
              })`}
            />
          </Svg>

          <View style={sty.styles.nextButtonContent}>
            <View style={sty.styles.arrowrapper}>
              <View style={sty.styles.wrap}>
                <Text style={sty.styles.arrowText}>→</Text>
              </View>
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
};
