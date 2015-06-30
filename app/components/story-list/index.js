import React from 'react-native';
import RefreshableListView  from 'react-native-refreshable-listview';

import styles from './styles';

var {
  Component,
  TouchableHighlight,
  ListView,
  View,
  Text
}  = React;

export default class StoryList extends Component {

  componentDidMount() {
    this.props.fetch();
  }

  renderStory(story) {
    return <StoryListItem story={story} />;
  }

  render() {
    return (
      <RefreshableListView
        dataSource={this.props.ids}
        renderRow={this.renderStory}
        loadData={this.props.fetch}
        refreshDescription="Refreshing stories"
        style={styles.listView}
      />
    );
  }
}

class StoryListItem extends Component {

  render() {
    return (
      <TouchableHighlight onPress={() => console.log(this.props.story)} underlayColor='#BDBEC2'>
        <View style={styles.container}>
            <View style={styles.rightContainer}>
              <Text style={styles.title}>{this.props.story}</Text>
            </View>
        </View>
      </TouchableHighlight>
    );
  }
}

