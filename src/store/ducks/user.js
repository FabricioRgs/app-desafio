export const Types = {
  LOGIN_REQUEST: 'user/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'user/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'user/LOGIN_FAILURE',
  LOGOUT: 'user/LOGOUT',
};

const initialState = {
  isLoggedIn: false,
  user: null
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN_SUCCESS:
      return { ...state,  user: action.payload.user, isLoggedIn: true }
    case Types.LOGIN_FAILURE:
      return { ...state, error: action.payload.error, isLoggedIn: false }
    case Types.LOGOUT:
      return { ...state, ...initialState }
    default:
      return state;
  }
};

export const Creators = {
  loginUserRequest: (tel, password) => ({
    type: Types.LOGIN_REQUEST,
    payload: { tel, password }
  }),

  loginUserSuccess: (user) => ({
    type: Types.LOGIN_SUCCESS,
    payload: { user }
  }),

  loginUserError: (message = 'Erro ao buscar o usuário!') => ({
    type: Types.LOGIN_FAILURE,
    payload: {
      message,
    },
  }),

  logout: () => ({
    type: Types.LOGOUT,
  }),
};
