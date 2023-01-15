// Context Approach
// import { useContext } from 'react';
// Redux Approach
import { useSelector } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';
// Context Approach
// import { FavoritesContext } from '../store/context/favorites-context';

const FavoritesScreen = () => {
  // Context Approach
  //   const favoriteMealsCtx = useContext(FavoritesContext);

  // Redux Approach
  const favoritesMealIds = useSelector((state) => state.favoriteMeals.ids);

  // Context Approach
  //   const favoriteMeals = MEALS.filter((meal) => favoriteMealsCtx.ids.includes(meal.id));

  // Redux Approach
  const favoriteMeals = MEALS.filter((meal) => favoritesMealIds.includes(meal.id));

  if (!favoriteMeals.length) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList meals={favoriteMeals} />;
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    color: '#cccccc'
  }
});

export default FavoritesScreen;
