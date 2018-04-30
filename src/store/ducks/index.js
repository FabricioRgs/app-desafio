import { combineReducers } from 'redux';

import nav from 'navigation/reducer';
import identification from './identification';
import user from './user';
import event from './event';

export default combineReducers({
  nav,
  identification,
  user,
  event
});
