import {colors, spacing} from '../../theme';
import {PropsWithChildren} from 'react';
import {Pressable, TextStyle, View, ViewStyle} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {Text} from '../text';

type SelectTriggerProps = {
  style?: ViewStyle;
  onSelectPress: () => void;
  label?: string;
} & PropsWithChildren;

export const SelectTrigger = ({
  children,
  style,
  label,
  onSelectPress,
}: SelectTriggerProps) => {
  return (
    <View>
      {label && (
        <Text weight="semiBold" style={$label}>
          {label}
        </Text>
      )}
      <Pressable style={[$trigger, style]} onPress={onSelectPress}>
        {children}
        <View>
          {/* @ts-ignore */}
          <IonIcons name="chevron-down" size={20} color={colors.commonBorder} />
        </View>
      </Pressable>
    </View>
  );
};
const $trigger: ViewStyle = {
  borderWidth: 1,
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
  borderColor: colors.commonBorder,
  borderRadius: spacing.xs,
  padding: spacing.xs,
};

const $label: TextStyle = {
  color: colors.textDim,
  marginBottom: spacing.sm,
};
