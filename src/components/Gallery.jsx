import React from "react";
import { Box, Typography, Chip } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const projects = [
  {
    before: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    location: "Main Road, Chennai",
  },
  {
    before: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    location: "Main Road, Chennai",
  },
  {
    before: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    location: "Main Road, Chennai",
  },
  {
    before: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    location: "Main Road, Chennai",
  },
  {
    before: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    location: "Main Road, Chennai",
  },
];

export default function Gallery() {
  return (
    <Box
      sx={{
        py: 8,
        px: 3,
        textAlign: "center",
        background: "#fff",

        /* Move pagination below slider */
        ".swiper-pagination": {
          bottom: "0px !important",
        },

        ".swiper-pagination-bullet": {
          background: "#d1d5db",
          opacity: 1,
        },

        ".swiper-pagination-bullet-active": {
          background: "#2563eb",
        },
      }}
      id="gallery"
    >
      {/* Title */}
      <Typography
        sx={{
          fontSize: { xs: 28, md: 38 },
          fontWeight: 600,
          mb: 5,
        }}
      >
        Our Project Gallery
      </Typography>

      {/* Slider */}
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={2}
        style={{
          maxWidth: "1100px",
          margin: "auto",
          paddingBottom: "50px",
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                borderRadius: "18px",
                border: "1px solid #eee",
                overflow: "hidden",
                background: "#fff",
                boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
              }}
            >
              {/* Before / After Images */}
              <Box
                sx={{
                  display: "flex",
                }}
              >
                {/* Before */}
                <Box
                  sx={{
                    width: "50%",
                    position: "relative",
                  }}
                >
                  <Chip
                    label="Before"
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 10,
                      left: 10,
                      background: "#000",
                      color: "#fff",
                    }}
                  />

                  <img
                    src={project.before}
                    alt="before"
                    style={{
                      width: "100%",
                      height: "230px",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                {/* After */}
                <Box
                  sx={{
                    width: "50%",
                    position: "relative",
                  }}
                >
                  <Chip
                    label="After"
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      background: "#000",
                      color: "#fff",
                    }}
                  />

                  <img
                    src={project.after}
                    alt="after"
                    style={{
                      width: "100%",
                      height: "230px",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Box>

              {/* Location */}
              <Typography
                sx={{
                  textAlign: "left",
                  fontWeight: 600,
                  px: 2,
                  py: 2,
                }}
              >
                {project.location}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}