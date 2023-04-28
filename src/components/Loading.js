import React from "react";
import { CircularProgress, Backdrop } from "@mui/material";
import { useNoteContext } from "../contexts/noteContext";

const Loading = () => {
  const { loading } = useNoteContext();
  return <div>Loading</div>;
};

export default Loading;
