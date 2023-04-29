import React, { useRef } from "react";
import { Box, TextField, Button, InputBase, FormControl } from "@mui/material";

const UploadNote = () => {
  const titleRef = useRef("");
  const contentRef = useRef("");
  const timestampRef = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const timestamp = timestampRef.current.value;
    console.log(title, content, timestamp);
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
