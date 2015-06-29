import alt from '../alt';
import createStore from '../utils/create-stores';
import { AskActions } from '../actions';

export default alt.createStore(createStore(AskActions));