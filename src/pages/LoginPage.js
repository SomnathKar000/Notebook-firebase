import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Box, FormControl, TextField, Typography, Button } from "@mui/material";

const LoginPage = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(password, email);
  };
  return (
    <Box>
      <FormControl
        component="form"
        sx={{
          marginX: "17%",
          marginY: 20,
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
        onSubmit={handleSubmit}
      >
        <TextField inputRef={emailRef} label="Email" />
        <TextField inputRef={passwordRef} label="Password" />
        <Button type="submit" variant="contained">
          Submit
        </Button>
        <Typography textAlign="center" varient="p">
          Don't have an account?<Link to="/sign-up">sign up</Link>
        </Typography>
      </FormControl>
    </Box>
  );
};

export default LoginPage;
