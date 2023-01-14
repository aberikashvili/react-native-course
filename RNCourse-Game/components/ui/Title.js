import { Platform, StyleSheet, Text } from 'react-native';
import Colors from '../../constants/colors';

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: Colors.white,
    textAlign: 'center',
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    ...Platform.select({ android: { borderWidth: 2 }, ios: { borderWidth: 0 } }),
    borderColor: Colors.accent500,
    padding: 12,
    maxWidth: '80%',
    width: 300
  }
});

export default Title;
