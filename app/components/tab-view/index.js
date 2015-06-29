import React from 'react-native';
import styles from './styles';

var { Component, StyleSheet, TabBarIOS, View, Text }  = React;

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
          <View style={styles.tabContent}>
            <Text>Top</Text>
          </View>
        </TabBarItem>
        <TabBarItem
          title='New'
          icon={require('image!New')}
          selectedIcon={require('image!New_Filled')}
          selected={this.props.selected === 'New'}
          onPress={() => this.props.updateTab('New')}
        >
          <View style={styles.tabContent}>
            <Text>New</Text>
          </View>
        </TabBarItem>
        <TabBarItem
          title='Ask'
          icon={require('image!Ask')}
          selectedIcon={require('image!Ask_Filled')}
          selected={this.props.selected === 'Ask'}
          onPress={() => this.props.updateTab('Ask')}
        >
          <View style={styles.tabContent}>
            <Text>Ask</Text>
          </View>
        </TabBarItem>
        <TabBarItem
          title='Show'
          icon={require('image!Show')}
          selectedIcon={require('image!Show_Filled')}
          selected={this.props.selected === 'Show'}
          onPress={() => this.props.updateTab('Show')}
        >
          <View style={styles.tabContent}>
            <Text>Show</Text>
          </View>
        </TabBarItem>
        <TabBarItem
          title='Jobs'
          icon={require('image!Jobs')}
          selectedIcon={require('image!Jobs_Filled')}
          selected={this.props.selected === 'Jobs'}
          onPress={() => this.props.updateTab('Jobs')}
        >
          <View style={styles.tabContent}>
            <Text>Jobs</Text>
          </View>
        </TabBarItem>
      </TabBarIOS>
    );
  }
}