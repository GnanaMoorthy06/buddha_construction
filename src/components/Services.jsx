import React from "react";
import { Container, Box, Typography } from "@mui/material";

function Services() {
  const services = [
    {
      title: "House Construction",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      title: "Building Construction",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    },
    {
      title: "Turfs",
      img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018",
    },
  ];

  return (
    <Container id="services" sx={{ py: 10 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ mb: 6, fontWeight: "bold" }}
      >
        Our Services
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // stack on mobile
          gap: 4,
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" },
        }}
      >
        {services.map((service, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              p: 2,
              borderRadius: "12px",
              transition: "0.3s",
              width: { xs: "100%", sm: "80%", md: 350 }, // responsive width
              "&:hover": {
                background: "#f5f7fb",
              },
            }}
          >
            {/* Image */}
            <Box
              component="img"
              src={service.img}
              alt={service.title}
              sx={{
                width: "100%",
                height: { xs: 200, md: 300 }, // smaller height on mobile
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />

            {/* Text */}
            <Typography
              variant="h6"
              fontWeight={500}
              align="center"
              sx={{ mt: 1 }}
            >
              {service.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default Services;
