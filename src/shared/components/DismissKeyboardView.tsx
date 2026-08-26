import { PropsWithChildren } from "react";
import { Keyboard, Pressable, StyleProp, ViewStyle } from "react-native";

type DismissKeyboardViewProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
}>;

// Wraps a screen's content so tapping anywhere outside a focused input dismisses the keyboard.
// Must be used per-screen (not once around the root Stack) — react-native-screens gives each
// native-stack screen its own native touch boundary, so a root-level wrapper never sees screen taps.
// Nested horizontal scrollables must import FlatList/ScrollView from react-native-gesture-handler
// (not react-native) — RN core's JS responder system can't reliably cede a drag from this ancestor
// to a plain react-native ScrollView, which blocks nested horizontal scrolling.
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
