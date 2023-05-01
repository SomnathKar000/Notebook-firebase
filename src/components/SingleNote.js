import React, { useState } from "react";
import { Box, Typography, Tooltip, IconButton, Paper } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNoteContext } from "../contexts/note-context";
import Model from "./Model";

const SingleNote = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { deleteANote } = useNoteContext();
  const index = props.index;
  const { timestamp, content, title } = props.note;

  return (
    <Box>
      <Paper elevation={6}>
        <Box p={2} sx={{ display: "flex", flexDirection: "column" }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
          <Typography sx={{ marginTop: 1 }} variant="caption" display="block">
            {timestamp}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Tooltip title="Edit This note">
            <IconButton onClick={handleOpen}>
              <EditIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete this note">
            <IconButton
              onClick={() => {
                deleteANote(index);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Paper>
      <Model
        handleClose={handleClose}
        open={open}
        index={index}
        note={props.note}
      />
    </Box>
  );
};

export default SingleNote;
