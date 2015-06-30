import _ from 'lodash';

import * as Actions from '../actions/story-lists';
import * as Stores from './story-lists';
import CommentActions from '../actions/story';
import CommentSource from '../sources/comment';

class CommentStore {
  constructor() {
    this.items = {};
    this.err = null;

    this.bindActions(CommentActions);
    this.registerAsync(CommentSource);
    this.bindListeners({
      cleanUp: _.map(Actions, val => val.FETCH_SUCCESS)
    })
  }

  onFetchSuccess(payload) {
    if(!this.items[payload.storyId]) {
      this.items[payload.storyId] = {};
    }

    this.items[payload.storyId][payload.comment.id] = payload.comment;
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

export default alt.createStore(CommentStore, 'CommentStore');