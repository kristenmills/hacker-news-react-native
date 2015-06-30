import React from 'react-native';
import AltContainer from 'alt/AltNativeContainer';

import styles from './styles';

var {
  Component,
  TouchableOpacity,
  Text,
  Navigator,
  View,
} = React;

var NavigationBarRouteMapper = {

  LeftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}>
        <View style={styles.navBarLeftButton}>
          <Text style={styles.navBarText}>
            Back
          </Text>
        </View>
      </TouchableOpacity>
    );
  },

  RightButton: function(route, navigator, index, navState) {
    if(!route.right) {
      return null;
    }
    return (
      <TouchableOpacity
        onPress={route.right.onPress}>
        <View style={styles.navBarRightButton}>
          <Text style={styles.navBarText}>
            {route.right.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },

  Title: function(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title}
      </Text>
    );
  },

};

export default class CustomNavigator extends Component {
  render() {
    return (
      <Navigator
        initialRoute={this.props.initialRoute}
        renderScene={(route, navigator) => <AltContainer {...route.props} navigator={navigator} /> }
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.navBar}
          />
        }
      />
    );
  }
}
