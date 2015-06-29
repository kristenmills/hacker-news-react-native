import React from 'react-native';
import AltContainer from 'alt/AltNativeContainer';

import TabView from './components/tab-view';
import TabBarStore from './stores/tab-bar';
import TabBarActions from './actions/tab-bar';

var { Component } = React;

export default class HackerNews extends Component {
  render() {
    return (
      <AltContainer
        store={TabBarStore}
        component={TabView}
        actions={TabBarActions}
      />
    );
  }
}