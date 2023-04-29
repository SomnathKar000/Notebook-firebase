import { useContext, createContext, useReducer } from "react";
import reducer from "../reducers/noteReducer";

const initialState = {
  user: "",
  mode: "light",
  loading: false,
  alert: {
    open: false,
    type: "info",
    message: "Enter valid details",
  },
  notes: [],
};

const NoteContext = createContext();

export const NoteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const openAlert = (message, type) => {
    dispatch({ type: "OPEN_ALERT", payload: { message, type } });
  };
  const closeAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch({ type: "CLOSE_ALERT" });
  };
  const changeMode = () => {
    dispatch({ type: "CHANGE_MODE" });
  };
  return (
    <NoteContext.Provider
      value={{ ...state, openAlert, closeAlert, changeMode }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export const useNoteContext = () => {
  return useContext(NoteContext);
};
