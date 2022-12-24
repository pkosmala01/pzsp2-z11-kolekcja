import { TextFieldProps } from "@mui/material"
import * as Styled from "./TextInput.styles";


const TextInput = (props: TextFieldProps) => {
  return (
    <Styled.TextInput
      fullWidth
      variant='outlined'
      required={props.required}
      label={props.label}
      onClick={props.onClick}
      onChange={props.onChange}
    />
  )
}

export default TextInput