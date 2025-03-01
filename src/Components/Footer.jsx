import React from "react";
import { Box, Typography, Grid, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, ShoppingCart } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#f8f8f8",
        py: 4,
        px: { xs: 2, md: 6 },
        borderTop: "3px solid #ff5722",
      }}
    >
      <Grid container spacing={3} alignItems="center">
        {/* Logo & Tagline */}
        <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center" }}>
          <img src="/mega.jpg" alt="MegaMart Logo" style={{ height: 50, marginRight: 10 }} />
          <Typography variant="body1" sx={{ display: "flex", alignItems: "center" }}>
            <ShoppingCart sx={{ mr: 1, color: "#ff5722" }} />
            Everything You Need, All in One Place!
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Quick Links
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
  <Link href="#" sx={{ color: "#333", textDecoration: "none", "&:hover": { color: "#ff5722" } }}>Home</Link>
  <Link href="#" sx={{ color: "#333", textDecoration: "none", "&:hover": { color: "#ff5722" } }}>About</Link>
  <Link href="#" sx={{ color: "#333", textDecoration: "none", "&:hover": { color: "#ff5722" } }}>Shop</Link>
</Box>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} md={3} sx={{ textAlign: { xs: "center", md: "right" } }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Follow Us
          </Typography>
          <IconButton href="#" sx={{ color: "#ff5722" }}>
            <Facebook />
          </IconButton>
          <IconButton href="#" sx={{ color: "#ff5722" }}>
            <Twitter />
          </IconButton>
          <IconButton href="#" sx={{ color: "#ff5722" }}>
            <Instagram />
          </IconButton>
        </Grid>
      </Grid>

      {/* Copyright */}
      <Typography variant="body2" align="center" sx={{ mt: 4, color: "#777" }}>
        © 2025 MegaMart. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
