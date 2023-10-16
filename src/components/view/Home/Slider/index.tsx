import React from "react";
import { SliderViewStyle } from "./index.style";
import { Box, BoxProps, Stack, Typography } from "@mui/material";
import { ButtonComponent } from "../../../common";
import { SwiperComponent } from "../../../common/Swiper";
import { BlogList } from "../../../../consts";
import { BlogModel } from "../../../../models";

type SliderViewProps = BoxProps & {
  blogs: BlogModel[];
};

export const SliderView: React.FC<SliderViewProps> = ({ blogs }) => {
  return (
    <SliderViewStyle>
      <Box className="header">
        <Stack>
          <Typography className="font-inter font-size-36px font-regular">
            Latest writings
          </Typography>
          <Typography className="font-inter font-size-16 color-grey">
            The latest news, technologies, and resources from our team.
          </Typography>
        </Stack>
        <Box className="header-btn">
          <ButtonComponent content="View all posts" type={1} />
        </Box>
      </Box>
      <SwiperComponent slides={blogs.slice(1, blogs.length - 1)} />
      <Box className="footer-btn">
        <ButtonComponent content="View all posts" type={1} />
      </Box>
    </SliderViewStyle>
  );
};
