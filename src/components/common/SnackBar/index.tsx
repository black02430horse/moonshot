import * as React from "react";
import { Snackbar, AlertColor, SnackbarOrigin } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type SnackBarComponentProps = {
  id?: number;
  type?: AlertColor | undefined;
  content?: string;
};

export const SnackBarComponent: React.FC<SnackBarComponentProps> = ({
  id = 0,
  type = "info",
  content = "Please input alert message!",
}) => {
  const [open, setOpen] = React.useState<boolean>(true);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    >
      <Alert
        onClose={handleClose}
        severity={type}
        sx={{
          fontFamily: "Poppins",
          borderRadius: "12px",
          marginBottom: `${55 * id}px`,
        }}
      >
        {content}
      </Alert>
    </Snackbar>
  );
};
