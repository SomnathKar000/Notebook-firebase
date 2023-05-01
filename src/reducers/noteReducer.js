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
    return { ...state, user: {}, notes: [], searchedNotes: [] };
  }
  if (action.type === "GET_ALL_NOTES") {
    const notes = [...action.payload];
    return { ...state, notes, searchedNotes: notes };
  }
  if (action.type === "REMOVE_ALL_NOTES") {
    return { ...state, notes: [], searchedNotes: [] };
  }
  if (action.type === "SEARCH_NOTES") {
    const title = action.payload;
    const notes = [...state.searchedNotes].filter((item) =>
      item.title.toLowerCase().startsWith(title.toLowerCase())
    );
    return { ...state, notes };
  }

  return { ...state };
};

export default noteReducer;
