import React from "react";
import { HeaderViewStyle } from "./index.style";
import {
  Box,
  Grid,
  Typography,
  Pagination,
  PaginationItem,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  BlogComponent,
  ButtonComponent,
  InputComponent,
} from "../../../common";
import { Logo } from "../../../../assets/logo";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import { BlogList } from "../../../../consts";
import { Grid3x3 } from "@mui/icons-material";
import { BlogModel } from "../../../../models";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const HeaderView: React.FC = () => {
  return (
    <HeaderViewStyle>
      <Box className="header-alert">
        <Box></Box>
        <Box className="text-group">
          <Typography className="font-size-16 font-inter alert-title header-text1">
            We’ve just launched a new feature!
          </Typography>
          <Box display={"flex"}>
            <Typography className="header-text2 font-size-16 font-inter alert-title">
              Checkout the
            </Typography>
            <Typography className="header-text2 font-size-16 font-inter alert-title text-decoration-underline">
              new dashboard.
            </Typography>
          </Box>
        </Box>
        <Box className="header-icon">
          <CloseIcon />
        </Box>
      </Box>
      <Box className="main-padding">
        <Box className="header-menu">
          <Box display={"flex"}>
            <Box className="header-logo">
              <img src={Logo} width={"50px"} />
              <Typography className="header-logo">Untitled UI</Typography>
            </Box>
            <Box className="btn-group">
              <ButtonComponent content="Home" />
              <ButtonComponent
                content="Products"
                icon={<ArrowDropDownIcon />}
              />
              <ButtonComponent
                content="Resources"
                icon={<ArrowDropDownIcon />}
              />
              <ButtonComponent content="Pricing" />
            </Box>
          </Box>
          <Box className="auth-btn">
            <ButtonComponent content="Log in" />
            <ButtonComponent content="Sign up" type={true} />
          </Box>
          <MenuIcon className="menu-btn" />
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
          <Box className="email-btn">
            <InputComponent
              placeholder="Enter your email"
              helper="We care about your data in our privacy policy."
            />
            <ButtonComponent content="Get started" type={true} />
          </Box>
        </Box>
        <Box className="review-container">
          <BlogComponent blog={BlogList[0]} />
        </Box>
        <Grid container spacing={3}>
          {BlogList.slice(1, BlogList.length).map(
            (item: BlogModel, index: number) => (
              <Grid item lg={4} md={6} sm={12}>
                <BlogComponent blog={item} />
              </Grid>
            )
          )}
        </Grid>
        <Box height={"64px"} />
        <Divider />
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          marginTop={"20px"}
        >
          <Box display={"flex"} alignItems={"center"} gap={"8px"}>
            <ArrowBackIosIcon fontSize="small" />
            <Typography className="font-Inter font-regular color-grey">
              Previous
            </Typography>
          </Box>
          <Pagination
            count={10}
            size="large"
            sx={{ fontFamily: "Inter", fontSize: "24px" }}
            hideNextButton
            hidePrevButton
          />
          <Box display={"flex"} alignItems={"center"} gap={"8px"}>
            <Typography className="font-Inter font-regular color-grey">
              Next
            </Typography>
            <ArrowForwardIosIcon fontSize="small" />
          </Box>
        </Box>
      </Box>
    </HeaderViewStyle>
  );
};
