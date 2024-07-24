import React from "react";
import { Box, Link, Typography, useTheme } from "@mui/material";
import { purple } from "@mui/material/colors";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));
  const handleLogout = async () => {
    try {
      await axios.post("/api/v1/auth/logout");
      localStorage.removeItem("authToken");
      toast.success("Logout Successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      width={"100%"}
      p={"1rem 6%"}
      backgroundColor={theme.palette.background.alt}
      textAlign={"center"}
      sx={{ boxShadow: 3, mb: 2 }}
    >
      <Typography variant="h1" color={"primary"} fontWeight={"bold"}>
        AI GPT 3 CLone
      </Typography>
      {loggedIn ? (
        <NavLink to="/login" onClick={handleLogout} p={1}>
          Logout
        </NavLink>
      ) : (
        <>
          <NavLink to="/register" p={1}>
            {" "}
            SignUp
          </NavLink>
          <NavLink to="/login" p={1}>
            SignIn
          </NavLink>
        </>
      )}
    </Box>
  );
};

export default Navbar;
