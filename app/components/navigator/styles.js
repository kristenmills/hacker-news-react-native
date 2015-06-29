import React from 'react-native';

var {
  StyleSheet,
  PixelRatio,
} = React;

export default StyleSheet.create({
  navBar: {
    backgroundColor: '#F7F7F7',
    borderBottomColor: '#A3A3A3',
    borderBottomWidth: 1/ PixelRatio.get()
  },

  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarButtonText: {
  },
});