import api from 'services/api';
import { NavigationActions } from 'react-navigation';
import { call, put, select } from 'redux-saga/effects';
import { createSelector } from 'reselect'

import { Creators as IdentificationActions } from 'store/ducks/identification';

export function* checkPhoneRequest(action) {
  try {
    const response = yield call(api.get, `/users/${action.payload}`);

    if (response.data[0]) {
      yield put(IdentificationActions.checkPhoneSuccess());
      // Redirect to main page
      yield put(NavigationActions.navigate({ routeName: 'Login' }));
    }
    else{
      yield put(IdentificationActions.checkPhoneError('Usuário inexistente!'));
    }

  } catch (err) {
    yield put(IdentificationActions.checkPhoneError('Erro ao efetuar o login!'));
  }
}
