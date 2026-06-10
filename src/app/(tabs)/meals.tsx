import MealItem from "@/components/MealItem";
import { clearMeals, getMeals, Meal } from "@/storage/meals";
import { colors, globalStyles } from "@/styles/global";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function MealsScreen() {
  const [meals, setMeals] = useState<Meal[]>([]);

  const loadMeals = async () => {
    const data = await getMeals();
    setMeals(data);
  };

  const handleClearAll = async () => {
    Alert.alert(
      "Clear All Meals",
      "Are you sure you want to clear all meals?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Clear",
          style: "destructive",
          onPress: async () => {
            await clearMeals();
            loadMeals();
          },
        },
      ],
    );
    await clearMeals();

    loadMeals();
  };

  useFocusEffect(
    useCallback(() => {
      loadMeals();
    }, []),
  );

  return (
    <ScrollView style={globalStyles.container}>
      <View style={styles.headerContainer}>
        <Text style={globalStyles.title}>All Meals</Text>

        <TouchableOpacity style={styles.clearButton} onPress={handleClearAll}>
          <Text style={styles.clearButtonText}>Clear All</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 30 }}>
        {meals.length > 0 ? (
          meals.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              calories={meal.calories}
              protein={meal.protein}
              carbs={meal.carbs}
              fat={meal.fat}
              onDelete={loadMeals}
            />
          ))
        ) : (
          <Text style={globalStyles.empty}>No meals</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  clearButton: {
    backgroundColor: colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 16, // Gives it nice internal spacing
    borderRadius: 5,
    alignSelf: "flex-start", // CRITICAL: This stops it from stretching full width
  },
  clearButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
