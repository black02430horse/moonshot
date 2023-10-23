import { SignUpView } from "../../components/view";
import { useDispatch } from "react-redux";
import { AppActions, AppDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../consts";
import { useState, useEffect } from "react";
import { UserModel } from "../../models";
import { useSnackbar } from "notistack";

export const SignUpContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const initialState: UserModel = {
    userName: "",
    userEmail: "",
    userPassword: "",
    userConfirmPassword: "",
  };

  const [userInfo, setUserInfo] = useState<UserModel>(initialState);

  const { enqueueSnackbar } = useSnackbar();

  const onChange = (event: any): void => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const displaySnack = (variant: any, content: string) => {
    enqueueSnackbar(content, {
      variant: variant,
      autoHideDuration: 3000,
      style: { fontFamily: "Poppins", borderRadius: "12px" },
    });
  };


  const onClickSignUp = (): void => {
    if (userInfo.userPassword !== userInfo.userConfirmPassword) {
      enqueueSnackbar("password must be same!", {
        variant: "error",
        autoHideDuration: 3000,
        style: { fontFamily: "Poppins", borderRadius: "15px" },
      });
      setUserInfo({
        ...userInfo,
        userPassword: "",
        userConfirmPassword: "",
      });
      return;
    }
    dispatch(
      AppActions.auth.signUpRequest({
        userInfo: userInfo,
        next: () => {
          navigate(PATH.Login);
          enqueueSnackbar("Signed up successfully!", {
            variant: "success",
            autoHideDuration: 3000,
            style: { fontFamily: "Poppins", borderRadius: "12px" },
          });
        },
        errorAction: (errorMsg) => {
          errorMsg.map((item: string) => {
            enqueueSnackbar(item, {
              variant: "error",
              autoHideDuration: 3000,
              style: { fontFamily: "Poppins", borderRadius: "12px" },
            });
          });
          setUserInfo(initialState);
        },
      })
    );
  };

  return (
    <SignUpView
      userInfo={userInfo}
      onClickSignUp={onClickSignUp}
      onChange={onChange}
    />
  );
};
