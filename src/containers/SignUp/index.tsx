import { SignUpView } from "../../components/view";
import { useDispatch } from "react-redux";
import { AppActions, AppDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../consts";
import { useState, useEffect } from "react";
import { UserModel } from "../../models";

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

  const onChange = (event: any): void => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const onClickSignUp = (): void => {
    if (userInfo.userPassword !== userInfo.userConfirmPassword) {
      alert("password must be same");
      return;
    }
    dispatch(
      AppActions.auth.signUpRequest({
        userInfo: userInfo,
        next: () => {
          navigate(PATH.Login);
        },
        errorAction: (errorMsg) => {
          alert(errorMsg);
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
