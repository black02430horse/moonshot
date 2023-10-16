import { StyledComponentProps, styled } from "@mui/material";

import { CustomTheme } from "../../../style/types";
import { TipButtonModel } from "../../../models/button.model";

type TipButtonComponentStyleProps = StyledComponentProps & {
  btnColor: TipButtonModel;
};

export const TipButtonComponentStyle = styled(
  "div"
)<TipButtonComponentStyleProps>(({ theme, btnColor }) => {
  const customTheme = theme as CustomTheme;
  return {
    fontWeight: customTheme.fontWeights.regular,
    color: btnColor.color,
    backgroundColor: btnColor.bgColor,
    fontSize: "12px",
    padding: "2px 7px",
    borderRadius: "100px",
    fontFamily: "Inter",
    cursor: "pointer",
    // display: 'inline-block',
    alignItems: "center",
    display: "flex",
    height: "max-content",
    width: "max-content",
    justifyContent: "center",
    border: `1px solid ${btnColor.borderColor}`,
  };
});
