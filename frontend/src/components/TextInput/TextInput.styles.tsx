import { TextField, TextFieldProps } from "@mui/material"
import { styled } from "@mui/system";
import sx from "@mui/system/sx";

export const TextInput = styled(TextField)<TextFieldProps>(sx({
  margin: "1rem"
})) as typeof TextField;