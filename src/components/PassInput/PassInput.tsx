import {
  TextField,
  InputAdornment,
  IconButton,
  Stack,
  FormHelperText,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Ref, useState } from "react";

interface Props {
  placeHolder: string;
  label: string;
  inputRef?: Ref<any>;
}

const PassInput = ({ placeHolder, label, inputRef }: Props) => {
  const [eyeOn, setEyeOn] = useState(true);
  const [showPass, setShowPass] = useState(false);

  return (
    <Stack gap="5px">
      <FormHelperText>{label}</FormHelperText>
      <TextField
        placeholder={placeHolder}
        variant="outlined"
        size="medium"
        inputRef={inputRef}
        type={showPass ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => {
                  setEyeOn(!eyeOn);
                  setShowPass(!showPass);
                }}
                aria-label="eye"
              >
                {eyeOn ? (
                  <VisibilityOutlinedIcon sx={{ color: "secondary.300" }} />
                ) : (
                  <VisibilityOffOutlinedIcon sx={{ color: "secondary.300" }} />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};
export default PassInput;
