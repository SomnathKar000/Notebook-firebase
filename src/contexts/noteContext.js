import { useContext, createContext, useReducer } from "react";
import reducer from "../reducers/noteReducer";

const initialState = {
  user: "",
  mode: "light",
  notes: [],
  loading: false,
};

const NoteContext = createContext();

export const NoteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <NoteContext.Provider value={{ ...state }}>{children}</NoteContext.Provider>
  );
};

export const useNoteContext = () => {
  return useContext(NoteContext);
};
