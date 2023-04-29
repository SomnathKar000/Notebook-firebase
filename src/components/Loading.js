import React from "react";
import { CircularProgress, Backdrop, Box } from "@mui/material";
import { useNoteContext } from "../contexts/note-context";

const Loading = () => {
  const { loading } = useNoteContext();
  return (
    <Box>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
};

export default Loading;
