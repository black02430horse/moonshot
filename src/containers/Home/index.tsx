import React, { useEffect, useState } from "react";
import { HomeView } from "../../components/view";
import { useSelector, useDispatch } from "react-redux";
import { AppActions, AppDispatch, RootState } from "../../redux/store";
import { BlogModel } from "../../models";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../consts";

export const HomeContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { blogs } = useSelector((state: RootState) => state.blog);

  useEffect(() => {
    dispatch(AppActions.blog.getBlogRequest({}));
  }, []);

  return <HomeView blogs={blogs} />;
};
