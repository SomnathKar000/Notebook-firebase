import React from "react";
import { Box, Typography, Tooltip, IconButton, Paper } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const SingleNote = (props) => {
  const timestamp = "NOOO New Today";
  const content =
    "As the sun began to set over the horizon, the sky turned a beautiful shade of pink and orange. The air was cool and crisp, and a gentle breeze blew through the trees, rustling the leaves. Birds chirped in the distance, singing their evening songs. A group of children played on the nearby playground, laughing and shouting as they ran around. In the distance, a dog barked, adding to the peaceful ambiance of the evening. It was a beautiful moment, one that would be remembered for years to come.";
  const title = "New note";

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="p">{content}</Typography>
          <Typography variant="caption" display="block">
            {timestamp}
          </Typography>
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
