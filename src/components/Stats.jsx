import { Container, Box, Paper, Typography } from "@mui/material";

function Stats() {

  const stats = [
    { number: "65+", label: "Projects Delivered" },
    { number: "12+", label: "Projects Ongoing" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <Container sx={{ py: 6 }}>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          flexWrap: "wrap"
        }}
      >

        {stats.map((item, i) => (

          <Paper
            key={i}
            sx={{
              width: 260,
              p: 4,
              textAlign: "center",
              borderRadius: "16px",
              background: "#e6ecf7"
            }}
          >

            <Typography
              variant="h4"
              color="primary"
              fontWeight="bold"
            >
              {item.number}
            </Typography>

            <Typography>
              {item.label}
            </Typography>

          </Paper>

        ))}

      </Box>

    </Container>
  );
}

export default Stats;
