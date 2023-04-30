import { useContext, createContext, useReducer, useEffect } from "react";
import reducer from "../reducers/noteReducer";
import { auth, db } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
const initialState = {
  user: {},
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

  const LogOut = () => {
    signOut(auth);
    dispatch("LOGOUT_USER");
    openAlert("logout successfully", "success");
  };

  const addNote = async (uid, note) => {
    const noteBookRef = doc(db, "notebook", uid);
    try {
      await setDoc(noteBookRef, { note: note });
      openAlert("Note added successfully", "success");
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: "UPDATE_USER", payload: user });
        return true;
      } else {
        dispatch({ type: "LOGOUT_USER" });
        return true;
      }
    });
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <NoteContext.Provider
      value={{
        ...state,
        getUser,
        openAlert,
        closeAlert,
        changeMode,
        LogOut,
        addNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export const useNoteContext = () => {
  return useContext(NoteContext);
};
