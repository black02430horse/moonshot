import { TipButtonComponentStyle } from "./index.style";
import Box, { BoxProps } from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TipButtonModel } from "../../../models/button.model";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { Key } from "react";
type TipButtonComponentProps = BoxProps & {
  content: string;
  btnColor: TipButtonModel;
  type?: number;
  id?: number;
  onCloseTipBtn?: (id: number) => void;
};

export const TipButtonComponent: React.FC<TipButtonComponentProps> = (
  props
) => {
  const { content, type, btnColor, id, onCloseTipBtn } = props;
  return (
    <TipButtonComponentStyle btnColor={btnColor}>
      <Box display={"flex"} gap={"5px"} alignItems={"center"}>
        {content}
        {type && (
          <CancelOutlinedIcon
            onClick={() => {
              onCloseTipBtn && onCloseTipBtn(id ?? 0);
            }}
          />
        )}
      </Box>
    </TipButtonComponentStyle>
  );
};
