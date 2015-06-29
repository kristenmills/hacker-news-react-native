export default function createStore(actions) {
  return class {
    constructor() {
      this.items = [];
      this.err = null;

      this.bindActions(actions);
    }

    onFetchSuccess(items) {
      this.items = items;
    }

    onFetchFailure(err) {
      this.err = err;
    }
  }
}