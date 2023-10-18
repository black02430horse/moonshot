import { BoxProps, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { BlogModel } from "../../../models";
import { BlogComponent } from "../Blog";
import { SwiperComponentStyle } from "./index.style";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { SlideButtonComponent } from "../SlideButton";

type SwiperComponentProps = BoxProps & {
  slides: BlogModel[];
};

const style = {
  display: "flex",
  gap: "15px",
  margin: "1%",
};

export const SwiperComponent: React.FC<SwiperComponentProps> = ({ slides }) => {
  return (
    <SwiperComponentStyle>
      <Swiper
        slidesPerView={3}
        breakpoints={{
          1200: {
            slidesPerView: 3,
          },
          900: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
        loop={true}
      >
        {slides.map((slide: BlogModel, index: number) => (
          <SwiperSlide key={index}>
            {<BlogComponent blog={slide} />}
          </SwiperSlide>
        ))}
        {slides.map((slide: BlogModel, index: number) => (
          <SwiperSlide key={index * 2 + 1}>
            {<BlogComponent blog={slide} />}
          </SwiperSlide>
        ))}
      </Swiper>
      <Box className="btn-group">
        <SlideButtonComponent
          icon={<ArrowBackIcon sx={{ color: "#475467" }} />}
          type={1}
        />
        <SlideButtonComponent
          icon={<ArrowForwardIcon sx={{ color: "#475467" }} />}
          type={1}
        />
      </Box>
    </SwiperComponentStyle>
  );
};
