import alt from '../alt';

export default function generateAsyncActions() {
  return alt.generateActions('fetch', 'fetchSuccess', 'fetchFailure');
}