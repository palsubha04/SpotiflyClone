export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  //"BQAe-hhKonoe7y3yfXhx938tbF4wLmBJ3MmcCYB4Pl2jOta2XxomnYMh20d_Rc4n8tEaIbzWD9OWGhp37s7Nqyi47YxRW0ariMbPWGtcHxrVHQ7VGaZGD95TzPHXPU7GbL8kbhM93ei0AdrSM1vqd-2CUx8iQwvnUg3EIFhHSdZ4TF1IbV3y",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
