import React from "react";
import { useNoteContext } from "../contexts/note-context";
import { Stack, Snackbar, Alert } from "@mui/material";

const AlertInfo = () => {
  const { closeAlert, alert } = useNoteContext();

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={alert.open} autoHideDuration={6000} onClose={closeAlert}>
        <Alert
          onClose={closeAlert}
          severity={alert.type}
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default AlertInfo;
