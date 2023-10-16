import { ButtonComponentStyle } from "./index.style";
import Box, { BoxProps } from "@mui/material/Box";
import Button from "@mui/material/Button";
type ButtonComponentProps = BoxProps & {
  content: React.ReactElement | string;
  type?: number;
  icon?: React.ReactElement;
};

export const ButtonComponent: React.FC<ButtonComponentProps> = (props) => {
  const { content, type, icon } = props;
  return (
    <ButtonComponentStyle type={type}>
      {content}
      {icon}
    </ButtonComponentStyle>
  );
};
