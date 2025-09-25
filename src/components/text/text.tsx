import React, { JSX } from 'react';
import {
  StyleProp,
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';
import {colors, typography} from '../../theme';

type Sizes = keyof typeof $sizeStyles;
type Weights = keyof typeof typography.fonts.inter &
  keyof typeof typography.fonts.syne;
type Presets = keyof typeof $presets;

export interface TextProps extends RNTextProps {
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string;
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  style?: StyleProp<TextStyle>;
  /**
   * One of the different types of text presets.
   */
  preset?: Presets;
  /**
   * Text weight modifier.
   */
  weight?: Weights;
  /**
   * Text size modifier.
   */
  size?: Sizes;
  /**
   * Children components.
   */
  fontFamily?: keyof typeof typography.fonts;

  children?: React.ReactNode;
}

/**
 * For your text displaying needs.
 * This component is a HOC over the built-in React Native one.
 * @see [Documentation and Examples]{@link https://docs.infinite.red/ignite-cli/boilerplate/components/Text/}
 * @param {TextProps} props - The props for the `Text` component.
 */
export function Text(props: TextProps): JSX.Element {
  const {weight, size, text, children, style: $styleOverride, ...rest} = props;

  const content = text || children;

  const preset: Presets = props.preset ?? 'default';
  const $styles: StyleProp<TextStyle> = [
    $presets[preset],
    weight && getFontWeightStyles(props.fontFamily ?? 'inter')[weight],
    size && $sizeStyles[size],
    $styleOverride,
  ];

  return (
    <RNText {...rest} style={$styles}>
      {content}
    </RNText>
  );
}

const $sizeStyles = {
  xxl: {fontSize: 36, lineHeight: 44} satisfies TextStyle,
  xl: {fontSize: 24, lineHeight: 34} satisfies TextStyle,
  lg: {fontSize: 20, lineHeight: 32} satisfies TextStyle,
  md: {fontSize: 18, lineHeight: 26} satisfies TextStyle,
  sm: {fontSize: 16, lineHeight: 24} satisfies TextStyle,
  xs: {fontSize: 14, lineHeight: 21} satisfies TextStyle,
  xxs: {fontSize: 12, lineHeight: 18} satisfies TextStyle,
};

const getFontWeightStyles = (fontFamily: keyof typeof typography.fonts) =>
  Object.entries(typography.fonts[fontFamily]).reduce(
    (acc, [weight, fontFamily]) => {
      return {...acc, [weight]: {fontFamily}};
    },
    {},
  ) as Record<Weights, TextStyle>;

const $baseStyle: StyleProp<TextStyle> = [
  $sizeStyles.sm,
  getFontWeightStyles('inter')['normal'],
  {color: colors.text},
];

const $presets = {
  default: $baseStyle,

  bold: [$baseStyle, getFontWeightStyles('inter').bold] as StyleProp<TextStyle>,
  secondaryText: [$baseStyle, {color: colors.textDim}] as StyleProp<TextStyle>,
  //   heading: [
  //     $baseStyle,
  //     $sizeStyles.xxl,
  //     getFontWeightStyles.bold,
  //   ] as StyleProp<TextStyle>,

  //   subheading: [
  //     $baseStyle,
  //     $sizeStyles.lg,
  //     getFontWeightStyles.medium,
  //   ] as StyleProp<TextStyle>,

  //   formLabel: [$baseStyle, getFontWeightStyles.medium] as StyleProp<TextStyle>,

  //   formHelper: [
  //     $baseStyle,
  //     $sizeStyles.sm,
  //     getFontWeightStyles.normal,
  //   ] as StyleProp<TextStyle>,
};
