import MuiInput, {
  type InputProps as MuiInputProps,
} from '@mui/material/Input';
import MuiInputAdornment, {
  type InputAdornmentProps as MuiInputAdornmentProps,
} from '@mui/material/InputAdornment';
import MuiInputLabel, {
  type InputLabelProps as MuiInputLabelProps,
} from '@mui/material/InputLabel';
import MuiOutlinedInput, {
  type OutlinedInputProps as MuiOutlinedInputProps,
} from '@mui/material/OutlinedInput';

// Input
export type InputProps = MuiInputProps;
export function Input(props: InputProps) {
  return <MuiInput {...props} />;
}

// Input Label
export type InputLabelProps = MuiInputLabelProps;
export function InputLabel(props: InputLabelProps) {
  return <MuiInputLabel {...props} />;
}

// Input Adornment
export type InputAdornmentProps = MuiInputAdornmentProps;
export function InputAdornment(props: InputAdornmentProps) {
  return <MuiInputAdornment {...props} />;
}

// Outlined Input
export type OutlinedInputProps = MuiOutlinedInputProps;
export function OutlinedInput(props: OutlinedInputProps) {
  return <MuiOutlinedInput {...props} />;
}
