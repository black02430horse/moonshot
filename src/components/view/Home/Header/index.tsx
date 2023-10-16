import React from "react";
import { HeaderViewStyle } from "./index.style";
import { Box, Grid, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ButtonComponent, InputComponent } from "../../../common";
import { Logo } from "../../../../assets/logo";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { BlogPng } from "../../../../assets/image";

export const HeaderView: React.FC = () => {
  return (
    <HeaderViewStyle>
      <Box className="header-alert">
        <Box></Box>
        <Box className="text-group">
          <Typography className="font-size-16 font-inter alert-title header-text1">
            We’ve just launched a new feature!
          </Typography>
          <Typography className="header-text2 font-size-16 font-inter alert-title">
            Checkout the
          </Typography>
          <Typography className="header-text2 font-size-16 font-inter alert-title text-decoration-underline">
            new dashboard.
          </Typography>
        </Box>
        <Box className="header-icon">
          <CloseIcon />
        </Box>
      </Box>
      <Box className="header-menu">
        <Box display={"flex"}>
          <Box className="header-logo">
            <img src={Logo} width={"50px"} />
            <Typography className="header-logo">Untitled UI</Typography>
          </Box>
          <ButtonComponent content="Home" />
          <ButtonComponent content="Products" icon={<ArrowDropDownIcon />} />
          <ButtonComponent content="Resources" icon={<ArrowDropDownIcon />} />
          <ButtonComponent content="Pricing" />
        </Box>
        <Box display={"flex"}>
          <ButtonComponent content="Log in" />
          <ButtonComponent content="Sign up" type={true} />
        </Box>
      </Box>
      <Box className="blog-container">
        <Typography className="font-size-16 color-secondary font-regular">
          Our blog
        </Typography>
        <Typography className="font-size-36px font-regular">
          Resources and insights
        </Typography>
        <Typography className="font-size-16 color-grey font-inter ">
          The latest industry news, interviews, technologies, and resources.
        </Typography>
        <Box display={"flex"} gap={"12px"}>
          <InputComponent
            placeholder="Enter your email"
            helper="We care about your data in our privacy policy."
          />
          <ButtonComponent content="Get started" type={true} />
        </Box>
      </Box>
      <Box className="review-container">
        <Box className="image-container">
          <img src={BlogPng} width={"100%"} style={{ borderRadius: "12px" }} />
        </Box>
      </Box>
    </HeaderViewStyle>
  );
};
