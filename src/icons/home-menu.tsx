import Svg, { Path, SvgProps } from 'react-native-svg';

export const HomeMenuIcon = (props: SvgProps) => {
  return (
    <Svg
      viewBox="0 0 512 512"
      width={35}
      height={35}
      fill={props.color || 'black'}
      {...props}
    >
      <Path d="M441.13,166.52h-372a15,15,0,1,1,0-30h372a15,15,0,0,1,0,30Z" />
      <Path d="M441.13,279.72h-372a15,15,0,1,1,0-30h372a15,15,0,0,1,0,30Z" />
      <Path d="M441.13,392.92h-372a15,15,0,1,1,0-30h372a15,15,0,0,1,0,30Z" />
    </Svg>
  );
};
