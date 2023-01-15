import { useLayoutEffect } from 'react';
// Redux Approach
import { useSelector, useDispatch } from 'react-redux';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import IconButton from '../components/IconButton';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';
// Context Approach
// import { FavoritesContext } from '../store/context/favorites-context';

// Redux Approach
import { addfavorite, removeFavorite } from '../store/redux/favorites';

const MealDetailsScreen = ({ navigation, route }) => {
  // Context Approach
  // const favoriteMealsCtx = useContext(FavoritesContext);

  // Redux Approach
  const favoritesMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const { mealId } = route.params;
  const meal = MEALS.find((mealItem) => mealItem.id === mealId);
  // Context Approach
  // const mealIsfavorite = favoriteMealsCtx.ids.includes(mealId);

  // Redux Approach
  const mealIsfavorite = favoritesMealIds.includes(mealId);

  const changeFavoriteStatusHandler = () => {
    if (mealIsfavorite) {
      // Context Approach
      // favoriteMealsCtx.removeFavorite(mealId);
      // Redux Approach
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // Context Approach
      // favoriteMealsCtx.addFavorite(mealId);
      // Redux Approach
      dispatch(addfavorite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsfavorite ? 'star' : 'star-outline'}
            color="gold"
            onPress={changeFavoriteStatusHandler}
          />
        );
      }
    });
  }, [navigation, mealId, changeFavoriteStatusHandler]);

  return (
    <ScrollView
      style={styles.rootContainer}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />

      <Text style={styles.title}>{meal.title}</Text>

      <MealDetails
        duration={meal.duration}
        complexity={meal.complexity}
        affordability={meal.affordability}
        textStyle={styles.detailText}
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={meal.ingredients || []} />

          <Subtitle>Steps</Subtitle>
          <List data={meal.steps || []} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },
  image: {
    width: '100%',
    height: 350
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    color: 'white',
    textAlign: 'center'
  },
  detailText: {
    color: 'white'
  },
  listOuterContainer: {
    alignItems: 'center'
  },
  listContainer: {
    width: '80%'
  }
});

export default MealDetailsScreen;
