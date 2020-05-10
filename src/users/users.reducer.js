import { GET_USERS, GET_USER_DATA, MODAL_OPEN } from "./users.actions";

const initState = {
  usersList: [],
  userDetails: {},
  modalOpen: false,
};

export const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USERS: {
      return {
        ...state,
        usersList: action.payload.usersList.data,
      };
    }
    case GET_USER_DATA: {
      return {
        ...state,
        userDetails: action.payload.userDetails,
      };
    }
    case MODAL_OPEN: {
      return {
        ...state,
        modalOpen: !state.modalOpen,
        userDetails: {},
      };
    }
    default:
      return state;
  }
};
