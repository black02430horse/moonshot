import { useDispatch, useSelector } from "react-redux";
import { LoginView } from "../../components/view";
import { AppActions, AppDispatch, RootState } from "../../redux/store";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router";
import { PATH } from "../../consts";
import { UserModel } from "../../models";
import { Variant } from "@testing-library/react";

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

  const displaySnack = (variant: any, content: string) => {
    enqueueSnackbar(content, {
      variant: variant,
      autoHideDuration: 3000,
      style: { fontFamily: "Poppins", borderRadius: "12px" },
    });
  };

  const onLoginClick = () => {
    dispatch(
      AppActions.auth.signInRequest({
        userInfo: userInfo,
        errorAction: (errorMsg) => {
          if (typeof errorMsg === "string") errorMsg = [errorMsg];
          errorMsg.map((item: string) => {
            displaySnack("error", item);
          });
          setUserInfo(initialState);
        },
        next: () => {
          dispatch(
            AppActions.auth.getMeRequest({
              next: () => {
                displaySnack(
                  "success",
                  `${user?.userName} signed in successfully.`
                );
                navigate(PATH.Home);
              },
            })
          );
        },
      })
    );
  };

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
