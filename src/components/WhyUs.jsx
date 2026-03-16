import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import EngineeringIcon from "@mui/icons-material/Engineering";

const data = [
  {
    title: "Best quality in industry",
    desc: "Assured Quality for construction",
    icon: <WorkspacePremiumIcon sx={{ fontSize: 48, color: "#d4a017" }} />,
  },
  {
    title: "At Affordable Price Range",
    desc: "Giving best price in the industry.",
    icon: <MonetizationOnIcon sx={{ fontSize: 48, color: "#c97a00" }} />,
  },
  {
    title: "Timely Deliverable Assurance",
    desc: "On-Time and On-Budget Delivery",
    icon: <EngineeringIcon sx={{ fontSize: 48, color: "#1e40af" }} />,
  },
];

export default function WhyBuddhaConstruction() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },
        textAlign: "center",
        background: "#fff",
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          fontSize: { xs: "24px", md: "38px" },
          fontWeight: 600,
          mb: 1,
        }}
      >
        Why Buddha Constructions?
      </Typography>

      {/* Subtitle */}
      <Typography
        sx={{
          color: "#6b7280",
          fontSize: { xs: "14px", md: "16px" },
          mb: { xs: 4, md: 6 },
        }}
      >
        Proven records throughout our previous projects
      </Typography>

      {/* Cards */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // stack on mobile
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        {data.map((item, index) => (
          <Paper
            key={index}
            elevation={0}
            sx={{
              border: "1px solid #e5e7eb",
              borderRadius: "18px",
              p: { xs: 2, md: 3 },
              width: { xs: "100%", sm: "280px", md: "340px" },
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "left",
              transition: "0.3s",
              "&:hover": {
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                transform: { md: "translateY(-4px)" }, // hover effect only on larger screens
              },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "16px", md: "18px" },
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "13px", md: "14px" },
                  color: "#6b7280",
                }}
              >
                {item.desc}
              </Typography>
            </Box>

            {/* Icon */}
            <Box>{item.icon}</Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
