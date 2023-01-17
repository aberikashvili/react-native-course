import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const IconButton = ({ icon, color, size, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}>
      <View>
        <Ionicons name={icon} color={color} size={size} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pressed: {
    opacity: 0.7
  }
});

export default IconButton;
