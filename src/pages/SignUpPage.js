import { useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { Box, FormControl, TextField, Typography, Button } from "@mui/material";
import { useNoteContext } from "../contexts/note-context";
import { auth } from "../utils/firebase";

const SignUpPage = () => {
  const { openAlert } = useNoteContext();

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (password.length < 4) {
      openAlert("Enter a valid password ", "error");
      return;
    }
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      openAlert("Login success full welcome ", "success");
      console.log(result);
    } catch (error) {
      openAlert(error.message, "error");
      console.log(error);
    }
  };
  return (
    <Box>
      <Typography textAlign="center" variant="h3">
        Sign up page
      </Typography>
      <FormControl
        component="form"
        sx={{
          marginX: "17%",
          marginY: 12,
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
        <Typography textAlign="center" variant="p">
          Already registered ?<Link to="/login">sign in</Link>
        </Typography>
      </FormControl>
    </Box>
  );
};

export default SignUpPage;
