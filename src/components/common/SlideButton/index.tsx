import { SlideButtonComponentStyle } from "./index.style";
import Box, { BoxProps } from "@mui/material/Box";
import Button from "@mui/material/Button";
type SlideButtonComponentProps = BoxProps & {
  icon: any;
};

export const SlideButtonComponent: React.FC<SlideButtonComponentProps> = ({
  icon,
}) => {
  return <SlideButtonComponentStyle>{icon}</SlideButtonComponentStyle>;
};
