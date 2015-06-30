import CommentActions from '../actions/comment';

export default const CommentSource = {
  fetch: {
    remote(state, id, storyId) {
      return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then((response) => response.json())
        .then((response) => { comment: response, storyId })
    },

    loading: CommentActions.fetch,
    success: CommentActions.fetchSuccess,
    error: CommentActions.fetchFailure,

    shouldFetch(state, refresh, id, storyId) {
      return refresh || !state.items[storyId] || !state.items[storyId][id];
    }
  }
}