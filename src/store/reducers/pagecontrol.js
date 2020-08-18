const INITIAL_STATE = {
  page: "home",
};

function pagecontrol(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CHANGE_PAGE":
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
}

export default pagecontrol;
