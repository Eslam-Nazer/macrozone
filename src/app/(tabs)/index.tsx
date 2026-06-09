import RecentMeals from "@/components/RecentMeals";
import { globalStyles } from "@/styles/global";
import { ScrollView, Text } from "react-native";
import HomeHeader from "../../components/HomeHeader";
import MacroGrid from "../../components/MacroGrid";

export default function HomeScreen() {
  return (
    <ScrollView
      style={globalStyles.container}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      <Text style={globalStyles.title}>MacroZone</Text>
      <HomeHeader />
      <MacroGrid />
      <RecentMeals />
    </ScrollView>
  );
}
