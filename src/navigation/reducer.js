import { NavigationActions } from 'react-navigation';
/* Types */
import { Types as UserTypes } from 'store/ducks/user';

import Routes from './routes';

const ActionForLoggedOut = Routes.router.getActionForPathAndParams('LoggedOut');
const ActionForLoggedIn = Routes.router.getActionForPathAndParams('LoggedIn');

const stateForLoggedOut = Routes.router.getStateForAction(ActionForLoggedOut);
const stateForLoggedIn = Routes.router.getStateForAction(ActionForLoggedIn);

const initialState = { stateForLoggedOut, stateForLoggedIn };

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case '@@redux/INIT':
      return {
        ...state,
        stateForLoggedIn: Routes.router.getStateForAction(ActionForLoggedIn, stateForLoggedOut),
      };
    case UserTypes.LOGIN_SUCCESS:
      return {
        ...state,
        stateForLoggedIn: Routes.router.getStateForAction(ActionForLoggedIn, stateForLoggedOut),
      };
    case UserTypes.LOGIN_FAILURE:
      return {
        ...state,
        // stateForLoggedOut: Routes.router.getStateForAction(NavigationActions.reset({
        //   index: 0,
        //   actions: [NavigationActions.navigate({ routeName: 'Identification' })],
        // })),
      };
    case UserTypes.LOGOUT:
      return {
        ...state,
        stateForLoggedOut: Routes.router.getStateForAction(NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Identification' })],
        })),
      };
    default:
      return {
        ...state,
        stateForLoggedIn: Routes.router.getStateForAction(action, state.stateForLoggedIn),
        stateForLoggedOut: Routes.router.getStateForAction(action, state.stateForLoggedOut),
      };
  }
}

export default navReducer;
