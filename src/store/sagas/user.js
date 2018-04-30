import api from 'services/api';
import { NavigationActions } from 'react-navigation';
import { call, put, select } from 'redux-saga/effects';
import { createSelector } from 'reselect'

import { Creators as UserActions } from 'store/ducks/user';

export function* loginUserRequest(action) {
  try {

    const response = yield call(api.post, '/users/auth', { tel: action.payload.tel, password: action.payload.password });

    if (response.data[0]) {
      yield put(UserActions.loginUserSuccess(response.data[0]));
    }
    else{
      yield put(UserActions.loginUserError('Usuário inexistente!'));
    }

  } catch (err) {
    yield put(UserActions.loginUserError('Erro ao efetuar o login!'));
  }
}
