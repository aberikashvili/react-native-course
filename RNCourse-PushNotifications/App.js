import { StatusBar } from 'expo-status-bar';
import * as Notifications from 'expo-notifications';

import { Alert, Button, Platform, StyleSheet, View } from 'react-native';
import { useEffect } from 'react';

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true
    };
  }
});

export default function App() {
  useEffect(() => {
    const configurePushNotifications = async () => {
      const { status } = await Notifications.getPermissionsAsync();

      let finalStatus = status;

      if (finalStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();

        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        Alert.alert('Permission required', 'Push notification needs appropriate permissions...');

        return;
      }

      const pushTokenData = await Notifications.getExpoPushTokenAsync();
      console.log(pushTokenData);

      if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.DEFAULT
        });
      }
    };

    configurePushNotifications();
  }, []);

  useEffect(() => {
    const sub1 = Notifications.addNotificationReceivedListener((notification) => {
      // console.log('Notification received', notification);
      const { userName } = notification.request.content.data;
      // console.log('Received UserName', userName);
    });

    const sub2 = Notifications.addNotificationResponseReceivedListener((response) => {
      // console.log('Notification Response Received', response);
      const { userName } = response.notification.request.content.data;
      console.log('Received UserName from Response', userName);
    });

    return () => {
      sub1.remove();
      sub2.remove();
    };
  }, []);

  const scheduleNotificationHandler = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: 'My first local notification',
        body: 'This is the body of the notification.',
        data: { userName: 'arkadi' }
      },
      trigger: {
        seconds: 5
      }
    });
  };

  const sendPushNotificationHandler = () => {
    fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: 'ExponentPushToken[ns6qScBjWhE3RnNrr7duQ_]',
        title: 'Test - sent from device!',
        body: 'This is test!'
      })
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Schedule Notification" onPress={scheduleNotificationHandler} />
      <Button title="Send Push Notification" onPress={sendPushNotificationHandler} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
