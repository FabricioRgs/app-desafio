export const Types = {
  EVENT_ADD_NEW: 'user/EVENT_ADD_NEW',
};

const initialState = {
  list: [],
};

export default function event(state = initialState, action) {
  switch (action.type) {
    case Types.EVENT_ADD_NEW:
      return { ...state, list: [ ...state.list,
          {
            datetime: action.payload.datetime,
            name: action.payload.name,
            where: action.payload.where,
          },
        ],
      }
    default:
      return state;
  }
};

export const Creators = {
  addNew: (datetime, name, where) => ({
    type: Types.EVENT_ADD_NEW,
    payload: { datetime, name, where }
  }),
};
