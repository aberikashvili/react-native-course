import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { crossPlatformShadow, iOsRipple } from '../constants/style-helpers';
import MealDetails from './MealDetails';

const MealItem = ({ id, title, imageUrl, duration, complexity, affordability }) => {
  const navigation = useNavigation();

  const pressHandler = () => navigation.navigate('MealDetails', { mealId: id });

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#cccccc' }}
        style={({ pressed }) => pressed && styles.mealItemPressed}
        onPress={pressHandler}>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    ...crossPlatformShadow
  },
  mealItemPressed: {
    ...iOsRipple
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 250
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8
  }
});

export default MealItem;
