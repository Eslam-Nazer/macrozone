import { globalStyles } from "@/styles/global";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function MealsScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={[globalStyles.title, styles.meals]}>All Meals</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  meals: {
    textAlign: "center",
    width: "100%",
  },
});
