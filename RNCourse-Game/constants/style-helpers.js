import { Platform } from 'react-native';
import Colors from './colors.ios';

// Shadow: Android Only
export const androidShadow = {
  elevation: 4
};

// iOS shadow
export const iOsShadow = {
  shadowColor: Colors.black,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 6,
  shadowOpacity: 0.25
};

export const applyShadow = (
  elevation,
  shadowColor,
  shadowOffsetWidth,
  shadowOffsetHeight,
  shadowRadius,
  shadowOpacity
) => {
  return Platform.select({
    android: {
      elevation
    },
    ios: {
      shadowColor,
      shadowOffset: { width: shadowOffsetWidth, height: shadowOffsetHeight },
      shadowRadius,
      shadowOpacity
    }
  });
};
