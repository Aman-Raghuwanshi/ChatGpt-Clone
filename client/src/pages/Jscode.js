import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  TextField,
  Button,
  Alert,
  Collapse,
  Card,
} from "@mui/material";
import axios from "axios";

const Jscode = () => {
  const theme = useTheme();

  //Media Query
  const isNotMobile = useMediaQuery("(min-width: 1000px)");

  //states
  const [text, setText] = useState("");
  const [jscode, setjscode] = useState("");
  const [err, setErr] = useState("");

  //register control
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/gemini/jscode", {
        jscode,
      });
      setjscode(data);
    } catch (err) {
      console.log(err);
      if (err.response.data.error) {
        setErr(err.response.data.error);
      } else if (err.message) {
        setErr(err.message);
      }
      setTimeout(() => {
        setErr("");
      }, 5000);
    }
  };
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          width={isNotMobile ? "40%" : "80%"}
          p={"2rem"}
          m={"2rem auto"}
          mr={"1rem"}
          borderRadius={5}
          sx={{ boxShadow: 5 }}
          bgcolor={theme.palette.background.alt}
        >
          <Collapse in={Boolean(err)}>
            <Alert severity="error" sx={{ mb: 2 }}>
              {err}
            </Alert>
          </Collapse>
          <form onSubmit={handleSubmit}>
            <Typography variant="h3">Generate Code</Typography>
            <TextField
              placeholder="Add your text"
              type="text"
              multiline={true}
              required
              margin="normal"
              fullWidth
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{ color: "white", mt: 2 }}
            >
              Submit
            </Button>
            <Typography mt={2}>
              Not this tool ? <Link to="/homepage">Go Back</Link>
            </Typography>
          </form>
        </Box>
        <Box
          width={isNotMobile ? "40%" : "80%"}
          p={"2rem"}
          m={"2rem auto"}
          ml={"1rem"}
          borderRadius={5}
          sx={{ boxShadow: 5 }}
          bgcolor={theme.palette.background.alt}
        >
          <Typography variant="h3">Code</Typography>
          {jscode ? (
            <Card
              sx={{
                mt: 4,
                border: 1,
                boxShadow: 0,
                borderRadius: 5,
                borderColor: "natural.medium",
                bgcolor: "background.default",
              }}
            >
              <pre>
                <Typography p={2}>{jscode}</Typography>
              </pre>
            </Card>
          ) : (
            <Card
              sx={{
                mt: 4,
                border: 1,
                boxShadow: 0,
                height: "500px",
                borderRadius: 5,
                borderColor: "natural.medium",
                bgcolor: "background.default",
              }}
            >
              <Typography
                variant="h5"
                color={"natural.medium"}
                sx={{
                  textAlign: "center",
                  verticalAlign: "middle",
                  lineHeight: "450px",
                }}
              >
                Js Code will appear here
              </Typography>
            </Card>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Jscode;
