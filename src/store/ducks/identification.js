export const Types = {
  CHANGE_TEL: 'identification/CHANGE_TEL',
  SEARCH_REQUEST: 'identification/SEARCH_REQUEST',
  SEARCH_SUCCESS: 'identification/SEARCH_SUCCESS',
  SEARCH_FAILURE: 'identification/SEARCH_FAILURE',
};

const initialState = {
  tel: '',
  error: ''
};

export default function identification(state = initialState, action) {
  switch (action.type) {
    case Types.CHANGE_TEL:
      return { ...state, tel: action.payload };
    case Types.SEARCH_SUCCESS:
      return { ...state }
    case Types.SEARCH_FAILURE:
      return { ...state, error: action.payload.error }
    default:
      return state;
  }
};

export const Creators = {
  changeTel: (tel) => ({
    type: Types.CHANGE_TEL,
    payload: tel
  }),

  checkPhoneRequest: (tel) => ({
    type: Types.SEARCH_REQUEST,
    payload: tel
  }),

  checkPhoneSuccess: (user) => ({
    type: Types.SEARCH_SUCCESS
  }),

  checkPhoneError: (message = 'Erro ao buscar o usuário!') => ({
    type: Types.SEARCH_FAILURE,
    payload: {
      message,
    },
  }),
};
