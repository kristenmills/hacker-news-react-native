import StoryActions from '../actions/story';

export default const StorySource = {
  fetch: {
    remote(state, id) {
      return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}`)
        .then((response) => response.json());
    },

    loading: StoryActions.fetch,
    success: StoryActions.fetcHSuccess,
    error: StoryActions.fetchFailure,

    shouldFetch(state, refresh, id) {
      return refresh || !state.items[id];
    }
  }
}