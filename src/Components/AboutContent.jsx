import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
export default function AboutContent() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid2
        container
        // spacing={2}
        sx={{ backgroundColor: "#acab753b", borderRadius: "20px" }}
      >
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <img
            src={"/shop1.jpg"}
            alt="picture"
            style={{ width: "80%", borderRadius: "20px" }}
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              textAlign: "justify",
            }}
          >
            <Typography
              gutterBottom
              sx={{ fontWeight: "900", fontSize: "40px" }}
            >
              About <span style={{ color: "#5a0c4a" }}>Us</span>
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: "900" }}
            >
              
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Welcome to MegaMart, your ultimate shopping destination! Whether you're looking for the latest fashion trends, high-tech gadgets, home essentials, or everyday groceries, MegaMart has everything you need under one roof.
              </Typography>
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            At MegaMart, we believe in bringing convenience and quality to your fingertips. Experience the joy of shopping like never before!<b />
             🛒Shop Smart. Shop at MegaMart! 🚀
              </Typography>
              
            </Typography>
          </Box>
        </Grid2>
      </Grid2>

    </Box>
  );
}
