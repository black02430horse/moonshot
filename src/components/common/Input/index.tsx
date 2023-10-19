import { InputComponentStyle } from "./index.style";
import { Box, BoxProps, InputBase, Typography } from "@mui/material";
type InputComponentProps = BoxProps & {
  placeholder?: string;
  name?: string;
  onChange?: (event: any) => void;
  value?: string;
  width?: number;
  helper?: string;
  icon?: string;
  type?: string;
  error?: string;
};

export const InputComponent: React.FC<InputComponentProps> = (props) => {
  const {
    placeholder,
    width,
    helper,
    icon,
    type,
    value,
    name,
    onChange,
    error,
  } = props;
  return (
    <Box textAlign={"left"}>
      <InputComponentStyle width={width}>
        <img src={icon} className="icon-container" />
        <InputBase
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          className="input"
          type={type}
        />
      </InputComponentStyle>
      <Typography
        fontFamily={"Inter"}
        color={"#475467"}
        fontSize={"14px"}
        fontWeight={200}
      >
        {helper}
      </Typography>
      <Typography
        fontFamily={"Poppins"}
        color={"#DD4132"}
        fontSize={"14px"}
        fontWeight={200}
      >
        {error}
      </Typography>
    </Box>
  );
};
