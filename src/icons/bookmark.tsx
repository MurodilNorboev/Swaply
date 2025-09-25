import Svg, {Path, SvgProps} from 'react-native-svg';

export const BookmarkIcon = ({fill, stroke, ...props}: SvgProps) => {
  return (
    <Svg width="18" height="21" viewBox="0 0 18 21" fill="none">
      <Path
        d="M14.593 1.82255C15.693 1.95055 16.5 2.89955 16.5 4.00755V19.5005L9 15.7505L1.5 19.5005V4.00755C1.5 2.89955 2.306 1.95055 3.407 1.82255C7.12319 1.39118 10.8768 1.39118 14.593 1.82255Z"
        stroke={fill || '#6E767B'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
