import _ from 'lodash';

import * as Actions from '../actions/story-lists';
import * as Stores from './story-lists';
import StoryActions from '../actions/story';
import StorySource from '../sources/story';

class StoryStore {
  constructor() {
    this.items = {};
    this.err = null;

    this.bindActions(StoryActions);
    this.registerAsync(StorySource);
    this.bindListeners({
      cleanUp: _.map(Actions, val => val.FETCH_SUCCESS)
    })
  }

  onFetchSuccess(item) {
    this.items[item.id] = item;
  }

  onFetchFailure(err) {
    this.err = err;
  }

  cleanUp() {
    var stores = _.values(Stores);

    this.waitFor(stores);

    var ids = stores.reduce((a, b) => a.concat(b.getState().ids));

    this.items = _.pick(this.items, ids);
  }

}

export default alt.createStore(StoryStore, 'StoryStore');