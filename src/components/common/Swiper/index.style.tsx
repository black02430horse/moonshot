import { StyledComponentProps, styled } from "@mui/material";

import { CustomTheme } from "../../../style/types";

type SwiperComponentStyleProps = StyledComponentProps & {};

export const SwiperComponentStyle = styled("div")<SwiperComponentStyleProps>(
  ({ theme }) => {
    const customTheme = theme as CustomTheme;
    return {
      ".btn-group": {
        display: "flex",
        gap: "30px",
        margin: "20px 0",
      },
    };
  }
);
