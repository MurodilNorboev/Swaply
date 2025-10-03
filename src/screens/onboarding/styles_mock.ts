import { Dimensions, StyleSheet } from 'react-native';
import { typography } from '../../theme';

export const { width } = Dimensions.get('screen');
export const CIRCLE_SIZE = 100;
export const SVG_SIZE = 100;
export const STROKE_WIDTH = 3;
export const RADIUS = (CIRCLE_SIZE - STROKE_WIDTH) / 2;
export const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F9F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselItem: { width, alignItems: 'center', paddingTop: 80 },
  imageWrapper: {
    width: 267,
    height: 412,
    borderRadius: 16,
    overflow: 'hidden',
  },
  image: { width: '100%', height: '100%', resizeMode: 'cover' },
  title: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 24,
    color: '#1C3F2D',
    fontFamily: typography.fonts.syne.Jostthin,
  },
  description: {
    textAlign: 'center',
    marginTop: 12,
    color: '#5B5B5B',
    paddingHorizontal: 24,
    fontSize: 16,
    fontFamily: typography.fonts.syne.Jostregular,
  },
  dotsContainer: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  dotsWrapper: {
    position: 'relative',
    width: '100%',
    bottom: '20%',
  },
  dot: { width: 8, height: 8, borderRadius: 4, marginHorizontal: 4 },
  activeDot: { backgroundColor: '#3BA55C' },
  inactiveDot: { backgroundColor: '#D1D1D1' },
  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    height: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  skipText: { color: '#000000', fontSize: 16 },
  skipTextWrap: {
    position: 'absolute',
    top: 50,
    right: 20,
    padding: 10,
    backgroundColor: 'transparent',
  },
  nextButtonWrapper: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 3,
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  svg: {
    position: 'absolute',
  },
  nextButtonContent: {
    backgroundColor: '#0D775E',
    borderRadius: CIRCLE_SIZE / 3,
    width: CIRCLE_SIZE - STROKE_WIDTH * 20,
    height: CIRCLE_SIZE - STROKE_WIDTH * 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowrapper: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 3,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrap: {
    backgroundColor: '#0D775E',
    borderRadius: CIRCLE_SIZE / 2,
    height: 75,
    width: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowText: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export const carouselData = [
  {
    id: '1',
    title: 'Elevating Your Life with\nIndoor Plants',
    image: require('../../../assets/images/onboarding-1.webp'),
    description:
      'Plants make your life with minimal and happy \n love the plants more and enjoy life',
  },
  {
    id: '2',
    title: 'Elevating Coffee Culture',
    image: require('../../../assets/images/onboarding-2.webp'),
    description:
      "Whether you're a fan of classic espresso, creamy lattes, or adventurous with our special blends.",
  },
  {
    id: '3',
    title: 'Brewing Happiness',
    image: require('../../../assets/images/onboarding-3.webp'),
    description:
      "Whether you're a fan of classic espresso, creamy lattes, or adventurous with our special blends.",
  },
];
