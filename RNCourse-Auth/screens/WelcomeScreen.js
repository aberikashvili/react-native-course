import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../store/auth-context';

const WelcomeScreen = () => {
  const authCtx = useContext(AuthContext);
  const [fetchedMessage, setFetchedMessage] = useState('');

  const token = authCtx.token;

  useEffect(() => {
    axios
      .get('https://rncourse-authentication-default-rtdb.firebaseio.com/message.json?auth=' + token)
      .then((response) => setFetchedMessage(response.data));
  }, [setFetchedMessage, token]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8
  }
});

export default WelcomeScreen;
