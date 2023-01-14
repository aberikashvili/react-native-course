export const crossPlatformShadow = Platform.select({
  android: {
    elevation: 8,
    overflow: 'hidden'
  },
  ios: {
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8
  }
});

export const iOsRipple = Platform.select({
  ios: {
    opacity: 0.25
  }
});
