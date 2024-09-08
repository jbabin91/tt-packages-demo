import MuiToggleButton, {
  type ToggleButtonProps as MuiToggleButtonProps,
} from '@mui/material/ToggleButton';
import MuiToggleButtonGroup, {
  type ToggleButtonGroupProps as MuiToggleButtonGroupProps,
} from '@mui/material/ToggleButtonGroup';

// Toggle Button
export type ToggleButtonProps = MuiToggleButtonProps;
export function ToggleButton(props: ToggleButtonProps) {
  return <MuiToggleButton {...props} />;
}

// Toggle Button Group
export type ToggleButtonGroupProps = MuiToggleButtonGroupProps;
export function ToggleButtonGroup(props: ToggleButtonGroupProps) {
  return <MuiToggleButtonGroup {...props} />;
}
