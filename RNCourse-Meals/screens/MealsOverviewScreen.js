import { useLayoutEffect } from 'react';
import MealsList from '../components/MealsList/MealsList';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const MealsOverviewScreen = ({ navigation, route }) => {
  const categoryId = route.params.categoryId;

  useLayoutEffect(() => {
    const category = CATEGORIES.find((cat) => cat.id === categoryId);
    navigation.setOptions({
      title: category.title,
      headerStyle: { backgroundColor: category.color }
    });
  }, [categoryId, navigation]);

  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  return <MealsList meals={displayedMeals} />;
};

export default MealsOverviewScreen;
