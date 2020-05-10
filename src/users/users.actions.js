import * as usersGateways from "../gateWays";

export const GET_USERS = "USER_SEARCH";
export const GET_USER_DATA = "GET_USER_DATA";
export const MODAL_OPEN = "MODAL_OPEN";

export const getUsers = (usersList) => {
  return {
    type: GET_USERS,
    payload: {
      usersList,
    },
  };
};

export const getUserData = (userDetails) => {
  return {
    type: GET_USER_DATA,
    payload: {
      userDetails,
    },
  };
};

export const getUsersList = () => {
  return (dispatch) => {
    usersGateways
      .fetchUsers()
      .then((usersList) => dispatch(getUsers(usersList)));
  };
};

export const getUserDetails = (id) => {
  return (dispatch) => {
    usersGateways
      .fetchUserDetails(id)
      .then((userData) => dispatch(getUserData(userData)));
  };
};

export const changeModalState = () => {
  return {
    type: MODAL_OPEN,
  };
};
