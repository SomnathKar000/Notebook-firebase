const noteReducer = (state, action) => {
  if (action.type === "OPEN_ALERT") {
    const { message, type } = action.payload;
    const alert = {
      open: true,
      type,
      message,
    };
    return { ...state, alert };
  }
  if (action.type === "CLOSE_ALERT") {
    const alert = {
      open: false,
    };
    return { ...state, alert };
  }
  if (action.type === "START_LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "CLOSE_LOADING") {
    return { ...state, loading: false };
  }
  if (action.type === "CHANGE_MODE") {
    let mode = "dark";
    if (state.mode === "dark") {
      mode = "light";
    }
    return { ...state, mode };
  }
  if (action.type === "UPDATE_USER") {
    return { ...state, user: { ...action.payload } };
  }
  if (action.type === "LOGOUT_USER") {
    return { ...state, user: {} };
  }

  return { ...state };
};

export default noteReducer;
