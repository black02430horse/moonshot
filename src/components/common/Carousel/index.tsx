import React from "react";
import { CarouselModel } from "../../../models";
import { CarouselComponentStyle } from "./index.style";
import { Box, BoxProps, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { SlideButtonComponent } from "../SlideButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type CarouselComponentProps = BoxProps & {
  carousel: CarouselModel;
};

export const CarouselComponent: React.FC<CarouselComponentProps> = (props) => {
  const { carousel } = props;
  const array = new Array(0);
  for (let i = 0; i < carousel.level; i++) array.push(i);
  React.useEffect(() => {}, [carousel]);
  return (
    <CarouselComponentStyle img={carousel.img}>
      <Box className="blur-wrap">
        <Box className="blur" />
      </Box>
      <Box className="main-container">
        <Typography className="font-inter font-size-16 color-white">
          {carousel.content}
        </Typography>
        <Box className="space-between-container">
          <Typography className="font-inter color-white font-size-24px font-regular">
            {carousel.name}
          </Typography>
          <Box className="star-group">
            {array.map((item: number, index: number) => (
              <StarIcon key={index} sx={{ color: "white" }} />
            ))}
          </Box>
        </Box>
        <Box className="space-between-container">
          <Box>
            <Typography className="font-inter font-size-14 color-white">
              {carousel.time}
            </Typography>
            <Typography className="font-inter font-size-14 color-white">
              {carousel.job}
            </Typography>
          </Box>
          <Box display={"flex"} gap={"20px"}>
            <SlideButtonComponent
              type={2}
              icon={<ArrowBackIcon sx={{ color: "white" }} />}
            />
            <SlideButtonComponent
              type={2}
              icon={<ArrowForwardIcon sx={{ color: "white" }} />}
            />
          </Box>
        </Box>
      </Box>
    </CarouselComponentStyle>
  );
};
