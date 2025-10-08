import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

export const PlanetIcon = ({ stroke, fill, ...props }: SvgProps) => {
  return (
    <Svg
      width="24"
      height="23"
      viewBox="0 0 24 23"
      fill="none"
      stroke={fill || '#6E767B'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <Path d="m2 2 20 20" />
      <Path d="M8.35 2.69A10 10 0 0 1 21.3 15.65" />
      <Path d="M19.08 19.08A10 10 0 1 1 4.92 4.92" />
    </Svg>
  );
};
