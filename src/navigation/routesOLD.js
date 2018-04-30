import React from 'react';
import { StackNavigator } from 'react-navigation';

import Identificacao from 'pages/identificacao';
import Login from 'pages/login';
import Registro from 'pages/registro';

import { colors } from 'styles';

const createNavigator = () =>

  StackNavigator({
    Identificacao: { screen: Identificacao },
    Login: { screen: Login },
    Registro: { screen: Registro },
  }, {
    initialRouteName: 'Identificacao',
    navigationOptions: {
      headerStyle: {
        elevation: 5,
      },
      headerTitleStyle : {
        textAlign: 'center',
        alignSelf:'center',
        marginLeft: - 30
      },
      headerTintColor: colors.white,
      headerBackTitle: null,
    }
  });

export default createNavigator;
