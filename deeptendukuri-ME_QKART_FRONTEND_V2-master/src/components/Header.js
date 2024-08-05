import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
import { useHistory, Link } from "react-router-dom";

const Header = ({ children, hasHiddenAuthButtons }) => {
  const history = useHistory();

  if (hasHiddenAuthButtons) {
    return (
      <Box className="header">
        <Box className="header-title">
          <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={() => {
            history.push("/");
          }}
        >
          Back to explore
        </Button>
      </Box>
    );
  }
  return (
    <Box className="header">
      <Box className="header-title">
        <img src="logo_light.svg" alt="QKart-icon"></img>
      </Box>
      {children}
      <Box>
        {localStorage.getItem("token") ? (
          <Stack flexDirection="row" spacing={1} alignItems="center">
            <Avatar src="avatar.png" alt={localStorage.getItem("username")} />
            <p>{localStorage.getItem("username")}</p>
            <Button
              className="explore-button"
              // startIcon={<ArrowBackIcon />}
              variant="text"
              onClick={() => {
                history.push("/login");
                localStorage.clear();
                window.location.reload("/");
              }}
            >
              Logout
            </Button>
          </Stack>
        ) : (
          <>
            <Button
              // className="explore-button"
              sx={{ mr: 1 }}
              // startIcon={<ArrowBackIcon />}
              // variant="contained"
              onClick={() => {
                history.push("/login");
              }}
            >
              Login
            </Button>
            <Button
              // className="explore-button"
              sx={{ mr: 1 }}
              // startIcon={<ArrowBackIcon />}
              variant="contained"
              onClick={() => {
                history.push("/register");
              }}
            >
              Register
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Header;
