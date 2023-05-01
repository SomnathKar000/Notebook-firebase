import React from "react";
import { Skeleton, Box } from "@mui/material";

const Loading = () => {
  return (
    <Box sx={{ pt: 0.5 }}>
      <Skeleton />
      <Skeleton variant="rectangular" width={210} height={118} />

      <Skeleton />
    </Box>
  );
};

export default Loading;
