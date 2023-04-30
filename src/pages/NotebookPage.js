import React, { useEffect } from "react";
import AllNotes from "../components/AllNotes";
import UploadNote from "../components/UploadNote";
import { useNavigate } from "react-router-dom";
import { useNoteContext } from "../contexts/note-context";

const HomePage = () => {
  return (
    <div>
      <UploadNote />
      <AllNotes />
    </div>
  );
};

export default HomePage;
