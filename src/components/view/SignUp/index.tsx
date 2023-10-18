import React from "react";
import { SignUpViewStyle } from "./index.style";
import { Box } from "@mui/system";
import { BoxProps, Grid, Typography } from "@mui/material";
import { ButtonComponent, InputComponent } from "../../common";
import { GoogleSvg, LockSvg, UserSvg, FacebookSvg } from "../../../assets/icon";
import { PATH } from "../../../consts";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppActions, AppDispatch } from "../../../redux/store";
import { UserModel } from "../../../models";

type SignUpViewProps = BoxProps & {
  userInfo: UserModel;
  onClickSignUp: () => void;
  onChange: (event: any) => void;
};

export const SignUpView: React.FC<SignUpViewProps> = ({
  userInfo,
  onClickSignUp,
  onChange,
}) => {
  const dispatch = useDispatch<AppDispatch>();
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
            <InputComponent
              name="userName"
              value={userInfo.userName}
              onChange={onChange}
              placeholder="Username"
              icon={UserSvg}
              type="text"
            />
            <InputComponent
              name="userEmail"
              value={userInfo.userEmail}
              onChange={onChange}
              placeholder="Email"
              icon={UserSvg}
              type="text"
            />
            <InputComponent
              name="userPassword"
              value={userInfo.userPassword}
              onChange={onChange}
              placeholder="Password"
              icon={LockSvg}
              type="password"
            />
            <InputComponent
              name="userConfirmPassword"
              value={userInfo.userConfirmPassword}
              onChange={onChange}
              placeholder="Confirm password"
              icon={LockSvg}
              type="password"
            />
            <Box>
              <ButtonComponent
                type={1}
                content="Sign Up"
                onClick={onClickSignUp}
              />
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
