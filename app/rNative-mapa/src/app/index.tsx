import { Text, View } from "react-native";
import { theme } from "./theme";

export default function Index() {
  return (
    <View style={theme.container}>
      <Text style={theme.title}> New APP </Text>
    </View>
  );
}