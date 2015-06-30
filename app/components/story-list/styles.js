import React from 'react-native';

var {
  StyleSheet,
  PixelRatio,
} = React;

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#BDBEC2'
  },

  rightContainer: {
    flex: 1,
  },

  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },

  year: {
    textAlign: 'center',
  },

  thumbnail: {
    width: 53,
    height: 79.5
  },

  listView: {
    paddingTop: 48,
    marginBottom: 48
  },
});