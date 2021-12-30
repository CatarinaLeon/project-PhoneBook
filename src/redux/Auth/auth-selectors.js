const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUserEmail = (state) => state.auth.user.name;

const getIsFetchingCurrentUser = (state) => state.auth.isFetchingCurrentUser;

// const authSelectors = {
//   getIsLoggedIn,
//   getUserEmail,
//   getIsFetchingCurrentUser
// };
// export default authSelectors;
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getIsLoggedIn,
  getUserEmail,
  getIsFetchingCurrentUser,
};
