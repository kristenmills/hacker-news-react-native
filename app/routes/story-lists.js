import AltContainer from 'alt/AltNativeContainer';
import React from 'react-native';

import * as Stores from '../stores/story-lists';
import StoryList from '../components/story-list';

var {
  ListView
}  = React;

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

function storyListRoute(title, store) {
  return {
    component: AltContainer,
    title: title,
    props: {
      store() {
        return {
          store: store,
          value: {
            fetch: store.fetch,
            err: store.getState().err,
            ids: ds.cloneWithRows(store.getState().ids)

          }
        }
      },
      component: StoryList
    }
  }
}

export const TopRoute = storyListRoute('Top Stories', Stores.TopStore);
export const NewRoute = storyListRoute('New Stories', Stores.NewStore);
export const ShowRoute = storyListRoute('Show HN', Stores.ShowStore);
export const AskRoute = storyListRoute('Ask HN', Stores.AskStore);
export const JobsRoute = storyListRoute('Jobs', Stores.JobsStore);