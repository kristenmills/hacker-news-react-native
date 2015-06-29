import alt from '../alt';
import TabBarActions from '../actions/tab-bar';

class TabBarStore {
  constructor() {
    this.selected = 'Top';

    this.bindActions(TabBarActions);
  }

  onUpdateTab(tab) {
    this.selected = tab;
  }
}

export default alt.createStore(TabBarStore, 'TabBarStore');