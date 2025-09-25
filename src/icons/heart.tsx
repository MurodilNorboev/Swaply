import Svg, {Path, SvgProps} from 'react-native-svg';

export const HeartIcon = ({fill, ...props}: SvgProps) => {
  return (
    <Svg width="22" height="20" viewBox="0 0 22 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z"
        stroke={fill || '#2F2D2C'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
