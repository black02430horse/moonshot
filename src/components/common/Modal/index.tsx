import * as React from "react";
import { ChangeEvent } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Box,
  BoxProps,
  Divider,
  Grid,
  Input,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import { InputComponent } from "../Input";
import { SelectComponent } from "../Select";
import { BlogModel, ModalModel, TipButtonModel } from "../../../models";
import { ButtonComponent } from "../Button";
import { TipButtons } from "../../../consts";
import { TipButtonComponent } from "../TipButton";

type ModalComponentProps = BoxProps & {
  modalState: ModalModel;
  setModalState: (state: ModalModel) => void;
};

const titleStyle = {
  textAlign: "right",
  fontFamily: "Poppins",
  marginTop: "12px",
};

export const ModalComponent: React.FC<ModalComponentProps> = ({
  modalState,
  setModalState,
}) => {
  const handleClose = (isOk: boolean) => {
    setModalState(
      !isOk
        ? { ...modalState, open: false }
        : { ...state, open: false, isOk: true }
    );
  };

  const [state, setState] = React.useState<ModalModel>(modalState);

  React.useEffect(() => {
    setState(modalState);
    setColor("");
    setButtonName("");
  }, [modalState]);

  const [color, setColor] = React.useState<string>("");
  const [buttonName, setButtonName] = React.useState<string>("");
  const [file, setFile] = React.useState<File | null>(null);

  const onColorChange = (event: SelectChangeEvent<string>) => {
    setColor(event.target.value);
  };

  const onButtonNameChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setButtonName(event.target.value);
  };

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const onButtonAdd = () => {
    setState({
      ...state,
      buttons: [
        ...state.buttons,
        { content: buttonName, color: TipButtons[color] },
      ],
    });
    setColor("");
    setButtonName("");
  };

  const onFileChange = (event: any) => {
    if (event.target.files)
      setState({ ...state, file: event.target?.files[0] });
  };

  const onCloseTipBtn = (id: number) => {
    // console.log(id);
    setState({
      ...state,
      buttons: state.buttons.filter((item, index: number) => index != id),
    });
  };

  return (
    <Dialog
      open={state.open}
      onClose={() => handleClose(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        ".MuiPaper-root": {
          borderRadius: "20px",
          width: "500px",
        },
      }}
      className="my-dialog"
    >
      <DialogTitle id="alert-dialog-title" textAlign={"center"}>
        {"Create a new Blog"}
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Stack>
          <Grid container spacing={1.5}>
            <Grid sx={titleStyle} item xs={2}>
              image:
            </Grid>
            <Grid item xs={10}>
              <InputComponent
                type="file"
                name="img"
                // value={state.img}
                onChange={onFileChange}
              />
            </Grid>
            <Grid sx={titleStyle} item xs={2}>
              creator:
            </Grid>
            <Grid item xs={10}>
              <InputComponent
                name="creator"
                type="text"
                value={state.creator}
                onChange={onChange}
              />
            </Grid>

            <Grid sx={titleStyle} item xs={2}>
              title:
            </Grid>
            <Grid item xs={10}>
              <InputComponent
                name="title"
                value={state.title}
                onChange={onChange}
              />
            </Grid>

            <Grid sx={titleStyle} item xs={2}>
              content:
            </Grid>
            <Grid item xs={10}>
              <InputComponent
                value={state.content}
                name="content"
                multiline={true}
                onChange={onChange}
              />
            </Grid>

            <Grid sx={titleStyle} item xs={2}>
              buttons:
            </Grid>
            <Grid item xs={4}>
              <InputComponent
                onChange={onButtonNameChange}
                name="buttonName"
                multiline={true}
                value={buttonName}
              />
            </Grid>
            <Grid item xs={4}>
              <SelectComponent value={color} onChange={onColorChange} />
            </Grid>
            <Grid item xs={2}>
              <ButtonComponent content={"Add"} type={1} onClick={onButtonAdd} />
            </Grid>
            {/* <Grid item xs={4}></Grid> */}
            <Grid item xs={8}>
              <Box display={"flex"} gap={"12px"} flexWrap={"wrap"}>
                {state.buttons.length > -1
                  ? state.buttons.map((item, index: number) => (
                      <TipButtonComponent
                        content={item.content}
                        btnColor={item.color}
                        key={index}
                        type={1}
                        id={index}
                        onCloseTipBtn={onCloseTipBtn}
                      />
                    ))
                  : null}
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose(true)}>OK</Button>
        <Button onClick={() => handleClose(false)}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};
