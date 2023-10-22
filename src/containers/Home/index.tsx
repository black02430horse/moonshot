import React, { useEffect, useState } from "react";
import { HomeView } from "../../components/view";
import { useSelector, useDispatch } from "react-redux";
import { AppActions, AppDispatch, RootState } from "../../redux/store";
import { AxiosBlogModel, BlogModel, ModalModel } from "../../models";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../consts";
import { SelectChangeEvent } from "@mui/material";
import { useSnackbar } from "notistack";

export const HomeContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { blogs } = useSelector((state: RootState) => state.blog);

  const initialModalState: ModalModel = {
    img: "",
    open: false,
    creator: "",
    title: "",
    content: "",
    buttons: [],
    isOk: false,
  };

  const [modalState, setModalState] = useState<ModalModel>(initialModalState);
  const { enqueueSnackbar } = useSnackbar();
  // console.log(modalState);

  useEffect(() => {
    dispatch(AppActions.blog.getBlogRequest({}));
    dispatch(AppActions.auth.getMeRequest({}));
  }, []);

  useEffect(() => {
    if (modalState.isOk) {
      console.log(modalState);
      const { creator, title, img, content, buttons } = modalState;
      const sendData: AxiosBlogModel = {
        creator,
        title,
        img,
        content,
        buttons: JSON.stringify(buttons),
      };
      dispatch(
        AppActions.blog.createBlogRequest({
          blog: sendData,
          errorAction: (errorMsg) => {
            if (typeof errorMsg === "string") errorMsg = [errorMsg];
            errorMsg.map((item: string) => {
              enqueueSnackbar(item, {
                variant: "error",
                autoHideDuration: 3000,
                style: { fontFamily: "Poppins", borderRadius: "12px" },
              });
            });
          },
        })
      );
    }
  }, [modalState]);

  return (
    <HomeView
      blogs={blogs}
      modalState={modalState}
      setModalState={setModalState}
    />
  );
};
