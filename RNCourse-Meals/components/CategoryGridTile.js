import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { crossPlatformShadow, iOsRipple } from '../constants/style-helpers';

const CategoryGridTile = ({ title, color, onPress }) => {
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: '#cccccc' }}
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        onPress={onPress}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    ...crossPlatformShadow
  },
  button: {
    flex: 1
  },
  buttonPressed: {
    ...iOsRipple
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  }
});

export default CategoryGridTile;
