import React from "react";
import SingleNote from "./SingleNote";
import { Box } from "@mui/material";

const AllNotes = () => {
  const arr = [1, 2, 3, 5, 6, 7, 8, 9];
  return (
    <Box>
      {arr.map((item, index) => {
        return <SingleNote key={index} />;
      })}
    </Box>
  );
};

export default AllNotes;
