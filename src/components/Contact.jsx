import React from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";

export default function Contact() {
  return (
    <Box
      sx={{
        background: "#e9eef8",
        py: 8,
        px: { xs: 2, md: 8 },
      }}
    >
      {/* Top Banner */}
      <Box
        sx={{
          background: "#6c82c9",
          color: "#000",
          borderRadius: "30px",
          textAlign: "center",
          py: 2,
          mb: 6,
          maxWidth: "900px",
          margin: "auto",
          fontWeight: 500,
        }}
      >
        Ready to start your home construction project?
      </Box>

      {/* Main Flex Layout */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 6,
          flexWrap: "wrap",
        }}
      >
        {/* Left Content */}
        <Box
          sx={{
            flex: "1 1 350px",
            maxWidth: "500px",
            mt:4
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 28, md: 34 },
              fontWeight: 600,
              mb: 1,
            }}
          >
            Send us a message
          </Typography>

          <Typography
            sx={{
              color: "#555",
              fontSize: 16,
            }}
          >
            Fill out the form and we will contact back you soon.
          </Typography>
        </Box>

        {/* Form Card */}
        <Paper
          elevation={3}
          sx={{
            flex: "1 1 350px",
            maxWidth: "420px",
            borderRadius: "16px",
            padding: 4,
            mt:4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <TextField
              placeholder="Enter your name"
              fullWidth
              variant="outlined"
            />

            <TextField
              placeholder="Enter your mobile number"
              fullWidth
              variant="outlined"
            />

            <Button
              variant="contained"
              sx={{
                background: "#0a2c9c",
                borderRadius: "10px",
                py: 1.5,
                textTransform: "none",
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              Send
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}