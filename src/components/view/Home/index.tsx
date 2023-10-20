import React from "react";
import { Box, BoxProps } from "@mui/material";
import { HeaderView } from "./Header";
import { SliderView } from "./Slider";
import { FooterView } from "./Footer";
import { CarouselView } from "./Carousel";
import { BlogModel } from "../../../models";

type HomeViewProps = BoxProps & {
  blogs: BlogModel[] | undefined;
};

export const HomeView: React.FC<HomeViewProps> = ({ blogs }) => {
  return (
    <Box>
      <HeaderView blogs={blogs} />
      <SliderView blogs={blogs} />
      <CarouselView />
      <FooterView />
    </Box>
  );
};
