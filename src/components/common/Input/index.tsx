import { InputComponentStyle } from "./index.style";
import { Box, InputBase, InputProps, Typography } from "@mui/material";

type InputComponentProps = InputProps & {
  placeholder?: string;
  name?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
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
    multiline,
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
          multiline={multiline}
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
