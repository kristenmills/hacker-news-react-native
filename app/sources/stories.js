import alt from '../alt';
import { createSource } from '../utils/stories';
import { TopActions, NewActions, AskActions, ShowActions, JobsActions } from '../actions';

export const TopSource = createSource(TopActions, 'top');
export const NewSource = createSource(NewActions, 'new');
export const AskSource = createSource(AskActions, 'ask');
export const ShowSource = createSource(ShowActions, 'show');
export const JobsSource = createSource(JobsActions, 'jobs');