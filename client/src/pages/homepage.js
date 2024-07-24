import React from "react";
import { Box, Typography, Stack, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import FormatAlignCenterRounded from "@mui/icons-material/FormatAlignCenterRounded";
import ChatRounded from "@mui/icons-material/ChatRounded";
import ImageGeneratorIcon from "@mui/icons-material/Image";
import CodeIcon from "@mui/icons-material/Code";
const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box p={2}>
          <Typography variant="h4" mb={1} fontWeight="bold">
            Summary
          </Typography>
          <Card
            onClick={() => navigate("/summary")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <DescriptionRounded
              sx={{ fontSize: "80", color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                Summary Generator
              </Typography>
              <Typography variant="h6">
                Generate summary for your long text
              </Typography>
            </Stack>
          </Card>
        </Box>

        <Box p={2}>
          <Typography variant="h4" mb={1} fontWeight="bold">
            Paragraph
          </Typography>
          <Card
            onClick={() => navigate("/paragraph")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <FormatAlignCenterRounded
              sx={{ fontSize: "80", color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                Paragraph Generator
              </Typography>
              <Typography variant="h6">
                Generate Paragraph with words
              </Typography>
            </Stack>
          </Card>
        </Box>

        <Box p={2}>
          <Typography variant="h4" mb={1} fontWeight="bold">
            Chatbot
          </Typography>
          <Card
            onClick={() => navigate("/chatbot")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <ChatRounded
              sx={{ fontSize: "80", color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                Chatbot
              </Typography>
              <Typography variant="h6">Chat with our AI Chatbot</Typography>
            </Stack>
          </Card>
        </Box>

        <Box p={2}>
          <Typography variant="h4" mb={1} fontWeight="bold">
            Code
          </Typography>
          <Card
            onClick={() => navigate("/jscode")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <CodeIcon
              sx={{ fontSize: "80", color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                js-code Converter
              </Typography>
              <Typography variant="h6">
                convert your logic to javascript code
              </Typography>
            </Stack>
          </Card>
        </Box>

        {/* <Box p={2}>
          <Typography variant="h4" mb={1} fontWeight="bold">
            Images
          </Typography>
          <Card
            onClick={() => navigate("/scifyimage")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <ImageGeneratorIcon
              sx={{ fontSize: "80", color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                Generate images
              </Typography>
              <Typography variant="h6">Generate images</Typography>
            </Stack>
          </Card>
        </Box> */}
      </Box>
    </>
  );
};

export default Homepage;
