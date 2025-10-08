import { Pressable, Text, View } from "react-native";
import { headerStyles } from "./styles";
import { BackIcon } from "../../../icons";

export const Header = ({ title, onClose }: { title: string; onClose: () => void }) => (
    <View style={headerStyles.container}>
      <Pressable onPress={onClose} style={headerStyles.backButton}>
        <BackIcon width={32} height={32} fill="#000" />
      </Pressable>
      <Text style={headerStyles.title}>{title}</Text>
      <View style={headerStyles.spacer} />
    </View>
  );