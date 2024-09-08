import MuiButtonGroup, {
  type ButtonGroupProps as MuiButtonGroupProps,
} from '@mui/material/ButtonGroup';

export type ButtonGroupProps = MuiButtonGroupProps;
export function ButtonGroup(props: ButtonGroupProps) {
  return <MuiButtonGroup {...props} />;
}
