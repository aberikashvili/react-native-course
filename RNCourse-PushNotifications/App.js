import { StatusBar } from 'expo-status-bar';
import * as Notifications from 'expo-notifications';

import { Button, StyleSheet, View } from 'react-native';
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
    const sub1 = Notifications.addNotificationReceivedListener((notification) => {
      console.log('Notification received', notification);
      const { userName } = notification.request.content.data;
      console.log('Received UserName', userName);
    });

    const sub2 = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log('Notification Response Received', response);
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

  return (
    <View style={styles.container}>
      <Button title="Schedule Notification" onPress={scheduleNotificationHandler} />
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
