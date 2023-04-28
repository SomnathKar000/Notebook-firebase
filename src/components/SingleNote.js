import React from "react";
import { Box, Typography, Tooltip, IconButton, Paper } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const SingleNote = (props) => {
  const timestamp = "NOOO";
  const content = "hemknsacjhbbgyg iusghsgf yuasfcu ysauc";
  const title = "New note";

  return (
    <Box>
      <Paper>
        <Box>
          <Typography>{title}</Typography>
          <Typography>{content}</Typography>
          <Typography>{timestamp}</Typography>
        </Box>
        <Box>
          <Tooltip title="Edit This note">
            <IconButton>
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete this note">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Paper>
    </Box>
  );
};

export default SingleNote;
