import { useLayoutEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import IconButton from '../components/IconButton';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';

const MealDetailsScreen = ({ navigation, route }) => {
  const { mealId } = route.params;
  const meal = MEALS.find((mealItem) => mealItem.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => {
        return <IconButton icon="star" color="gold" onPress={headerButtonPressHandler} />;
      }
    });
  }, [navigation, mealId, headerButtonPressHandler]);

  const headerButtonPressHandler = () => console.log('header button pressed');

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
