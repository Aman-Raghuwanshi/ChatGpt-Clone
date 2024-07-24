import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import Summary from "./pages/Summary";
import Paragraph from "./pages/Paragraph";
import Jscode from "./pages/Jscode.js";
import Chatbot from "./pages/Chatbot.js";
import Scifyimage from "./pages/Scifyimage";

function App() {
  const theme = useMemo(() => createTheme(themeSettings(), []));
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Toaster />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/paragraph" element={<Paragraph />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/jscode" element={<Jscode />} />
          <Route path="/scifyimage" element={<Scifyimage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
