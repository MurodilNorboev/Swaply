import {colors, spacing} from '../../theme';
import {Pressable, TextStyle, View, ViewStyle} from 'react-native';
// import DatePicker from 'react-native-date-picker';
import {Text} from '../text';
// import {formatDate} from 'date-fns';
import IonIcons from 'react-native-vector-icons/Ionicons';


type DatePickerProps = {
  showDatePicker: boolean;
  modalStyles?: ViewStyle;
  value?: Date;
  onCancel: () => void;
  onConfirm: (arg: Date) => void;
};

export const DatePickerComponent = ({
  onCancel,
  onConfirm,
  value,
  showDatePicker,
}: DatePickerProps) => {
  return (
    <>
      {/* <DatePicker
        modal
        date={value || new Date()}
        open={showDatePicker}
        mode={'date'}
        onCancel={onCancel}
        onConfirm={onConfirm}
      /> */}
    </>
  );
};

type DatePickerTriggerProps = {
  onPress: () => void;
  onClear: () => void;
  dateString: Date | string | undefined;
  label?: string;
  error?: string | undefined;
  required?: boolean;
};

export const DatePickerTrigger = ({
  onPress,
  onClear,
  dateString,
  label,
  error,
  required,
}: DatePickerTriggerProps) => {
  return (
    <View style={{flex: 1}}>
      {label && (
        <View style={$labelWrapper}>
          <Text preset="secondaryText" weight="semiBold" style={$label}>
            {label}
          </Text>
          {required && (
            <Text
              preset="secondaryText"
              weight="semiBold"
              text="*"
              style={$asterisk}
            />
          )}
        </View>
      )}
      <Pressable
        onPress={onPress}
        style={[$datePicker, error ? $errorStyle : {}]}>
        {/* <Text preset={dateString ? 'default' : 'secondaryText'}>
          {dateString ? formatDate(dateString, 'dd.MM.yyyy') : 'DD/MM/YYYY'}
        </Text> */}
        {/* @ts-ignore */}
        <IonIcons
          name="calendar-clear-outline"
          size={20}
          color={colors.black}
        />
      </Pressable>
      {error ? (
        <Text size="xs" preset="secondaryText" style={$dateErrorText}>
          {error}
        </Text>
      ) : null}
    </View>
  );
};

const $datePicker: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderWidth: 1,

  paddingHorizontal: spacing.sm,
  backgroundColor: colors.white,
  height: 55,
  borderRadius: spacing.xs,
  borderColor: colors.commonBorder,
};

const $errorStyle: ViewStyle = {
  borderColor: colors.error,
};

const $label: TextStyle = {
  marginBottom: spacing.xs,
};
const $labelWrapper: ViewStyle = {
  flexDirection: 'row',
};
const $dateErrorText: TextStyle = {
  color: colors.error,
  marginTop: spacing.xs,
};
const $asterisk: TextStyle = {
  color: colors.error,
  marginLeft: spacing.xxs,
  textAlignVertical: 'top',
};
