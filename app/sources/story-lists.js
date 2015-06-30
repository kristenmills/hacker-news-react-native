import alt from '../alt';
import { createSource } from '../utils/story-lists';
import * as Actions from '../actions/story-lists';

export const TopSource = createSource(Actions.TopActions, 'top');
export const NewSource = createSource(Actions.NewActions, 'new');
export const AskSource = createSource(Actions.AskActions, 'ask');
export const ShowSource = createSource(Actions.ShowActions, 'show');
export const JobsSource = createSource(Actions.JobsActions, 'job');