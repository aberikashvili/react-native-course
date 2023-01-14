import { StyleSheet, Text, View, Pressable } from 'react-native';

const GoalItem = (props) => (
  <View style={styles.goalItem}>
    <Pressable
      android_ripple={{ color: '#dddddd' }}
      style={(pressed) => pressed && styles.pressedItem}
      onPress={props.onDeleteItem.bind(this, props.id)}>
      <Text style={styles.goalItemText}>{props.text}</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  goalItem: {
    margin: 4,
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },
  pressedItem: {
    // opacity: 0.5
  },
  goalItemText: {
    color: '#fff',
    padding: 12
  }
});

export default GoalItem;
