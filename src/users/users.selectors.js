export const usersSelector = (state) => {
  return state.users.usersList;
};

export const userDetailsSelector = (state) => {
  return state.users.userDetails;
};

export const modalOpenSelector = (state) => {
  return state.users.modalOpen;
};
