import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
// import pic from "../Assets/Images/single-image1.png"; // Ensure the image path is correct

const Banner = () => {
  return (
    <Box
      sx={{
        bgcolor: "#cfcfcfba",
        overflow: "hidden",
        mt: 5,
        px: 4,
        py: 6,
        
      }}
    >
      <Grid container alignItems="center" spacing={4}>
        {/* Left Content - Title and Subtitle */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: { xs: "center", md: "left" }, px: { md: 4 } }}>
            <Typography variant="h4" sx={{ fontWeight: "500", color: "#222" }}>
              Experience Shopping Like Never Before
            </Typography>
            <Typography
              variant="h4"
              sx={{
                textTransform: "uppercase",
                color: "#ff5722",
                fontWeight: "600",
                pb: 3,
              }}
            >
              Premium Products, Affordable Prices
            </Typography>

          </Box>
        </Grid>

        {/* Right Content - Image */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
            }}
          >
            <img
              src={"/image.jpg"}
              alt="About Us"
              style={{
                width: "60%",
                height: "60%",
                objectFit: "cover", // Ensures full coverage
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
