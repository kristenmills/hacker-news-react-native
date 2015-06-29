export function createSource(actions, type) {
  return {
    fetch: {
      remote(state) {
        return fetch(`https://hacker-news.firebaseio.com/v0/${type}stories`)
          .then((response) => response.json());
      },

      local(state) {
        return state.items;
      },

      loading: actions.fetch,
      success: actions.fetcrSuccess,
      error: actions.fetchFailure,

      shouldFetch(state, refresh) {
        return refresh || state.items.length === 0;
      }
    }
  }
}

export function createStore(actions, source) {
  return class {
    constructor() {
      this.items = [];
      this.err = null;

      this.bindActions(actions);
      this.registerAsync(source);
    }

    onFetchSuccess(items) {
      this.items = items;
    }

    onFetchFailure(err) {
      this.err = err;
    }
  }
}