import React from "react";
import { SignUpViewStyle } from "./index.style";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import { ButtonComponent, InputComponent } from "../../common";
import { GoogleSvg, LockSvg, UserSvg, FacebookSvg } from "../../../assets/icon";
import { PATH } from "../../../consts";
import { Link } from "react-router-dom";

export const SignUpView: React.FC = () => {
  const googleBtn: any = (
    <Box display={"flex"} gap={"10px"} alignItems={"center"}>
      <img src={GoogleSvg} />
      <Typography className="font-poppin font-size-12">
        Sign up with <strong>google</strong>
      </Typography>
    </Box>
  );

  const facebookBtn: any = (
    <Box display={"flex"} gap={"10px"} alignItems={"center"}>
      <img src={FacebookSvg} />
      <Typography className="font-poppin font-size-12">
        Sign up with <strong>facebook</strong>
      </Typography>
    </Box>
  );

  return (
    <SignUpViewStyle>
      <Grid
        container
        // spacing={3}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid item className="main-container" md={12} lg={6}>
          <Box>
            <Typography className="title">Welcome</Typography>
            <Typography className="font-poppin font-size-16 text-center">
              We are glad to see you back with us
            </Typography>
          </Box>
          <Box className="login-container">
            <InputComponent placeholder="Username" icon={UserSvg} type="text" />
            <InputComponent
              placeholder="Password"
              icon={LockSvg}
              type="password"
            />
            <InputComponent
              placeholder="Confirm password"
              icon={LockSvg}
              type="password"
            />
            <Box>
              <ButtonComponent type={1} content="Sign Up" />
              <Box
                display={"flex"}
                gap="12px"
                marginTop={"8px"}
                justifyContent={"center"}
              >
                <Typography className="font-poppin font-size-12 text-center">
                  Do you have accounts?
                </Typography>
                <Link to={PATH.Login}>
                  <Typography className="font-poppin font-size-12 text-center">
                    Sign In
                  </Typography>
                </Link>
              </Box>
            </Box>
            <Typography className="font-poppin font-size-16 text-center">
              <strong>SignUp</strong> with Others
            </Typography>
            <Box className="login-container">
              <ButtonComponent content={googleBtn} type={2} />
              <ButtonComponent content={facebookBtn} type={2} />
            </Box>
          </Box>
        </Grid>
        <Grid item md={12} lg={6}>
          <img src="./image/9.png" className="image-container" />
        </Grid>
      </Grid>
    </SignUpViewStyle>
  );
};
