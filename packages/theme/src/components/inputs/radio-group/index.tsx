import MuiRadio, {
  type RadioProps as MuiRadioProps,
} from '@mui/material/Radio';
import MuiRadioGroup, {
  type RadioGroupProps as MuiRadioGroupProps,
} from '@mui/material/RadioGroup';

// Radio
export type RadioProps = MuiRadioProps;
export function Radio(props: RadioProps) {
  return <MuiRadio {...props} />;
}

// Radio Group
export type RadioGroupProps = MuiRadioGroupProps;
export function RadioGroup(props: RadioGroupProps) {
  return <MuiRadioGroup {...props} />;
}
