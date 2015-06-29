import alt from '../alt';
import createStore from '../utils/create-stores';
import { NewActions } from '../actions';

export default alt.createStore(createStore(NewActions));