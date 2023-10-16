import React from "react";
import { Box } from "@mui/material";
import { HeaderView } from "./Header";
import { SliderView } from "./Slider";

export const HomeView: React.FC = () => {
  return (
    <Box>
      <HeaderView />
      <SliderView />
    </Box>
  );
};
