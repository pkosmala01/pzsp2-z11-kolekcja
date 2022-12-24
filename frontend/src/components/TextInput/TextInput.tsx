import { TextField, TextFieldProps } from "@mui/material"
import * as Styled from "./TextInput.styles";


const TextInput = (props: TextFieldProps) => {
  return (
    <Styled.TextInput
      fullWidth
      variant='outlined'
      required={props.required}
      label={props.label}
    />
  )
}

export default TextInput