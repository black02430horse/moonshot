import { StyledComponentProps, styled } from "@mui/material";

import { CustomTheme } from "../../../style/types";

type SlideButtonComponentStyleProps = StyledComponentProps & { type: number };

export const SlideButtonComponentStyle = styled(
  "div"
)<SlideButtonComponentStyleProps>(({ theme, type }) => {
  const customTheme = theme as CustomTheme;
  return {
    border: `1px solid ${type == 1 ? "#667085" : "white"}`,
    padding: "12px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  };
});
