import { Text } from '../components';
import { colors } from '../theme';
import * as styles from './style';

/** Render Tab Icon **/
type LabelPosition = {
  bottom: number;
  left: number;
  right: number;
  top: number;
};
export const renderTabBarIcon = (Icon: React.ElementType, focused: boolean) => {
  return (
    <Icon fill={focused ? colors.tabBarFocused : colors.tabBarUnfocused} />
  );
};

/** Render Tab label **/
type TabLabelProps = {
  focused: boolean;
  children: string;
  position: LabelPosition;
  color: string;
};
export const renderTabBarLabel = ({ children, focused }: TabLabelProps) => {
  return (
    <Text
      weight={focused ? 'medium' : 'normal'}
      size="xxs"
      style={[styles.$tabLabel, focused && styles.$focused]}
      text={children}
    />
  );
};
