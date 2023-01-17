import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import { useState } from 'react';
import { Colors } from '../../constsnts/colors';
import OutlinedButton from '../ui/OutlinedButton';

const ImagePicker = () => {
  const [camerPermissionInformation, requestPermission] = useCameraPermissions();
  const [pickedImage, setPickedImage] = useState();

  const verifyPermissions = async () => {
    if (camerPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (camerPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient Permissions',
        'You need to grant camera permissions to use this app.'
      );
      return false;
    }

    return true;
  };

  const takePictureHandler = async () => {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 5],
      quality: 0.5
    });
    console.log('IMAGE', image);
    setPickedImage(image.assets[0].uri);
  };

  let imagePreview = <Text>No image taken yet.</Text>;

  if (pickedImage) {
    imagePreview = <Image source={{ uri: pickedImage }} style={styles.image} />;
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlinedButton icon="camera" onPress={takePictureHandler}>
        Take Picture
      </OutlinedButton>
    </View>
  );
};

const styles = StyleSheet.create({
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4
  },
  image: {
    width: '100%',
    height: '100%'
  }
});

export default ImagePicker;
