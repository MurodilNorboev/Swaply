import Svg, { Polygon, SvgProps } from 'react-native-svg';

export const BackIcon = (props: SvgProps) => {
  return (
    <Svg
      width={24}       
      height={24}      
      viewBox="0 0 512 512"
      fill="none"
      {...props}
    >
      <Polygon
        points="352,128.4 319.7,96 160,256 319.7,416 352,383.6 224.7,256"
        fill={props.fill || "#000"} // rangni props orqali berish mumkin
      />
    </Svg>
  );
};
