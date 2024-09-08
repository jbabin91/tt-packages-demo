import MuiFormControl, {
  type FormControlProps as MuiFormControlProps,
} from '@mui/material/FormControl';
import MuiFormControlLabel, {
  type FormControlLabelProps as MuiFormControlLabelProps,
} from '@mui/material/FormControlLabel';
import MuiFormGroup, {
  type FormGroupProps as MuiFormGroupProps,
} from '@mui/material/FormGroup';
import MuiFormHelperText, {
  type FormHelperTextProps as MuiFormHelperTextProps,
} from '@mui/material/FormHelperText';
import MuiFormLabel, {
  type FormLabelProps as MuiFormLabelProps,
} from '@mui/material/FormLabel';

// Form Control
export type FormControlProps = MuiFormControlProps;
export function FormControl(props: FormControlProps) {
  return <MuiFormControl {...props} />;
}

// Form Control Label
export type FormControlLabelProps = MuiFormControlLabelProps;
export function FormControlLabel(props: FormControlLabelProps) {
  return <MuiFormControlLabel {...props} />;
}

// Form Group
export type FormGroupProps = MuiFormGroupProps;
export function FormGroup(props: FormGroupProps) {
  return <MuiFormGroup {...props} />;
}

// Form Helper Text
export type FormHelperTextProps = MuiFormHelperTextProps;
export function FormHelperText(props: FormHelperTextProps) {
  return <MuiFormHelperText {...props} />;
}

// Form Label
export type FormLabelProps = MuiFormLabelProps;
export function FormLabel(props: FormLabelProps) {
  return <MuiFormLabel {...props} />;
}
