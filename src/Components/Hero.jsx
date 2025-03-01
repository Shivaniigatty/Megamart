import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function Hero() {
  const navigate = useNavigate(); // Initialize navigate function

  return (

    <Box
      sx={{
        width: "100%",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: "url('/bg.jpeg')",
        position: "relative",
        color: "#fff",
      }}
    >
      {/* Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: "linear-gradient(144deg, #8000ff7a, #00ff7180)",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          px: { xs: 2, sm: 4 },
          width: { xs: "100%", sm: "70%" },
        }}
      >
        <Typography
          sx={{
            fontWeight: "900",
            fontSize: { xs: "40px", sm: "70px" },
            textTransform: "uppercase",
            letterSpacing: "3px",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          }}
          gutterBottom
        >
          Welcome to MegaMart
        </Typography>

        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "22px",
            opacity: 0.9,
            mb: 2,
          }}
        >
          Your one-stop destination for everything!
        </Typography>

        <Typography
          sx={{
            width: { xs: "90%", sm: "60%" },
            fontWeight: "500",
            opacity: 0.8,
            margin: "auto",
            fontSize: "25px",
            mb: 3,
          }}
        >
          Discover amazing deals, top-quality products, and a seamless shopping
          experience at MegaMart. Your satisfaction is our priority!
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ff4081",
            color: "#fff",
            fontSize: "18px",
            fontWeight: "bold",
            px: 4,
            py: 1.5,
            borderRadius: "30px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            "&:hover": {
              backgroundColor: "#e91e63",
            },
          }}
          onClick={() => navigate("/shop")} // Navigate to Shop page on click
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  );
}
