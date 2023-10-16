import React from "react";
import { CarouselViewStyle } from "./index.style";
import { Box, Stack, Typography } from "@mui/material";
import { ButtonComponent } from "../../../common";
import { CarouselComponent } from "../../../common/Carousel";
import { CarouselList } from "../../../../consts";

export const CarouselView: React.FC = () => {
  return (
    <CarouselViewStyle>
      <Box display={"flex"} alignItems={"center"}>
        <Box className="head-container">
          <Typography className="font-inter font-size-36px font-regular">
            Join 4,000+ startups growing with Untitled
          </Typography>
          <Typography className="font-inter color-grey font-size-16">
            Start your 30-day free trial today.
          </Typography>
          <Box className="btn-group">
            <ButtonComponent content="Learn more" type={2} />
            <ButtonComponent content="Get started" type={1} />
          </Box>
        </Box>
      </Box>
      <CarouselComponent carousel={CarouselList[0]} />
    </CarouselViewStyle>
  );
};
