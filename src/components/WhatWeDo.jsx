import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const servicesLeft = [
  "Design and Drawings",
  "Kitchens",
  "Doors and Windows",
  "Floorings",
  "Tanks / Staircase",
];

const servicesRight = [
  "Structure Planning",
  "Bathrooms",
  "Paintings",
  "Electricals",
  "Miscellaneous",
];

export default function WhatWeDo() {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg,#b6c6e3,#9fb2d6)",
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 6 },
        textAlign: "center",
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          fontSize: { xs: 28, md: 36 },
          fontWeight: 600,
          mb: 5,
        }}
      >
        What we do?
      </Typography>

      {/* Flex container */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          flexWrap: "wrap",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* Left column */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            flex: "1 1 400px",
          }}
        >
          {servicesLeft.map((item, index) => (
            <Box
              key={index}
              sx={{
                background: "#fff",
                borderRadius: "12px",
                padding: "14px 20px",
                textAlign: "left",
                fontWeight: 500,
                boxShadow: "0 3px 8px rgba(0,0,0,0.08)",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 6px 14px rgba(0,0,0,0.12)",
                },
              }}
            >
              {item}
            </Box>
          ))}
        </Box>

        {/* Right column */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            flex: "1 1 400px",
          }}
        >
          {servicesRight.map((item, index) => (
            <Box
              key={index}
              sx={{
                background: "#fff",
                borderRadius: "12px",
                padding: "14px 20px",
                textAlign: "left",
                fontWeight: 500,
                boxShadow: "0 3px 8px rgba(0,0,0,0.08)",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 6px 14px rgba(0,0,0,0.12)",
                },
              }}
            >
              {item}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Bottom text */}
      <Typography sx={{ mt: 6, fontSize: 16 }}>
        Have any requirements in your mind?
      </Typography>

      {/* CTA */}
      <Button
        endIcon={<ArrowForwardIcon />}
        sx={{
          mt: 1,
          textTransform: "none",
          fontWeight: 600,
          color: "#1e40af",
        }}
      >
        Lets Build
      </Button>
    </Box>
  );
}