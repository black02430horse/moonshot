import React from "react";
import { Box } from "@mui/material";
import { HeaderView } from "./Header";
import { SliderView } from "./Slider";
import { FooterView } from "./Footer";
import { CarouselView } from "./Carousel";

export const HomeView: React.FC = () => {
  return (
    <Box>
      <HeaderView />
      <SliderView />
      <CarouselView />
      <FooterView />
    </Box>
  );
};
