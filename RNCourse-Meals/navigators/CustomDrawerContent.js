import { Image, StyleSheet, Text, View } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.logoOuterContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../assets/images/food-logo.png')}
            resizeMode="cover"
          />
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  logoOuterContainer: {
    width: '100%',
    alignItems: 'center'
  },
  logoContainer: {
    width: '90%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 16
  },
  logo: {
    width: 100,
    height: 100
  }
});

export default CustomDrawerContent;
