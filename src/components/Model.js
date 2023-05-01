import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormControl, TextField } from "@mui/material";
import { useNoteContext } from "../contexts/note-context";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Model = (props) => {
  const { openAlert, updateANote } = useNoteContext();
  const { handleClose, open, index, note } = props;
  const [editNote, setEditNote] = useState({
    title: note.title,
    content: note.content,
    timestamp: note.timestamp,
  });
  const { title, content, timestamp } = editNote;
  const onChange = (e) => {
    setEditNote({ ...editNote, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.length < 3) {
      openAlert("Enter a valid title", "error");
      return;
    }
    if (content.length < 3) {
      openAlert("Enter a valid content", "error");
      return;
    }
    if (timestamp.length < 2) {
      openAlert("Enter a valid timestamp", "error");
      return;
    }

    updateANote(index, editNote);
    handleClose();
  };
  return (
    <Box>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="keep-mounted-modal-title"
            variant="h6"
            textAlign="center"
            component="h2"
          >
            Edit a note
          </Typography>
          <FormControl
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              marginY: 3,
            }}
            component="form"
            onSubmit={handleSubmit}
          >
            <TextField
              name="title"
              value={title}
              onChange={onChange}
              label="Title"
            ></TextField>
            <TextField
              name="content"
              onChange={onChange}
              value={content}
              label="Content"
              multiline
              rows={4}
            ></TextField>
            <TextField
              name="timestamp"
              onChange={onChange}
              value={timestamp}
              label="Timestamp"
            ></TextField>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </FormControl>
        </Box>
      </Modal>
    </Box>
  );
};

export default Model;
