import { StyleSheet, Text, View } from 'react-native';

const Subtitle = ({ children }) => (
  <View style={styles.subTitleContainer}>
    <Text style={styles.subTitle}>{children}</Text>
  </View>
);

const styles = StyleSheet.create({
  subTitleContainer: {
    padding: 6,
    margin: 4,
    borderBottomColor: '#666666',
    borderBottomWidth: 1,
    marginHorizontal: 12
  },
  subTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default Subtitle;
