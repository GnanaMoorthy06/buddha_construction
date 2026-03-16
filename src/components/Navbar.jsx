import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-scroll";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navButtonStyle = {
    textTransform: "none",
    fontSize: "16px",
    color: "#333",
    fontWeight: 500,
  };

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const navItems = [
    { label: "Home", to: "home" },
    { label: "Services", to: "services" },
    { label: "Projects", to: "gallery" },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "#fff",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                background: "#d9d9d9",
                borderRadius: "4px",
                mr: 1,
              }}
            />
            <Typography variant="h6" sx={{ color: "#333", fontWeight: 600 }}>
              Buddha Constructions
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth
                spy
                duration={500}
                offset={-80}
              >
                <Button sx={navButtonStyle}>{item.label}</Button>
              </Link>
            ))}
            <Link to="contact" smooth spy duration={500} offset={-80}>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  borderRadius: "10px",
                  px: 3,
                  background: "#2d63d8",
                  "&:hover": { background: "#1c4fb5" },
                }}
              >
                Contact us
              </Button>
            </Link>
          </Box>

          {/* Mobile Navigation */}
          <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", gap: 1 }}>
            {/* Hamburger Icon */}
            <IconButton onClick={toggleDrawer(true)} sx={{ color: "#333" }}>
              <MenuIcon />
            </IconButton>

            {/* Contact Button */}
            <Link to="contact" smooth spy duration={500} offset={-80}>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  borderRadius: "10px",
                  px: 2,
                  background: "#2d63d8",
                  "&:hover": { background: "#1c4fb5" },
                }}
              >
                Contact us
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>

      {/* Drawer for Mobile Menu (slides in from right) */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          {/* Close Icon */}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Menu
          </Typography>
          <List>
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth
                spy
                duration={500}
                offset={-80}
                onClick={toggleDrawer(false)}
              >
                <ListItem button>
                  <ListItemText primary={item.label} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
