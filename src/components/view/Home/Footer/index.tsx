import React from "react";
import { FooterViewStyle } from "./index.style";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { ButtonComponent } from "../../../common";
import { Logo } from "../../../../assets/logo";

const footText = [
  [
    "Product",
    "Overview",
    "Features",
    "Solutions",
    "TUtorials",
    "Pricing",
    "Releases",
  ],
  ["Company", "About us", "Careers", "Press", "News", "Media kit", "Contact"],
  [
    "Resources",
    "Blog",
    "Newsletter",
    "Events",
    "Help center",
    "Tutorials",
    "Support",
  ],
  [
    "Social",
    "Twitter",
    "LinkedIn",
    "Facebook",
    "GitHub",
    "AngelList",
    "Dribbble",
  ],
  ["Legal", "Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"],
];

export const FooterView: React.FC = () => {
  return (
    <FooterViewStyle>
      <Box className="main-container">
        <Stack gap={"12px"}>
          <Box className="footer-logo">
            <img src={Logo} width={"50px"} />
            <Typography className="footer-logo">Untitled UI</Typography>
          </Box>
          <Typography className="font-size-16 font-inter color-olive">
            Design amazing digital experiences that create more happy in the
            world.
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {footText.map((col, index) => (
            <Grid item xs={6} sm={6} md={2.4} key={index}>
              <Stack gap={"12px"}>
                <Typography key={0} className="footer-text-title font-inter">
                  {col[0]}
                </Typography>
                {col.slice(1, col.length - 1).map((item, index) => (
                  <Typography
                    key={index + 1}
                    className="font-inter color-olive"
                  >
                    {item}
                  </Typography>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box className="divider"></Box>
      <Box className="last-container">
        <Typography className="font-size-16 font-inter color-olive">
          © 2077 Untitled UI. All rights reserved.
        </Typography>
      </Box>
    </FooterViewStyle>
  );
};
