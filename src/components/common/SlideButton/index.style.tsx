import { StyledComponentProps, styled } from "@mui/material";

import { CustomTheme } from "../../../style/types";

type SlideButtonComponentStyleProps = StyledComponentProps & {};

export const SlideButtonComponentStyle = styled(
  "div"
)<SlideButtonComponentStyleProps>(({ theme }) => {
  const customTheme = theme as CustomTheme;
  return {
    border: "1px solid #667085",
    padding: "12px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  };
});
