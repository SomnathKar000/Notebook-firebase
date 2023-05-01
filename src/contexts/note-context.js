import { useContext, createContext, useReducer, useEffect } from "react";
import reducer from "../reducers/noteReducer";
import { auth, db } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, setDoc, onSnapshot } from "firebase/firestore";
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
  searchedNotes: [],
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
    dispatch({ type: "LOGOUT_USER" });
    openAlert("logout successfully", "success");
  };

  const addNote = async (note) => {
    const noteBookRef = doc(db, "notebook", state.user.uid);
    try {
      await setDoc(noteBookRef, { note: [...note] });
      openAlert("Successful", "success");
    } catch (error) {
      openAlert(error.message, "error");
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

  const updateANote = (index, note) => {
    const newNote = [
      ...state.notes.slice(0, index),
      note,
      ...state.notes.slice(index + 1),
    ];
    console.log(newNote);
    addNote(newNote);
  };
  const deleteANote = (index) => {
    const newNote = [
      ...state.notes.slice(0, index),
      ...state.notes.slice(index + 1),
    ];
    addNote(newNote);
  };

  const searchNote = (title) => {
    dispatch({ type: "SEARCH_NOTES", payload: title });
  };

  useEffect(() => {
    getUser();

    if (Object.keys(state.user).length !== 0) {
      dispatch({ type: "START_LOADING" });
      const notebookRef = doc(db, "notebook", state.user.uid);
      onSnapshot(notebookRef, (notes) => {
        if (notes.exists()) {
          dispatch({ type: "CLOSE_LOADING" });
          dispatch({ type: "GET_ALL_NOTES", payload: notes.data().note });
        } else {
          dispatch({ type: "CLOSE_LOADING" });
          dispatch({ type: "REMOVE_ALL_NOTES" });
        }
      });
    }
  }, [Object.keys(state.user).length]);
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
        deleteANote,
        updateANote,
        searchNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export const useNoteContext = () => {
  return useContext(NoteContext);
};
