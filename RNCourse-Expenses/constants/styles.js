import { Platform, StyleSheet } from 'react-native';

const palette = {
  primary50: '#e4d9fd',
  primary100: '#c6affc',
  primary200: '#a281f0',
  primary400: '#5721d4',
  primary500: '#3e04c3',
  primary700: '#2d0689',
  primary800: '#200364',
  accent500: '#f7bc0c',
  error50: '#fcc4e4',
  error500: '#9b095c',
  gray500: '#39344a',
  gray700: '#221c30',
  white: '#ffffff',
  black: '#000000'
};

export const GlobalStyles = StyleSheet.create({
  colors: palette,
  crossPlatformShadow: Platform.select({
    android: {
      elevation: 3
      // overflow: 'hidden'
    },
    ios: {
      shadowColor: palette.gray500,
      shadowOpacity: 0.4,
      shadowOffset: { width: 1, height: 1 },
      shadowRadius: 4
    }
  })
});
