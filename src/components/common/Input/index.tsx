import { InputComponentStyle } from "./index.style";
import { Box, BoxProps, InputBase, Typography } from "@mui/material";
type InputComponentProps = BoxProps & {
  placeholder?: string;
  width?: number;
  helper?: string;
};

export const InputComponent: React.FC<InputComponentProps> = (props) => {
  const { placeholder, width, helper } = props;
  return (
    <Box textAlign={"left"}>
      <InputComponentStyle width={width}>
        <InputBase placeholder={placeholder} className="input" />
      </InputComponentStyle>
      <Typography
        fontFamily={"Inter"}
        color={"#475467"}
        fontSize={"14px"}
        fontWeight={200}
      >
        {helper}
      </Typography>
    </Box>
  );
};
