import alt from '../alt';
import createStore from '../utils/create-stores';
import { ShowActions } from '../actions';

export default alt.createStore(createStore(ShowActions));