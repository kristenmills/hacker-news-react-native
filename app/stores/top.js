import alt from '../alt';
import createStore from '../utils/create-stores';
import { TopActions } from '../actions';

export default alt.createStore(createStore(TopActions));