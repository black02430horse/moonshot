import React from "react";
import { SignUpViewStyle } from "./index.style";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import { ButtonComponent, InputComponent } from "../../common";
import { GoogleSvg, LockSvg, UserSvg, FacebookSvg } from "../../../assets/icon";

export const SignUpView: React.FC = () => {
  const googleBtn: any = (
    <Box display={"flex"} gap={"10px"} alignItems={"center"}>
      <img src={GoogleSvg} />
      <Typography className="font-poppin font-size-12">
        Login with <strong>google</strong>
      </Typography>
    </Box>
  );

  const facebookBtn: any = (
    <Box display={"flex"} gap={"10px"} alignItems={"center"}>
      <img src={FacebookSvg} />
      <Typography className="font-poppin font-size-12">
        Login with <strong>facebook</strong>
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
            <ButtonComponent type={1} content="Login" />
          </Box>
          <Typography className="font-poppin font-size-16 text-center">
            <strong>Login</strong> with Others
          </Typography>
          <Box className="login-container">
            <ButtonComponent content={googleBtn} type={2} />
            <ButtonComponent content={facebookBtn} type={2} />
          </Box>
        </Grid>
        <Grid item md={12} lg={6}>
          <img src="./image/9.png" className="image-container" />
        </Grid>
      </Grid>
    </SignUpViewStyle>
  );
};
