export function createSource(actions, type) {
  return {
    fetch: {
      remote(state) {
        return fetch(`https://hacker-news.firebaseio.com/v0/${type}stories.json`)
          .then((response) => response.json());
      },

      loading: actions.fetch,
      success: actions.fetchSuccess,
      error: actions.fetchFailure,

      shouldFetch(state, refresh) {
        return refresh || state.ids.length === 0;
      }
    }
  }
}

export function createStore(actions, source) {
  return class {
    constructor() {
      this.ids = [];
      this.err = null;

      this.bindActions(actions);
      this.registerAsync(source);
    }

    onFetchSuccess(ids) {
      this.ids = ids;
    }

    onFetchFailure(err) {
      this.err = err;
    }
  }
}