import { Box, Container, Typography, Chip } from "@mui/material";
import Stats from "./Stats";

function Hero() {
  return (
    <Box
      id="home"
      sx={{
        background: "#f7f7f7",
        py: 10,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 6,

            /* mobile responsive */
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          {/* LEFT TEXT */}

          <Box sx={{ flex: 1 }}>
            <Chip
              label="Your Vision, Our Construction 💡"
              sx={{
                border: "2px solid #2d63d8",
                color: "#2d63d8",
                fontWeight: 600,
                mb: 3,
              }}
            />

            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: "#333",
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              Building
              <br />
              Your Dream Home
            </Typography>

            <Typography
              sx={{
                color: "#666",
                fontSize: "18px",
                maxWidth: "420px",
              }}
            >
              From Vision to Reality – Quality Homes Built with Care and
              Precision
            </Typography>
          </Box>

          {/* RIGHT IMAGE */}

          <Box
            component="img"
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
            alt="construction"
            sx={{
              flex: 1,
              width: "100%",
              height: "350px",
              borderRadius: "16px",
              boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
            }}
          />
        </Box>
      </Container>
      <Stats />
    </Box>
  );
}

export default Hero;
