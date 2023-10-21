import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent, SelectProps } from "@mui/material/Select";
import { buttonColorList } from "../../../consts";

type SelectComponentProps = {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
};

export const SelectComponent: React.FC<SelectComponentProps> = ({
  value,
  onChange,
}) => {
  return (
    <div>
      <FormControl
        sx={{
          width: "100%",
          margin: "0px",
        }}
      >
        {/* <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel> */}
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={value}
          onChange={onChange}
          sx={{
            ".MuiSelect-select": {
              padding: "10px 10px",
            },
            ":hover": {
              borderColor: "#ffffff",
            },
          }}
          // autoWidth
          // label="Age"
        >
          {buttonColorList.map((item: string, index: number) => (
            <MenuItem value={item} key={index + 1}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
