import {
  ComponentType,
  forwardRef,
  Ref,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  Pressable,
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
// import {translate} from '@/i18n';
import {colors, spacing, typography} from '../../theme';
import {Text, TextProps} from '../text';
// import {EyeCloseIcon, EyeOpenIcon} from '@/icons';

export interface TextFieldAccessoryProps {
  style: StyleProp<any>;
  status: TextFieldProps['status'];
  multiline: boolean;
  editable: boolean;
}

export interface TextFieldProps extends Omit<TextInputProps, 'ref'> {
  /**
   * A style modifier for different input states.
   */
  status?: 'error' | 'disabled';
  /**
   * The label text to display if not using `labelTx`.
   */
  label?: TextProps['text'];

  /**
   * Pass any additional props directly to the label Text component.
   */
  LabelTextProps?: TextProps;
  labelWeight?: TextProps['weight'];
  /**
   * The helper text to display if not using `helperTx`.
   */
  helper?: TextProps['text'];

  /**
   * Optional helper options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  /**
   * Pass any additional props directly to the helper Text component.
   */
  HelperTextProps?: TextProps;
  /**
   * The placeholder text to display if not using `placeholderTx`.
   */
  placeholder?: TextProps['text'];

  /**
   * Optional input style override.
   */
  style?: StyleProp<TextStyle>;
  /**
   * Style overrides for the container
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * Style overrides for the input wrapper
   */
  inputWrapperStyle?: StyleProp<ViewStyle>;
  /**
   * An optional component to render on the right side of the input.
   * Example: `RightAccessory={(props) => <Icon icon="ladybug" containerStyle={props.style} color={props.editable ? colors.textDim : colors.text} />}`
   * Note: It is a good idea to memoize this.
   */
  RightAccessory?: ComponentType<TextFieldAccessoryProps>;
  /**
   * An optional component to render on the left side of the input.
   * Example: `LeftAccessory={(props) => <Icon icon="ladybug" containerStyle={props.style} color={props.editable ? colors.textDim : colors.text} />}`
   * Note: It is a good idea to memoize this.
   */
  LeftAccessory?: ComponentType<TextFieldAccessoryProps>;
  isPassword?: boolean;
  required?: boolean;
}

/**
 * A component that allows for the entering and editing of text.
 * @see [Documentation and Examples]{@link https://docs.infinite.red/ignite-cli/boilerplate/components/TextField/}
 * @param {TextFieldProps} props - The props for the `TextField` component.
 * @returns {JSX.Element} The rendered `TextField` component.
 */
export const TextField = forwardRef(function TextField(
  props: TextFieldProps,
  ref: Ref<TextInput>,
) {
  const {
    label,
    placeholder,
    helper,
    status,
    RightAccessory,
    LeftAccessory,
    HelperTextProps,
    LabelTextProps,
    style: $inputStyleOverride,
    containerStyle: $containerStyleOverride,
    inputWrapperStyle: $inputWrapperStyleOverride,
    labelWeight,
    isPassword,
    required,
    ...TextInputProps
  } = props;
  const input = useRef<TextInput>(null);
  const [isVisible, setIsVisible] = useState(false);

  const disabled = TextInputProps.editable === false || status === 'disabled';

  const placeholderContent = placeholder;

  const $containerStyles = [$containerStyleOverride];

  const $labelStyles = [$labelStyle, LabelTextProps?.style];

  const $inputWrapperStyles = [
    $inputWrapperStyle,
    status === 'error' && {borderColor: colors.error},
    TextInputProps.multiline && {minHeight: 112},
    LeftAccessory && {paddingStart: 0},
    RightAccessory && {paddingEnd: 0},
    isPassword && {paddingEnd: 10, alignItems: 'center'},
    $inputWrapperStyleOverride,
  ];

  const $inputStyles: StyleProp<TextStyle> = [
    $inputStyle,
    disabled && {color: colors.textDim},
    TextInputProps.multiline && {height: '100%'},
    $inputStyleOverride,
  ];

  const $helperStyles = [
    $helperStyle,
    status === 'error' && {color: colors.error},
    HelperTextProps?.style,
  ];

  /**
   *
   */
  function focusInput() {
    if (disabled) return;

    input.current?.focus();
  }

  useImperativeHandle(ref, () => input.current as TextInput);

  // const renderEye = () => {
  //   return (
  //     <Pressable onPress={() => setIsVisible(!isVisible)}>
  //       {isVisible ? (
  //         <EyeOpenIcon stroke={colors.palette.gray200} />
  //       ) : (
  //         <EyeCloseIcon stroke={colors.palette.gray200} />
  //       )}
  //     </Pressable>
  //   );
  // };
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={$containerStyles}
      onPress={focusInput}
      accessibilityState={{disabled}}>
      {!!label && (
        <View style={{flexDirection: 'row'}}>
          <Text
            size="xs"
            fontFamily="syne"
            // preset="formLabel"
            weight={labelWeight ?? 'semiBold'}
            text={label}
            // tx={labelTx}
            // txOptions={labelTxOptions}
            {...LabelTextProps}
            style={$labelStyles}
          />
          {required && (
            <Text
              // preset="formLabel"
              weight="semiBold"
              text="*"
              style={$asterisk}
            />
          )}
        </View>
      )}

      <View style={$inputWrapperStyles as any}>
        {!!LeftAccessory && (
          <LeftAccessory
            style={$leftAccessoryStyle}
            status={status}
            editable={!disabled}
            multiline={TextInputProps.multiline ?? false}
          />
        )}

        <TextInput
          ref={input}
          underlineColorAndroid={'transparent'}
          textAlignVertical="top"
          placeholder={placeholderContent}
          secureTextEntry={isPassword && !isVisible}
          placeholderTextColor={colors.textDim}
          autoCapitalize="none"
          {...TextInputProps}
          editable={!disabled}
          style={$inputStyles}
        />

        {!!RightAccessory && (
          <RightAccessory
            style={$rightAccessoryStyle}
            status={status}
            editable={!disabled}
            multiline={TextInputProps.multiline ?? false}
          />
        )}
        {/* {isPassword && renderEye()} */}
      </View>

      {!!helper && (
        <Text
          size="xs"
          // preset="formHelper"
          text={helper}
          // tx={helperTx}
          // txOptions={helperTxOptions}
          {...HelperTextProps}
          style={$helperStyles}
        />
      )}
      {/* {isPassword && renderEye()} */}
    </TouchableOpacity>
  );
});

