import { PropsWithChildren } from "react";
import { Keyboard, Pressable, StyleProp, ViewStyle } from "react-native";

type DismissKeyboardViewProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
}>;

// Wraps a screen's content so tapping anywhere outside a focused input dismisses the keyboard.
// Must be used per-screen (not once around the root Stack) — react-native-screens gives each
// native-stack screen its own native touch boundary, so a root-level wrapper never sees screen taps.
const DismissKeyboardView = ({ children, style }: DismissKeyboardViewProps) => (
  <Pressable
    style={[{ flex: 1 }, style]}
    onPress={Keyboard.dismiss}
    accessible={false}
  >
    {children}
  </Pressable>
);

export default DismissKeyboardView;
