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
    id: -1,
  };

  const [modalState, setModalState] = useState<ModalModel>(initialModalState);
  const { enqueueSnackbar } = useSnackbar();
  // console.log(modalState);

  useEffect(() => {
    dispatch(AppActions.blog.getBlogRequest({}));
    dispatch(AppActions.auth.getMeRequest({}));
  }, []);

  const onEditBlog = (index: number) => {
    setModalState({ ...blogs[index], open: true, isOk: false, index: index });
  };

  const onDeleteBlog = (index: number) => {
    // console.log(index);
    //setModalState({ ...blogs[index], open: true, isOk: false, index: index });
    dispatch(
      AppActions.blog.deleteBlogRequest({
        id: blogs[index].id,
        next: () => {
          displaySnack("success", "deleted successfully!");
        },
      })
    );
  };

  const displaySnack = (variant: any, content: string) => {
    enqueueSnackbar(content, {
      variant: variant,
      autoHideDuration: 3000,
      style: { fontFamily: "Poppins", borderRadius: "12px" },
    });
  };

  useEffect(() => {
    if (modalState.isOk) {
      console.log(modalState);
      const { creator, title, img, content, buttons, id, file } = modalState;
      const sendData: AxiosBlogModel = {
        creator,
        title,
        img,
        content,
        buttons: JSON.stringify(buttons),
        id,
      };
      if (id < 0)
        dispatch(
          AppActions.blog.createBlogRequest({
            blog: sendData,
            file: modalState.file,
            errorAction: (errorMsg) => {
              if (typeof errorMsg === "string") errorMsg = [errorMsg];
              errorMsg.map((item: string) => {
                displaySnack("error", item);
              });
            },
          })
        );
      else {
        dispatch(
          AppActions.blog.editBlogRequest({
            blog: sendData,
            id: id,
            errorAction: (errorMsg) => {
              if (typeof errorMsg === "string") errorMsg = [errorMsg];
              errorMsg.map((item: string) => {
                displaySnack("error", item);
              });
            },
          })
        );
      }
    }
  }, [modalState]);

  return (
    <HomeView
      onEditBlog={onEditBlog}
      onDeleteBlog={onDeleteBlog}
      blogs={blogs}
      modalState={modalState}
      setModalState={setModalState}
    />
  );
};
