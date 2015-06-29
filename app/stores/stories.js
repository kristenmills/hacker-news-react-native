import alt from '../alt';
import { createStore } from '../utils/stories';
import { TopActions, NewActions, AskActions, ShowActions, JobsActions } from '../actions';
import { TopSource, NewSource, AskSource, ShowSource, JobsSource } from '../sources/stories';

export var TopStore = alt.createStore(createStore(TopActions, TopSource));
export var NewStore = alt.createStore(createStore(NewActions, NewSource));
export var AskStore = alt.createStore(createStore(AskActions, AskSource));
export var ShowStore = alt.createStore(createStore(ShowActions, ShowSource));
export var JobsStore = alt.createStore(createStore(JobsActions, JobsSource));