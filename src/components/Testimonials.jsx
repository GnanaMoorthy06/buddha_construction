import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    text: `"Working with Buddha Constructions was an amazing experience. They delivered our dream home exactly as we envisioned, on time and within budget. The quality of work and attention to detail is outstanding!"`,
    name: "Customer name",
    location: "Main Road, Chennai",
    video: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  },
  {
    text: `"The team was professional and transparent throughout the process. We couldn’t be happier with our new home."`,
    name: "Priya Sharma",
    location: "Banjara Hills, Hyderabad",
    video: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad1",
  },
  {
    text: `"Excellent craftsmanship and timely delivery. Highly recommended for anyone looking to build their dream house."`,
    name: "Arun Kumar",
    location: "MG Road, Bengaluru",
    video: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
];

const Testimonials = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: "#f9f9f9" }}>
      {/* Title */}
      <Typography
        sx={{
          fontSize: { xs: 28, md: 38 },
          fontWeight: 600,
          mb: 5,
          textAlign : 'center'
        }}
      >
        Our Happy Clients
      </Typography>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        style={{ paddingBottom: "40px" }}
      >
        {testimonials.map((item, i) => (
          <SwiperSlide key={i}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
              }}
            >
              {/* Video Thumbnail */}
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "100%", md: "50%" },
                  height: 250,
                  backgroundImage: `url(${item.video})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: 2,
                }}
              >
                <IconButton
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "red",
                  }}
                >
                  <PlayCircleOutlineIcon sx={{ fontSize: 64 }} />
                </IconButton>
              </Box>

              {/* Testimonial Content */}
              <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                <Typography variant="body1" sx={{ fontStyle: "italic", mb: 2 }}>
                  {item.text}
                </Typography>
                <Typography variant="subtitle1" fontWeight="bold">
                  {item.name}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {item.location}
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom CSS for smaller arrows */}
      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            color: #1976d2; /* MUI primary blue */
            font-size: 20px; /* smaller size */
            width: 15px;
            height: 15px;
          }
        `}
      </style>
    </Box>
  );
};

export default Testimonials;
