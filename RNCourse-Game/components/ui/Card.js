import { StyleSheet, View } from 'react-native';
import Colors from '../../constants/colors';
import { androidShadow, applyShadow, iOsShadow } from '../../constants/style-helpers';

const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 24,
    borderRadius: 8,
    ...androidShadow,
    ...iOsShadow,
    marginTop: 36,
    padding: 16,
    backgroundColor: Colors.primary800
  }
});

export default Card;
