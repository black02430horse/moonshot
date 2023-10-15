import { TipButtonComponentStyle } from "./index.style";
import Box, { BoxProps } from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TipButtonModel } from "../../../models/button.model";
type TipButtonComponentProps = BoxProps & {
  content: string;
  btnColor: TipButtonModel;
};

export const TipButtonComponent: React.FC<TipButtonComponentProps> = (
  props
) => {
  const { content, btnColor } = props;
  return (
    <TipButtonComponentStyle btnColor={btnColor}>
      {content}
    </TipButtonComponentStyle>
  );
};
