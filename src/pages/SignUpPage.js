import { useRef } from "react";
import { Box, FormControl, TextField, Typography, Button } from "@mui/material";

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const SignUpPage = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(name, password, email);
  };
  return (
    <Box>
      <FormControl
        component="form"
        sx={{
          marginX: "17%",
          marginY: 15,
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
        onSubmit={handleSubmit}
      >
        <TextField inputRef={nameRef} label="Full name" />
        <TextField inputRef={emailRef} label="Email" />
        <TextField inputRef={passwordRef} label="Password" />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </FormControl>
    </Box>
  );
};

export default SignUpPage;
