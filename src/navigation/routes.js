/* Core */
import { StackNavigator } from 'react-navigation';

/* Presentational */
import { colors, fonts } from 'styles';

/* Pages */
import Identification from 'pages/identification';
import Register from 'pages/register';
import Login from 'pages/login';

import Home from 'pages/home';
import Profile from 'pages/profile';

const LoggedOutStack = StackNavigator({
  Identification: { screen: Identification },
  Register: { screen: Register },
  Login: { screen: Login },
}, {
  headerMode: 'none',
});

const LoggedInStack = StackNavigator({
  Home: { screen: Home },
  Profile: { screen: Profile },
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: colors.white,
  },
});

const Routes = StackNavigator({
  LoggedOut: { screen: LoggedOutStack },
  LoggedIn: { screen: LoggedInStack },
}, {
  headerMode: 'none',
});

export default Routes;
