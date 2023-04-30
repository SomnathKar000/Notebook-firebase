import React, { useRef } from "react";
import { styled, alpha } from "@mui/material/styles";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import FilterBAndWIcon from "@mui/icons-material/FilterBAndW";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import BookIcon from "@mui/icons-material/Book";

import {
  Button,
  IconButton,
  Tooltip,
  InputBase,
  Typography,
  Toolbar,
  Box,
  AppBar,
} from "@mui/material";
import { useNoteContext } from "../contexts/note-context";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Navbar = () => {
  const { mode, changeMode, user, LogOut } = useNoteContext();
  const searchInputRef = useRef("");
  // const onChange = (e) => {
  //   SearchImages(searchInputRef.current.value);
  // };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton href="/">
            <BookIcon sx={{ color: "white" }} />
          </IconButton>
          <Typography
            href="/"
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "block" },
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            Notebook
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              inputRef={searchInputRef}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          {Object.keys(user).length === 0 ? (
            <Button color="inherit" href="/login">
              Login
            </Button>
          ) : (
            <Button color="inherit" onClick={LogOut}>
              Log out
            </Button>
          )}
          <Tooltip title={`Enable ${mode === "light" ? "dark" : "light"} mode`}>
            <IconButton onClick={changeMode} sx={{ color: "white" }}>
              {mode === "dark" ? (
                <LightModeIcon fontSize="inherit" />
              ) : (
                <DarkModeIcon fontSize="inherit" />
              )}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
