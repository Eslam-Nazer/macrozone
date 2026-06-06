import { globalStyles } from "@/styles/global";
import { ScrollView, Text } from "react-native";

export default function Index() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
    </ScrollView>
  );
}
