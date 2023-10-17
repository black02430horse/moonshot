import React, { useEffect, useState } from "react";
import { HomeView } from "../../components/view";
import { useSelector, useDispatch } from "react-redux";
import { AppActions, AppDispatch, RootState } from "../../redux/store";
import { BlogModel } from "../../models";

export const HomeContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { blogs } = useSelector((state: RootState) => state.blog);

  useEffect(() => {
    dispatch(AppActions.blog.setBlog({}));
  }, []);

  return <HomeView blogs={blogs} />;
};
