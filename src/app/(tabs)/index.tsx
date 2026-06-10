import RecentMealsScreen from "@/components/RecentMeals";
import { getMeals, Meal } from "@/storage/meals";
import { globalStyles } from "@/styles/global";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { ScrollView, Text } from "react-native";
import HomeHeader from "../../components/HomeHeader";
import MacroGrid from "../../components/MacroGrid";

export default function HomeScreen() {
  const [meals, setMeals] = useState<Meal[]>([]);

  const loadMeals = async () => {
    const data = await getMeals();
    setMeals(data);
    console.log(data);
  };

  useFocusEffect(
    useCallback(() => {
      loadMeals();
    }, []),
  );

  return (
    <ScrollView
      style={globalStyles.container}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      <Text style={globalStyles.title}>MacroZone</Text>
      <HomeHeader />
      <MacroGrid />
      <RecentMealsScreen meals={meals} />
    </ScrollView>
  );
}
