import alt from '../alt';
import { createStore } from '../utils/story-lists';
import * as Actions from '../actions/story-lists';
import * as Sources from '../sources/story-lists';

export var TopStore = alt.createStore(createStore(Actions.TopActions, Sources.TopSource));
export var NewStore = alt.createStore(createStore(Actions.NewActions, Sources.NewSource));
export var AskStore = alt.createStore(createStore(Actions.AskActions, Sources.AskSource));
export var ShowStore = alt.createStore(createStore(Actions.ShowActions, Sources.ShowSource));
export var JobsStore = alt.createStore(createStore(Actions.JobsActions, Sources.JobsSource));