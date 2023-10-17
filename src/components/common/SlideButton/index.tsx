import { SlideButtonComponentStyle } from "./index.style";
import Box, { BoxProps } from "@mui/material/Box";
import Button from "@mui/material/Button";
type SlideButtonComponentProps = BoxProps & {
  icon: React.ReactElement;
  type: number;
};

export const SlideButtonComponent: React.FC<SlideButtonComponentProps> = ({
  icon,
  type,
}) => {
  return (
    <SlideButtonComponentStyle type={type}>{icon}</SlideButtonComponentStyle>
  );
};
