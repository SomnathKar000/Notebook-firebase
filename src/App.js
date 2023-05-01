import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ThemeProvider,
  CssBaseline,
  createTheme,
  Container,
} from "@mui/material";
import Homepage from "./pages/NotebookPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import Alert from "./components/Alert";
import { useNoteContext } from "./contexts/note-context";

function App() {
  const { mode, user } = useNoteContext();
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Alert />
        <Container maxWidth="xl" sx={{ marginY: 3 }}>
          <Routes>
            <Route element={<Homepage />} path="/" />
            <Route element={<LoginPage />} path="/login" />
            <Route element={<SignUpPage />} path="/sign-up" />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
