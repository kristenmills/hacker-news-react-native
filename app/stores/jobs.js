import alt from '../alt';
import createStore from '../utils/create-stores';
import { JobActions } from '../actions';

export default alt.createStore(createStore(JobActions));