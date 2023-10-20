import { useDispatch, useSelector } from "react-redux";
import { LoginView } from "../../components/view";
import { AppActions, AppDispatch, RootState } from "../../redux/store";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router";
import { PATH } from "../../consts";
import { UserModel } from "../../models";

export const LoginContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();

  const initialState = { userEmail: "", userPassword: "" };

  const user: UserModel | null = useSelector(
    (state: RootState) => state.auth.user
  );

  const [userInfo, setUserInfo] = useState<{
    userEmail: string;
    userPassword: string;
  }>(initialState);

  const onLoginClick = () => {
    dispatch(
      AppActions.auth.signInRequest({
        userInfo: userInfo,
        errorAction: (errorMsg) => {
          if (typeof errorMsg === "string") errorMsg = [errorMsg];
          errorMsg.map((item: string) => {
            enqueueSnackbar(item, {
              variant: "error",
              autoHideDuration: 3000,
              style: { fontFamily: "Poppins", borderRadius: "12px" },
            });
          });
          setUserInfo(initialState);
        },
        next: () => {
          dispatch(
            AppActions.auth.getMeRequest({
              next: () => {
                enqueueSnackbar(`${user?.userName} signed in successfully.`, {
                  variant: "success",
                  autoHideDuration: 3000,
                  style: { fontFamily: "Poppins", borderRadius: "12px" },
                });
                navigate(PATH.Home);
              },
            })
          );
        },
      })
    );
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  return (
    <LoginView
      onLoginClick={onLoginClick}
      onChange={onChange}
      userInfo={userInfo}
    />
  );
};