const $labelStyle: TextStyle = {
  marginBottom: spacing.xs,
  color: colors.black,
  fontFamily: typography.fonts.syne.normal,
};

const $inputWrapperStyle: ViewStyle = {
  flexDirection: 'row',
  minWidth: '100%',
  padding: spacing.xs,
  alignItems: 'flex-start',
  borderWidth: 1,
  borderRadius: spacing.xs,
  backgroundColor: colors.white,
  borderColor: colors.gray1,
  overflow: 'hidden',
};

const $inputStyle: TextStyle = {
  flex: 1,
  alignSelf: 'stretch',
  fontFamily: typography.fonts.syne.normal,
  color: colors.black,
  fontSize: 16,
  // height: '100%',
  // https://github.com/facebook/react-native/issues/21720#issuecomment-532642093
  paddingVertical: 0,
  paddingHorizontal: 0,
  marginVertical: spacing.xxs,
  marginHorizontal: spacing.sm,
};

const $helperStyle: TextStyle = {
  marginTop: spacing.xs,
};

const $rightAccessoryStyle: ViewStyle = {
  marginEnd: spacing.xs,
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
};
const $leftAccessoryStyle: ViewStyle = {
  marginStart: spacing.xs,
  height: 40,
  marginLeft: spacing.md,
  justifyContent: 'center',
  alignItems: 'center',
};
const $asterisk: TextStyle = {
  color: colors.error,
  marginLeft: spacing.xxs,
  textAlignVertical: 'top',
};
