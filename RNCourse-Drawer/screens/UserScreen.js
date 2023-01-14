import { Button, StyleSheet, Text, View } from 'react-native';

const UserScreen = ({ navigation }) => {
  const pressHandler = () => {
    navigation.toggleDrawer();
  };

  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"User"</Text> screen!
      </Text>
      <Button title="Open Drawer" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  highlight: {
    fontWeight: 'bold',
    color: '#eb1064'
  }
});

export default UserScreen;
