import React, { useEffect } from "react";
import AllNotes from "../components/AllNotes";
import UploadNote from "../components/UploadNote";

const HomePage = () => {
  return (
    <div>
      <UploadNote />
      <AllNotes />
    </div>
  );
};

export default HomePage;
