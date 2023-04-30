import React, { useRef } from "react";
import { Box, TextField, Button, InputBase, FormControl } from "@mui/material";
import { useNoteContext } from "../contexts/note-context";

const UploadNote = () => {
  const { user, addNote, openAlert } = useNoteContext();
  const titleRef = useRef("");
  const contentRef = useRef("");
  const timestampRef = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const timestamp = timestampRef.current.value;

    if (title.length < 3) {
      openAlert("Enter a valid title", "error");
      return;
    }
    if (content.length < 3) {
      openAlert("Enter a valid content", "error");
      return;
    }
    if (timestamp.length < 3) {
      openAlert("Enter a valid timestamp", "error");
      return;
    }
    const note = { title, content, timestamp };

    addNote(user.uid, note);
  };
  return (
    <FormControl
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        marginY: 2,
        marginX: "10%",
      }}
    >
      <TextField inputRef={titleRef} label="Title"></TextField>
      <TextField
        inputRef={contentRef}
        label="Content"
        multiline
        rows={4}
      ></TextField>
      <TextField inputRef={timestampRef} label="Timestamp"></TextField>
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </FormControl>
  );
};

export default UploadNote;
