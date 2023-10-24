import React from "react";
import { Box, BoxProps, SelectChangeEvent } from "@mui/material";
import { HeaderView } from "./Header";
import { SliderView } from "./Slider";
import { FooterView } from "./Footer";
import { CarouselView } from "./Carousel";
import { BlogModel, ModalModel } from "../../../models";

type HomeViewProps = BoxProps & {
  blogs: BlogModel[] | undefined;
  modalState: ModalModel;
  setModalState: (state: ModalModel) => void;
  onEditBlog: (index: number) => void;
  onDeleteBlog: (index: number) => void;
};

export const HomeView: React.FC<HomeViewProps> = ({
  blogs,
  modalState,
  setModalState,
  onEditBlog,
  onDeleteBlog,
}) => {
  return (
    <Box>
      <HeaderView
        onEditBlog={onEditBlog}
        onDeleteBlog={onDeleteBlog}
        blogs={blogs}
        modalState={modalState}
        setModalState={setModalState}
      />
      <SliderView blogs={blogs} />
      <CarouselView />
      <FooterView />
    </Box>
  );
};
