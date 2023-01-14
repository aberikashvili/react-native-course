import { useLayoutEffect } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import MealItem from '../components/MealItem';
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

  const renderMealItem = (item) => {
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability
    };
    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderMealItem(item)}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});

export default MealsOverviewScreen;
