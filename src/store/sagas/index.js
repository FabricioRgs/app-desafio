import { all, takeLatest } from 'redux-saga/effects';

import { Types as IdentificacaoTypes } from 'store/ducks/identification';
import { Types as UserTypes } from 'store/ducks/user';

import { checkPhoneRequest } from './identification';
import { loginUserRequest } from './user';

export default function* rootSaga() {
  return yield all([
    takeLatest(IdentificacaoTypes.SEARCH_REQUEST, checkPhoneRequest),
    takeLatest(UserTypes.LOGIN_REQUEST, loginUserRequest),
  ]);
}
