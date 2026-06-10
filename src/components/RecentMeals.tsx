import { Meal } from "@/storage/meals";
import { globalStyles } from "@/styles/global";
import { Text, View } from "react-native";
import MealItem from "./MealItem";

type RecentMealsProps = {
  meals: Meal[];
  onDelete: () => void;
};

export default function RecentMealsScreen({
  meals,
  onDelete,
}: RecentMealsProps) {
  return (
    <View style={{ marginTop: 30 }}>
      <Text style={globalStyles.sectionTitle}>Recent Meals</Text>

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
            onDelete={onDelete}
          />
        ))
      ) : (
        <Text style={globalStyles.empty}>No recent meals</Text>
      )}
    </View>
  );
}
