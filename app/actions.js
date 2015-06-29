import alt from './alt';


function generateAsyncActions(val, ...args) {
  return alt.generateActions(val, `${val}Success`, `${val}Failure`, ...args);
}

export var TabBarActions = alt.generateActions('updateTab');

export var TopActions = generateAsyncActions('fetch');
export var NewActions = generateAsyncActions('fetch');
export var ShowActions = generateAsyncActions('fetch');
export var AskActions = generateAsyncActions('fetch');
export var JobsActions = generateAsyncActions('fetch');

export var CommentsActions = generateAsyncActions('fetch');
export var ItemsActions = generateAsyncActions('fetch');