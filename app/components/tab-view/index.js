import React from 'react-native';

import styles from './styles';
import Navigator from '../navigator'
import * as Routes from '../../routes/story-lists';

var {
  Component,
  TabBarIOS,
}  = React;

var TabBarItem = TabBarIOS.Item;

export default class TabView extends Component {
  render () {
    return (
      <TabBarIOS>
        <TabBarItem
          title='Top'
          icon={require('image!Top')}
          selectedIcon={require('image!Top_Filled')}
          selected={this.props.selected === 'Top'}
          onPress={() => this.props.updateTab('Top')}
        >
          <Navigator initialRoute={Routes.TopRoute} />
        </TabBarItem>
        <TabBarItem
          title='New'
          icon={require('image!New')}
          selectedIcon={require('image!New_Filled')}
          selected={this.props.selected === 'New'}
          onPress={() => this.props.updateTab('New')}
        >
          <Navigator initialRoute={Routes.NewRoute} />
        </TabBarItem>
        <TabBarItem
          title='Ask'
          icon={require('image!Ask')}
          selectedIcon={require('image!Ask_Filled')}
          selected={this.props.selected === 'Ask'}
          onPress={() => this.props.updateTab('Ask')}
        >
          <Navigator initialRoute={Routes.AskRoute} />
        </TabBarItem>
        <TabBarItem
          title='Show'
          icon={require('image!Show')}
          selectedIcon={require('image!Show_Filled')}
          selected={this.props.selected === 'Show'}
          onPress={() => this.props.updateTab('Show')}
        >
          <Navigator initialRoute={Routes.ShowRoute} />
        </TabBarItem>
        <TabBarItem
          title='Jobs'
          icon={require('image!Jobs')}
          selectedIcon={require('image!Jobs_Filled')}
          selected={this.props.selected === 'Jobs'}
          onPress={() => this.props.updateTab('Jobs')}
        >
          <Navigator initialRoute={Routes.JobsRoute} />
        </TabBarItem>
      </TabBarIOS>
    );
  }
}